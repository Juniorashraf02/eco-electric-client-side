import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ tool }) => {
    const { img, toolName, description, price, availableQuantity, minimunOrder, _id } = tool;
    const navigate = useNavigate();
    const navigateToPurchase = id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="text-left bg-blue-100 hover:bg-blue-200 hover:scale-75 duration-700  border-1 rounded-lg shadow-xl w-full">
            <figure>
                <img className="rounded-lg" src={img} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{toolName}</h2>
                <p className="text-gray-500">Description: {description}</p>
                <p className="font-bold">Price: ${price}</p>
                <p className="font-bold">Available Quantity: {availableQuantity}</p>
                <p className="font-bold">Minimum Order: {minimunOrder}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>navigateToPurchase(_id)} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;