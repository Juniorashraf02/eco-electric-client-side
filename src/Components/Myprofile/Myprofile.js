import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";


const Myprofile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data);
      const url = `http://localhost:5000/profile?email=${user.email}`
      
        fetch(url, {
          method: "PUT",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(
          res => res.json()
        ).then(result => {
          console.log(result);
        });
  
        window.confirm('updated successfully ');
      
      
  
    };
    return (
        <div>
            <form className='md:w-4/5 container mx-auto mt-20 text-center' onSubmit={handleSubmit(onSubmit)}>
               
            
                   <div className='md:w-1/2 '>
                       <h1 className='text-2xl font-bold text-slate-500 my-5'>User Information</h1>

                       <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("email",)} placeholder="email" value={user?.email} />

                       <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("name",)} placeholder="username" value={user?.displayName} readOnly />
                 

                       <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("linkedin",)} placeholder="Linkedin profile link" />

                       <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("education",)} placeholder="education details"  required />
                       <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("phone",)} placeholder="phone no"  required />
                       <input className="border-2 border-solid mt-4 bg-gray-200 appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register("fb",)} placeholder="fb profile link"  required />

                

                       <button className="rounded-lg text-white bg-slate-500 mt-5 px-3 py-2.5 justify-center" type="submit">Submit</button>
                   </div>
           
           </form>
        </div>
    );
};

export default Myprofile;