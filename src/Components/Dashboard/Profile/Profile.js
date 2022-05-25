import React, { useState } from 'react';

const Profile = () => {
    const [info, setInfo] = useState([]);
    fetch('http://localhost:5000/profile')
        .then(res => res.json())
        .then(data => {
            setInfo(data);
            console.log(data);
        })
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mt-24">
            {
                info.map(p => <div class="card-body" p={p} key={p._id}>
                    <h2 class="card-title">{p.name}</h2>
                    <p>{p?.educaiton}</p>
                    
                </div>)
            }
        </div>
    );
};

export default Profile;