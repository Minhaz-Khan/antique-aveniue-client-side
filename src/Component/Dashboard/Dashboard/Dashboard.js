import React, { useContext } from 'react';
import { Triangle } from 'react-loader-spinner';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useUserType from '../../useUserType/useUserType';


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { userType, isLoading } = useUserType(user?.email)

    if (isLoading) {
        <dir className='h-screen flex justify-center items-center'>
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
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h1 className='text-center text-7xl font-poppins'>Welcome to </h1>

                <p className='text-center mt-3 text-xl text-gray-500'>{userType} Dashboard</p>
            </div>
        </div>
    );
};

export default Dashboard;