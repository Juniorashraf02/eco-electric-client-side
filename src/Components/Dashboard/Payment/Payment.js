import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe('pk_test_51L1dg0B5WMGrt28lrlvH9mAZ9Wg6rgSUqLsXpK5DhlJv7SafWEaXSwsOCZ5U4V0voRW4UE3yn9BJaUsF2c8byhjs00Qflj7Vdp');


const Payment = () => {
    const [orders, setOrders] = useState([]);
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            // console.log(data);
        });
    return (
        <div className="mt-10 mx-auto gap-10 justify-center items-center">

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={orders.productImg} alt="Shoes" />
                </figure>
                <div class="card-body text-left">
                    <h2 class="card-title">{orders.toolName}</h2>
                    <p>Quantity: {orders.order}</p>
                    <p>Price: ${orders.price}</p>
                </div>
                
            </div>
            <div className="mt-10  w-80">
            <Elements  stripe={stripePromise}>
                              <PaymentForm orders={orders}></PaymentForm>
                        </Elements>
            </div>
           
        </div>
    );
};

export default Payment;