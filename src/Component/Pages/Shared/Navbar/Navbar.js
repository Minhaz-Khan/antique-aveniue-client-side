import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../../../Images/pngegg.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    // const [isDashBoard, setIsDashBoard] = useState(true)
    // console.log(isDashBoard);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Log Out!',
                    'Log Out SuccessFully!',
                    'success'
                )
            })
    }
    return (
        <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link to={'/'} className='flex items-center'>
                        <img className="w-auto md:h-10 mr-2 h-7" src={logo} alt="" />
                        <h4 className='text-2xl font-Caveat font-bold'>Antique Avenue</h4>
                    </Link>
                    <div className="flex md:hidden lg:hidden">

                        <label htmlFor="dashboard-drawer" className="text-gray-500 btn btn-ghost dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        </label>  <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {isOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>}
                        </button>

                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className={`${isOpen ? 'translate-x-0 opacity-95 ' : 'opacity-0 -translate-x-full '}absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                    <div className="flex flex-col md:flex-row justify-items-center md:mx-6">
                        <NavLink className={({ isActive }) => isActive ? 'text-maroon md:mx-4 md:my-0 my-2 text-lg font-medium' : "my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-maroon dark:hover:text-blue-400 md:mx-4 md:my-0"} to={'/'}>Home</NavLink>

                        {
                            user ?
                                <>
                                    <NavLink className={({ isActive }) => isActive ? 'text-maroon md:mx-4 md:my-0 my-2 text-lg font-medium' : "my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-maroon dark:hover:text-blue-400 md:mx-4 md:my-0"} to={'/dashboard'}>Dashboard</NavLink>
                                    <NavLink onClick={handleLogOut} className="my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-maroon dark:hover:text-blue-400 md:mx-4 md:my-0" >Log Out</NavLink></> :
                                <NavLink className={({ isActive }) => isActive ? 'text-maroon md:mx-4 md:my-0 my-2 text-lg font-medium' : "my-2 text-lg font-medium text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-maroon dark:hover:text-blue-400 md:mx-4 md:my-0"} to={'/login'}>Login</NavLink>
                        }
                    </div>

                    <div className="flex justify-center md:block">
                        {user && <Link className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                            <div className="relative">
                                {user.photoURL ? <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src={user.photoURL} alt="" /> :
                                    <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" />
                                }
                            </div>
                        </Link>}
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;