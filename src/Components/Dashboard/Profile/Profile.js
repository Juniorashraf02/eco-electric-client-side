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
        });
    const navigateTo = e => {
        navigate('/myprofile')
    }
    console.log(info)
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 p-5 my-10 shadow-xl mt-24 text-justify mx-auto">
                {info.length}
               <p>email:  {user?.email}</p>
               <p>name:  {info?.data?.name}</p>
               <p>Facebook:  {info?.data?.fb}</p>
               <p>LinkedIn:  {info?.data?.linkedin}</p>
               <p>Phone No:  {info?.data?.phone}</p>
            </div>
            <button onClick={navigateTo} className="btn btn-info">Update Profile</button>
        </div>
    );
};

export default Profile;