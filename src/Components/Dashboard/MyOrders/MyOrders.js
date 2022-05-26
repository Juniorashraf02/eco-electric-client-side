// import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyOrdersCard from './MyOrdersCard';

const MyOrders = () => {
    const [ordersCollection, setOrdersCollection] = useState([])
    const [user] = useAuthState(auth);
    const navigate= useNavigate();
    useEffect(() => {
        const email = user.email;
        const url = `https://ancient-plateau-85212.herokuapp.com/orders?email=${email}`
        console.log(url);

        fetch(url,{
            method:'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    // signOut(auth);
                    // localStorage.removeItem('accessToken');
                    // navigate('/home');
                    return res.json();

                }else{
                    return res.json();
                }
            })
            .then(data => setOrdersCollection(data))
    }, [user, navigate])
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