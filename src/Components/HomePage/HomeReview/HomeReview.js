import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeReviewCard from './HomeReviewCard';

const HomeReview = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    fetch('https://ancient-plateau-85212.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const limitedReviews = data.slice(0, 6);
            setReviews(limitedReviews);
        });

        const navigateToReview=e=> {
            navigate('/reviews')
        }
    return (
        <div >
            <h1 className="font-bold text-blue-400 my-20 text-2xl">Some reviews of our customers</h1>
            <div className="my-5">
                <div className="card grid md:grid-cols-3 gap-5 container mx-auto">
                    {
                        reviews.map(review => <HomeReviewCard
                        review={review} key={review._id}
                        ></HomeReviewCard>)
                    }
                </div>
            </div>
            <button onClick={navigateToReview} className="btn btn-info">See all reviews </button>
        </div>
    );
};

export default HomeReview;