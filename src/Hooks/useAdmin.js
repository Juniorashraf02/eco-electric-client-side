import { useState } from 'react';
import { useEffect } from 'react';
const useAdmin =user=> {
    const [admin, setAdmin]=useState(false);
    useEffect(()=>{
        const email = user?.email;
        fetch(`https://ancient-plateau-85212.herokuapp.com/admin/${email}`,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => res.json())
        .then(data=>{
setAdmin(data.admin)        })
    },[user]);
    return [admin];
}

export default useAdmin;