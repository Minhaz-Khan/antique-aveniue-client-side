import React from 'react';
import { AiOutlineUser } from "react-icons/ai";

const CategorieItem = ({ categorieItem, setModalItem }) => {
    const { _id, productName, condition, status, categories, sellerName, location, oldPrice, salePrice, postTime, image, details } = categorieItem;
    return (
        <div className="w-full max-w-sm  bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className='overflow-hidden'>
                <img className="object-cover object-center w-full h-56 hover:scale-150 hover:rotate-12 duration-500" src={image} alt="avatar" />

            </div>
            <div className="flex items-center px-6 py-3 bg-Beige justify-between ">
                <h1 className=" text-lg font-semibold text-gray-800">${salePrice}</h1>
                <h1 className=" text-base font-semibold uppercase text-gray-800">{status}</h1>

            </div>

            <div className="px-6 mt-2 min-h-[250px] relative ">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-white"> {productName}</h1>

                <p className="py-2 text-gray-400 text-sm dark:text-gray-400 ">{details.slice(0, 100)}<span className='text-maroon font-bold cursor-pointer'>...See more</span></p>

                <div className='flex'>
                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <AiOutlineUser className='w-6 h-6'></AiOutlineUser>

                        <h1 className="px-2 text-sm">{sellerName}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <svg aria-label="location pin icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                        </svg>

                        <h1 className="px-2 text-sm">{location}</h1>
                    </div>
                </div>

                <div className="flex items-center mt-4  text-gray-700 dark:text-gray-200">
                    <h1 className="text-sm"><span className='font-medium'>Old Price:</span> ${condition}</h1>
                    <h1 className="px-2 text-sm"><span className='font-medium'>Post Time:</span> {postTime}</h1>

                </div>
                <div className='flex justify-center  left-0 space-x-4 bottom-[-20px] absolute items-center w-full'>
                    <label onClick={() => setModalItem(categorieItem)} htmlFor="antique-modal" className=" font-medium py-2 px-3 rounded-lg uppercase hover:bg-maroonLight text-white  bg-maroon duration-100">Book Now</label>
                    <label className="px-3 py-2 btn-ghost bg-gray-100 rounded-lg uppercase font-medium">WishList</label>
                </div>
            </div>
        </div >
    );
};

export default CategorieItem;