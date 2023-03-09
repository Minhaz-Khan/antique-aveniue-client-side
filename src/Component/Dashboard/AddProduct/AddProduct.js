import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowRight } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = (data) => {
        const imageHostKey = process.env.REACT_APP_imageKey;
        const postTime = new Date().toLocaleDateString();
        const status = 'avilable'
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const productName = data.ProductName;
        const condition = data.conditon;
        const categories = data.Categories;
        const oldPrice = data.oldPrice
        const salePrice = data.salePrice;
        const image = data.image[0];
        const details = data.details
        const newProduct = { postTime, status, sellerEmail, sellerName, productName, condition, categories, oldPrice, salePrice, image, details }
        console.log(newProduct);
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        // fetch(url, {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then(res => res.json())
        //     .then(data => {})
    }
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <h2 className="text-xl font-medium text-gray-800 dark:text-white ">Add A Product</h2>
            </div>
            <section className="bg-white dark:bg-gray-900 flex justify-center w-full">
                <div className="flex justify-center w-5/6 ">
                    <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80)' }}  >
                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your free account now.
                            </h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </p>



                            <form onSubmit={handleSubmit(handleAddProduct)} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Product Name</label>
                                    <input {...register('ProductName', { required: true })} type="text" placeholder="ProducName" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div >
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Condition</label>
                                    <select {...register('conditon', { required: true })} defaultValue={'Used'} className='w-full py-3 px-5   text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'>

                                        <option>Used</option>
                                        <option>Good</option>
                                        <option>Excellent</option>

                                    </select>
                                </div>

                                <div >
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Categories</label>
                                    <select {...register('Categories', { required: true })} defaultValue={'ANTIQUE JEWELLERY'} className='w-full py-3 px-5   text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'>

                                        <option>ANTIQUE JEWELLERY</option>
                                        <option>ANTIQUE BOOKS</option>
                                        <option>ANTIQUE PAINTING</option>

                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">location</label>
                                    <input {...register('location', { required: true })} type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">sellerName</label>
                                    <input value={user?.displayName} type="text" disabled className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-200 cursor-not-allowed border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">oldPrice</label>
                                    <input {...register('oldPrice', { required: true })} type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">salePrice</label>
                                    <input {...register('salePrice', { required: true })} type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Image</label>
                                    <input {...register('image', { required: true })} type="file" placeholder="" accept='image/*' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className='col-span-2'>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">details</label>


                                    <textarea {...register('details', { required: true })} id="message" rows="4" className=" block p-2.5 w-full text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write your thoughts here..."></textarea>

                                </div>

                                <button
                                    className="flex items-center  justify-between  px-6 py-3 text-base  tracking-wide text-white capitalize transition-colors duration-300 transform bg-maroon rounded-lg hover:bg-maroonLight focus:outline-none focus:ring focus:ring-maroonLight focus:ring-opacity-50">
                                    <span>Add Product</span>

                                    <BsArrowRight className='text-2xl hover:translate-x-2 duration-300'></BsArrowRight>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;