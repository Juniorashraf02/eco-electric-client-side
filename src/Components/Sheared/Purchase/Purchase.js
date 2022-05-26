import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from './../../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [tool, setTool] = useState([]);
    const url = `https://ancient-plateau-85212.herokuapp.com/tools/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            })
    }, [url]);

    const { img, toolName, description, price, availableQuantity, minimunOrder, } = tool;

    const handleSubmit = e => {
        e.preventDefault();
        const inputNumber = e.target.inputText.value;
        if (inputNumber < 0) {
            alert('Input must be a positive  number');
        } else if (inputNumber > availableQuantity) {
            alert('your order quantity is more than available quantity');
        } else if (inputNumber < minimunOrder) {
            alert(`minimum order quantity is ${minimunOrder}`);
        } else {
            const previousQuantity = parseInt(availableQuantity);
            const modifiedQuantity = previousQuantity - parseInt(inputNumber);
            setTool({ ...tool, availableQuantity: modifiedQuantity });
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ modifiedQuantity })
            }).then(res => res.json()).then(data => {
                console.log(data);
            })



            const data = {
                email: e.target.email.value,
                userName: e.target.name.value,
                address: e.target.address.value,
                phone: e.target.mobile.value,
                order: e.target.inputText.value,
                productImg: img,
                price: price,
                description: description,
                toolName: toolName,
            }

            console.log(data);

            const url2 = `https://ancient-plateau-85212.herokuapp.com/orders`
            fetch(url2, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(result => {
                console.log(result);
                alert('order added to the cart')
            })
        }
        e.target.reset();





    }

    return (
        <form onSubmit={handleSubmit} className="md:flex items-center justify-center container mx-auto gap-10">
            <div className="">
                <div className="card w-96 shadow-lg border mx-auto">
                    <h1 className="text-semibold text-blue-400 my-5 text-2xl">User Information</h1>
                    <div className="card-body text-left">
                        <div className=" justify-center items-center">
                            <input className="input w-full max-w-xs " type="text" name="email" id="" value={user?.email} disabled /> <br />
                            <input className="input w-full max-w-xs my-2" type="text" name="name" id="" value={user?.displayName} disabled /> <br />
                            <input className="input w-full max-w-xs my-2" type="text" name="address" id="" placeholder="Enter your address" />
                            <input className="input w-full max-w-xs my-2" type="text" name="mobile" id="" placeholder="Enter your mobile no" />
                        </div>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl my-10 border mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{toolName}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>Available Quantity: {availableQuantity}</p>
                    <p>Minimum Order: {minimunOrder}</p>
                    <div className="flex gap-1 justify-center items-center">
                        <p> Order:</p>
                        <input type="number" name="inputText" id="input" className="border rounded-lg w-1/2 text-center py-2 pr-5" /> <br />

                        <button type="submit" className="btn btn-info text-white">Order Now</button>


                    </div>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Purchase;