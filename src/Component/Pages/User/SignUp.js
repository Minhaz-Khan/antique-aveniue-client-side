import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../Images/pngegg.png';
import loginimg from '../../../Images/bgandcategori/login image.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../useToken/useToken';
const SignUp = () => {
    const { createUser, updateUserProfile, emailVerification, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const imageHostKey = process.env.REACT_APP_imageKey;
    const [userEmail, setUserEmail] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const token = useToken(userEmail);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])
    const handleSignUp = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = data.image[0];
        const type = data.userType
        console.log(name, email, password, image, type);


        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const imageUrl = data.data.display_url;
                createUser(email, password)
                    .then(result => {
                        const user = result.user;
                        updateUserProfile(name, imageUrl)
                            .then(() => {
                                emailVerification()
                                    .then(() => {
                                        const userDetails = { name, email, password, image: imageUrl, userType: type }
                                        fetch(`http://localhost:5000/users`, {
                                            method: 'POST',
                                            headers: {
                                                'content-type': 'application/json'
                                            },
                                            body: JSON.stringify(userDetails)
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                console.log(data)
                                                setUserEmail(user.email);
                                                alert('your account sing up successfully')
                                                alert('check your email for verification')
                                            })



                                    })
                                    .catch(err => console.log(err))
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.error(err))

            })
            .catch(err => console.log(err))
    }

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const email = user.email;
                const name = user.displayName;
                const image = user.photoURL;
                const userType = 'buyer';
                const userDetails = { email, image, name, userType }
                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setUserEmail(email);
                        alert('your google sing up successfully')
                    })
            })
            .catch(e => console.log(e))
    }
    return (
        <div className='h-screen flex items-center bg-Beige'>
            <div className="flex w-full  max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2 " style={{ backgroundImage: `url('${loginimg}')` }} ></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-10" src={logo} alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>

                    <Link onClick={handleGoogleSignUp} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </Link>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <Link href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                            with email</Link>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Name</label>
                            <input {...register('name', { required: 'Name must be required' })} id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Email</label>
                            <input {...register('email', { required: 'Email must be required' })} id="loggingemail" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                            <input {...register('password', { required: 'Password required must', minLength: { value: 6, message: 'password must be 6 characters or longer' } })} id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Image</label>
                            <input {...register('image')} id="loggingImage" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="file" accept='image/*' />
                        </div>

                        <div className='mt-4'>
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">User Type</label>
                            <select {...register('userType')} defaultValue={'Buyer'} className='w-full py-2 px-4  text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'>

                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>


                        <div className="mt-6">
                            <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to={'/login'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"> or login</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;