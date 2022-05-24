import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ tool }) => {
    const { img, toolName, description, price, availableQuantity, minimunOrder, _id } = tool;
    const navigate = useNavigate();
    const navigateToPurchase = id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="text-left bg-slate-200 border-1 rounded-lg shadow-lg">
            <figure>
                <img className="rounded-lg" src={img} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{toolName}</h2>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order: {minimunOrder}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>navigateToPurchase(_id)} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;