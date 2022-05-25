import React from 'react';
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/tools',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(results=>{
            console.log(results);
            alert('successfully added items');
        })
       

    };

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="input w-full max-w-xs input-bordered my-2" placeholder="image link of tools" {...register("img")} />
                        
                       
                        <input className="input w-full max-w-xs input-bordered" placeholder="description" {...register("description")} />

                        <input className="input w-full max-w-xs input-bordered" placeholder="Name of the tool" {...register("name")} />
                        <input className="input w-full max-w-xs input-bordered" placeholder="Minimum order " {...register("minimunOrder")} type="number"  />
                        <input className="input w-full max-w-xs input-bordered" placeholder="available quantity " {...register("availableQuantity")} type="number" />

                        <input className="input w-full max-w-xs input-bordered" placeholder="Price per unit" {...register("price")} type="number" />

                        <input className="btn btn-bg-slate-500  btn-wide my-3" type="submit" value='ADD' /> <br />
                    </form>
    );
};

export default AddProducts;