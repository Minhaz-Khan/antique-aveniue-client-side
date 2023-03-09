import React, { useContext } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useUserType from '../useUserType/useUserType';

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    const { userType, isLoading } = useUserType(user?.email)
    if (loading && isLoading) {
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

    if (user && userType) {
        return children;
    }
    else {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

};

export default AdminRoute;