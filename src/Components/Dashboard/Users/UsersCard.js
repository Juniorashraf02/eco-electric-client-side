import React from 'react';

const UsersCard = ({ user, users, setUsers }) => {
    const { email, role } = user;
    const makeAdmin = e => {
        fetch(`https://ancient-plateau-85212.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    const removeUser = id => {
        const proceed = window.confirm('Deleted items can not be recoverd. Do you want to proceed?');
        if(proceed){

            fetch(`https://ancient-plateau-85212.herokuapp.com/users/${id}`, {
                method: 'DELETE',
            }).then(res => res.json()).then(data => {
                const remaining = users.filter(p => p._id !== id);
                setUsers(remaining);
            })
        }
    }
    return (
        <div className="border rounded-lg p-4 text-justify text-sm font-semibold text-gray-600 container my-5 grid md:grid-cols-4 gap-4 justify-center items-center mr-10 ">

            <div className="col-span-2">
                <h1>{user.email}</h1>
            </div>
            <div className="justify-self-end flex gap-2">
                {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-success">Make Admin</button>}
                <button onClick={() => removeUser(user._id)} className="btn btn-success ">Remove User</button>
            </div>
        </div>
    );
};

export default UsersCard;