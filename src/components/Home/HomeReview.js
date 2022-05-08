import React from "react";
import { Link } from "react-router-dom";
import { useReviews } from "../../hooks/useReviews";

import ReviewCard from "../Review/ReviewCard";

const HomeReview = () => {
  const [reviews, setReviews] = useReviews();
  reviews.splice(3);
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center my-14">
        <h3 className="text-3xl font-semibold text-center">
          Customer Reviews (6)
        </h3>

        <div className="w-8/12 grid grid-cols-3 gap-x-4 my-5 mb-14">
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

        <Link
          to="/reviews"
          className="px-10 bg-red-800 text-white py-1 rounded"
        >
          See All Reviews
        </Link>
      </section>
    </>
  );
};

export default HomeReview;
