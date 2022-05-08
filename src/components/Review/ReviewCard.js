import React from "react";
import Star from "../re-usable-components/Star";

const ReviewCard = ({name,img,comment,rating_1,rating_2,rating_3,rating_4,rating_5}) => {
  return (
    <>
      <div className="shadow-lg hover:shadow-2xl px-3 py-5">
        <div className="w-full">
          <div className="flex justify-start items-center">
            <img
              className="w-10 h-10 rounded-xl"
              src={img}
              alt="user pic"
            />
            <div className=" ml-2">
              <h4 className="text-lg font-bold">{name}</h4>
              <div className="flex justify-start items-center">
                <Star className={rating_1} />
                <Star className={rating_2} />
                <Star className={rating_3} />
                <Star className={rating_4} />
                <Star className={rating_5} />
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-700 mt-2">
            {comment}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
