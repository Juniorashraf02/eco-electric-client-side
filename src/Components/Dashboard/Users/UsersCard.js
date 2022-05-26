import React from 'react';

const UsersCard = ({ user }) => {
    const {email,role} = user;
    const makeAdmin=e=>{
        fetch(`https://ancient-plateau-85212.herokuapp.com/users/admin/${email}`,{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=> res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div className="border rounded-lg p-4 text-justify text-sm font-semibold text-gray-600 container my-5 grid md:grid-cols-4 gap-4 justify-center items-center mr-10 ">

            <div className="col-span-2">
                <h1>{user.email}</h1>
            </div>
            <div className="justify-self-end flex gap-2">
                {role!=='admin' && <button onClick={makeAdmin} className="btn btn-success">Make Admin</button>}
                <button className="btn btn-success ">Remove User</button>
            </div>
        </div>
    );
};

export default UsersCard;