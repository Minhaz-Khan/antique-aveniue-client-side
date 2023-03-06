import React from 'react';
import { Link } from 'react-router-dom';
import Categorie from '../Categorie/Categorie';
import categorieImg from '../../../Images/bgandcategori/pexels-rezoana-amin-rayna-5497303 (1).jpg'
import categorieImg2 from '../../../Images/bgandcategori/pexels-rodnae-productions-7979097.jpg'
import categorieImg3 from '../../../Images/bgandcategori/pexels-two-dreamers-2716895.jpg'
import './Home.css'

const Home = () => {
    const chategories = [
        { categorieName: 'antique jewellery', image: categorieImg, rating: 4, findName: 'jewelry' },
        { categorieName: 'antique books', image: categorieImg2, rating: 4.5, findName: 'Books' },
        { categorieName: 'antique painting', image: categorieImg3, rating: 4.2, findName: 'painting' }]
    return (
        <div>
            <div className="bg-white dark:bg-gray-900  bannerbg ">
                <div className="lg:flex container mx-auto">
                    <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Idea</span></h2>

                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <Link href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform  bg-maroon rounded-md hover:bg-maroonLight">Get Started</Link>
                                <Link href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:h-auto">
                        <div className='center-div md:w-full mx-3 h-[300px] lg:w-[700px] lg:h-[400px] mt-14'>
                            <div className='clip img1'></div>
                            <div className='clip img2'></div>
                            <div className='clip img3'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto my-10'>
                <h3 className='text-5xl font-semibold text-center text-maroon font-Caveat my-10'>Our Categories</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {chategories.map((item, i) => <Categorie key={i} item={item}></Categorie>)}
                </div>
            </div>
        </div>
    );
};

export default Home;