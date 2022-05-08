import React from 'react';
import {useReviews} from "../../hooks/useReviews"
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    
    return (
        <>
            <div className="w-full flex justify-center items-center">
            <div className="w-11/12 md:w-8/12 grid grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              img={review.img}
              comment={review.comment}
              rating_1={review.rating_1}
              rating_2={review.rating_2}
              rating_3={review.rating_3}
              rating_4={review.rating_4}
              rating_5={review.rating_5}
            />
          ))}
        </div>
            </div>   
        </>
    );
};

export default Reviews;