import React from 'react';

const QuestionAns = ({question,answer}) => {
    return (
        <>
         <div className="shadow-lg p-5 mt-8">
            <h1 className="text-3xl font-semibold">{question}</h1>
            <p className="mt-5">{answer}</p>
          </div>   
        </>
    );
};

export default QuestionAns;