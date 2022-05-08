import React from "react";
import QuestionAns from "./QuestionAns";
import { QnaDetails } from "./QnADetails";

const Blog = () => {
  return (
    <>
      <div className="w-full flex flex justify-center items-center">
        <div className="w-11/12 md:w-8/12">
          {QnaDetails.map((QnA) => (
            <QuestionAns key={QnA.id} question={QnA.question} answer={QnA.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
