import React from 'react';
import { useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    fetch('http://localhost:5000/orders')
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        setOrders(data);
    })
    return (
        <div>
            <h1>{orders.length}</h1>
        </div>
    );
};

export default ManageOrders;