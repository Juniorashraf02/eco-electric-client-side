import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyOrdersCard from './MyOrdersCard';

const MyOrders = () => {
    const [ordersCollection, setOrdersCollection] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/orders?email=${email}`
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setOrdersCollection(data))
    }, [user])
    return (
        <div className="">
            <h1 className='text-2xl text-blue-700 mt-10 font-semibold'>My Orders: {ordersCollection.length}</h1>
            {
                ordersCollection.map(singleOrder => <MyOrdersCard
                    key={singleOrder._id} singleOrder={singleOrder} setOrdersCollection={setOrdersCollection} ordersCollection={ordersCollection}
                ></MyOrdersCard>)
            }


        </div>
    );
};

export default MyOrders;