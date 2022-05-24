import React, { useState } from 'react';

const AddAReview = () => {
    const [reviews, setReviews] = useState([]);
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data=>{
setReviews(data)
    })
    return (
        <div>
            <h1>Total Reviews: {reviews.length}</h1>
        </div>
    );
};

export default AddAReview;