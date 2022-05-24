import React from 'react';

const HomeReviewCard = ({ review }) => {
    const { name, description, img, ratings } = review;
    return (
        <div className="flex drop-shadow-lg bg-gray-100 rounded border p-0">
            <div className="avatar pl-5 items-center ">
                <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="card-body text-left py-1">
                <h2 className="card-title">{name}</h2>
                <p className="text-gray-400">{description}</p>
                <span className="text-yellow-600">ratings: {ratings}/5</span>
            </div>
        </div>
    );
};

export default HomeReviewCard;