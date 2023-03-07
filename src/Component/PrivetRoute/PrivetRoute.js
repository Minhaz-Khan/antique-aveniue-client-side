import React, { useContext } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <dir className='h-screen flex justify-center items-center'>
            <Triangle
                height="80"
                width="80"
                color="#820000"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </dir>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
};

export default PrivetRoute;