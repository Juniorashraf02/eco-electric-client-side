import React,{useState} from 'react';
import UsersCard from './UsersCard';

const Users = () => {
    const [users, setUsers] = useState([]);
    fetch('https://ancient-plateau-85212.herokuapp.com/users')
    .then(res => res.json())
    .then(data=>{
        setUsers(data);
    })
    if(users.length===0){
        return <p>Loading</p>
    }
    return (
        <div>
            <h1 className="text-2xl text-semibold text-sky-500">All Users: {users.length} </h1>
            {
                users.map(user=><UsersCard
                key={user._id} user={user} setUsers={setUsers}
                ></UsersCard>)
            }
        </div>
    );
};

export default Users;