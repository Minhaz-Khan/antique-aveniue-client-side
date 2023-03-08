import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>

        </div>
    );
};

export default MyOrders;