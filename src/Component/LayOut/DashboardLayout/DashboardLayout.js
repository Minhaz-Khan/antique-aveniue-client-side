import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import logo from '../../../Images/pngegg.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useUserType from '../../useUserType/useUserType'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { userType, isLoading } = useUserType(user?.email)
    console.log(userType);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile container mx-auto  ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white md:bg-Beige border-x-2 rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


                        <div className="flex flex-col justify-between flex-1 mt-6">
                            <nav className="-mx-3 space-y-6 ">
                                <div className="space-y-3 ">
                                    <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">analytics</label>

                                    <Link to={'/'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                        <span className="mx-2 text-sm font-medium">Home</span>
                                    </Link>
                                    {userType === 'Buyer' && <>
                                        <Link to={'/dashboard/myorders'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">My Orders</span>
                                        </Link>
                                        <Link to={'/dashboard/wishlist'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">WishList</span>
                                        </Link></>}


                                    {userType === 'Seller' && <>
                                        <Link to={'/dashboard/addproduct'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">Add A Product</span>
                                        </Link>
                                        <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">My Products</span>
                                        </Link>
                                        <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <span className="mx-2 text-sm font-medium">My Buyers</span>
                                        </Link></>}
                                    {
                                        userType === 'Admin' && <>
                                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                                <span className="mx-2 text-sm font-medium">All Sellers</span>
                                            </Link>
                                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                                <span className="mx-2 text-sm font-medium">
                                                    All Buyers
                                                </span>
                                            </Link></>
                                    }

                                </div>
                                <div className="flex flex-col items-center mt-20 -mx-2">
                                    <img className="object-cover w-16 h-16 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</h4>
                                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
                                </div>

                                <Link className='flex space-x-2 justify-center'>
                                    <img className="w-auto md:h-10 h-7" src={logo} alt="" />
                                    <h4 className='text-2xl font-Caveat font-bold'>Antique Avenue</h4>
                                </Link>



                            </nav>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;