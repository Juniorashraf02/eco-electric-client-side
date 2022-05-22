import React, { useState } from 'react';
import HomeReviewCard from './HomeReviewCard';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);
    fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const limitedReviews = data.slice(0, 6);
            setReviews(limitedReviews);
        });
    return (
        <div >
            <h1 className="text-semibold text-blue-400 my-20 text-2xl">Some reviews of our customers</h1>
            <div className="my-5">
                <div className="card grid md:grid-cols-3 gap-5 container mx-auto">
                    {
                        reviews.map(review => <HomeReviewCard
                        review={review} key={review._id}
                        ></HomeReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeReview;