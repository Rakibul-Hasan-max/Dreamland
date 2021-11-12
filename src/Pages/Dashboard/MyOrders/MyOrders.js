import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const MyOrders = () => {

    const {user} = useAuth();
    const {order, setOrder} = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/purchase?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

    return (
        <div>
            <Dashboard></Dashboard>
            <h2>order: {order.length}</h2>
        </div>
    );
};

export default MyOrders;