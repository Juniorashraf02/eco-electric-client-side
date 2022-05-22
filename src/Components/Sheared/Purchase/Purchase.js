import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState([]);
    const [newQuantity, setNewQuantity] = useState([]);
    const url = `http://localhost:5000/tools/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            })
    }, [id]);

    const { img, name, description, price, availableQuantity, minimunOrder, _id } = tool;

    const handleSubmit = e => {
        e.preventDefault();
        const inputNumber = parseInt(e.target.inputText.value);
        if( inputNumber < 0){
            alert('Input must be a positive  number');
        }else if( inputNumber>availableQuantity){
            alert('your order quantity is more than available quantity');
        }else if( inputNumber<minimunOrder){
            alert(`minimum order quantity is ${minimunOrder}`);
        }else{
            const previousQuantity = parseInt(availableQuantity);
            const modifiedQuantity = previousQuantity-inputNumber;
            setTool({...tool, availableQuantity:modifiedQuantity});
            fetch(url,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({modifiedQuantity})
            }).then(res => res.json()).then(data=>{
                console.log(data);
            }) 
        }
        e.target.reset();

    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-10 mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>Available Quantity: {availableQuantity}</p>
                    <p>Minimum Order: {minimunOrder}</p>
                    <form onSubmit={handleSubmit} className="flex gap-1 justify-center items-center">
                        <p> Order:</p>
                        <input type="number" name="inputText" id="input" className="border rounded-lg w-1/2 text-center py-2 pr-5" /> <br />
                        <button type="submit" className="btn btn-info text-white">Order Now</button>
                    </form>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;