import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Profile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [info, setInfo] = useState([]);
    fetch(`https://ancient-plateau-85212.herokuapp.com/profile?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setInfo(data);
            console.log(data);
        });
        const navigateTo =e=>{
            navigate('/myprofile')
        }
    return (
       <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl mt-24">
                {info.length}
            {
                info.map(p => <div p={p} key={p._id}
                
                >
                    <h2 class="card-title">email: {p.email}</h2>
                    <p>educaiton: {p?.educaiton}</p>
                    
                </div>)
            }
        </div>
        <button onClick={navigateTo} className="btn btn-info">Update Profile</button>
       </div>
    );
};

export default Profile;