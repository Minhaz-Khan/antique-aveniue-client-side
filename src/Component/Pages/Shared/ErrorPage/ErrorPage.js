import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError();
    const { logout } = useContext(AuthContext);
    return (
        <section className='w-full h-screen flex justify-center items-center'>
            <div className="page_404 w-full flex justify-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p className='text-maroonLight'>{error.statusText || error.message}</p>

                                    <button onClick={() => logout()} className="link_404">Sign Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;