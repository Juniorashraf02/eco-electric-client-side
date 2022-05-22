import React from 'react';

const ToolsCard = ({ tool }) => {
    const { img, name, description, price, availableQuantity, minimunOrder } = tool;
    return (
        <div className="text-left bg-slate-200 border-1 rounded-lg shadow-lg">
            <figure>
                <img className="rounded-lg" src={img} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order: {minimunOrder}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;