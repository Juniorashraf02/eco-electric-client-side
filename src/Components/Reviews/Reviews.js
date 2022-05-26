import React, { useState } from 'react';
import HomeReviewCard from '../HomePage/HomeReview/HomeReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    fetch('https://ancient-plateau-85212.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setReviews(data);
        });
    return (
        <div className="my-5">
                <div className="card grid md:grid-cols-3 gap-5 container mx-auto">
                    {
                        reviews.map(review => <HomeReviewCard
                        review={review} key={review._id}
                        ></HomeReviewCard>)
                    }
                </div>
            </div>
    );
};

export default Reviews;