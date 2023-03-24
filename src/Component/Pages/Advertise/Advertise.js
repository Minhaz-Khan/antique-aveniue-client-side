import React, { useEffect, useState } from 'react';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Advertise.css'

const Advertise = () => {
    const [advertised, setAdvertised] = useState([])
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    useEffect(() => {
        fetch('http://localhost:5000/avertised', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdvertised(data)
            })
    }, [])
    console.log(advertised)
    return (
        advertised.length > 0 &&
        <div>
            <h3 className='text-5xl font-semibold text-center text-maroon font-Caveat my-10'>Advertised Product</h3>
            <Link to={`/allSalePost/${advertised[0]?.categories}`} id="main-slider-container">
                <BsChevronLeft className="slider-icon left text-3xl" onClick={slideRight} />
                <div id="slider">
                    {
                        advertised.map(slide => {
                            return (
                                <div className="slider-card" key={slide._id} onClick={() => slide.clickEvent()}>
                                    <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                    <p className="slider-card-title">{slide?.productName}</p>
                                    <p className="slider-card-description">{slide?.details.slice(0, 40)}</p>
                                    <p className="text-sm ml-3">${slide?.salePrice}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <BsChevronRight className=" text-3xl slider-icon right" onClick={slideLeft} />
            </Link >
        </div>

    );
};

export default Advertise;