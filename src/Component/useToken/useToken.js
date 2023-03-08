import React, { useEffect, useState } from 'react';

const useToken = email => {
    // console.log(params);
    const [token, setToken] = useState('');
    useEffect(() => {
        email && fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    console.log(data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email])

    return token;
};

export default useToken;