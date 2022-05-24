import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersCard = ({ singleOrder, ordersCollection, setOrdersCollection }) => {
    const { email, userName, address, phone, order, description, price, toolName, _id, paid } = singleOrder;



    const handleCancel = id => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json()).then(data => {
                console.log(data);
                const remaining = ordersCollection.filter(order => order._id !== id);
                setOrdersCollection(remaining);
            })
    }
    return (
        <div className="border rounded-lg p-4 text-justify text-sm font-semibold text-gray-600 container my-5 grid md:grid-cols-4 gap-4 justify-center items-center mr-10 ">
            <div className="col-span-2">
                <h1>Name: {toolName}</h1>
                <h1>Description: {description}</h1>
                <h1>Quantity: {order}</h1>
                <h1>Price: ${price}</h1>
            </div>
            <div>
                <h1>{email}</h1>
                <h1>{userName}</h1>
                <h1>{address}</h1>
                <h1>{phone}</h1>
            </div>
            {/* <!-- The button to open modal --> */}


            <div className="justify-items-center">
                {
                    !paid?
                    <Link to={`/dashboard/payment/${_id}`} href="#my-modal" className="btn my-2 inline-block px-6 py-3.5 bg-lime-600 text-white font-semibold text-sm leading-tight uppercase rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out border-0">Pay</Link>
                    :
                    <span className="text-success">PAID</span>
                }
                <br />
                {
                    paid?
                    <></>
                    :
                    <a href="#my-modal" className="btn inline-block px-6 py-3.5 bg-red-600 text-white font-semibold text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out border-0">Cancel</a>
                }
            </div>


            {/* <!-- modal-- > */}
            <div class="modal" id="my-modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are sure You want to cancel your order?</h3>
                    <p class="py-4">Once order is cancelled it can't be recovered.</p>
                    <div class="modal-action">
                        <a onClick={() => handleCancel(_id)} href="#f" class="btn">Cancel my order</a>
                        <a href="#f" class="btn">Don't cancel</a>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default MyOrdersCard;


