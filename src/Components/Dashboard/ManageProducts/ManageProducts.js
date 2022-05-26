import React, { useState } from 'react';
import ManageSIngleProduct from './ManageSIngleProduct';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);

    fetch('https://ancient-plateau-85212.herokuapp.com/tools',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res=> res.json())
    .then(results=>{
        setTools(results);
    })
    return (
        <div className="container mx-auto">
        <h1 className="text-semibold text-blue-400 my-20 text-2xl">Manage Tools</h1>
        <div className="card w-full gap-5 mt-5 grid md:grid-cols-3">
            {
                tools.map(tool =><ManageSIngleProduct
                tool={tool} key={tool._id} setTools={setTools} tools={tools}
                ></ManageSIngleProduct>)
            }
        </div>
    </div>
    );
};

export default ManageProducts;