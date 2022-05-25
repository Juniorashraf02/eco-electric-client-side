import React from 'react';

const ManageSIngleProduct = ({tool,setTools,tools}) => {
    const { img, toolName, description, price, availableQuantity, minimunOrder, _id } = tool;
    const handleDelete = id =>{
       fetch(`http://localhost:5000/tools/${id}`,{
           method: 'DELETE'
       })
       .then(res=> res.json())
       .then(data=>{
           console.log(data);
           const remainig = tools.filter(p=>p._id !== id);
           setTools(remainig)
       })
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
                    <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageSIngleProduct;