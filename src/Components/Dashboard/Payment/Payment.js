import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const [orders, setOrders] = useState([]);
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            console.log(data);
        });
    return (
        <div className="mt-10">

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={orders.ProductImg} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <h1>Product name: {orders.toolName}</h1>
        </div>
    );
};

export default Payment;