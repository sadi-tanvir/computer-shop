import React from 'react';

const Error404 = () => {
    return (
        <>
            <div className="w-full mt-20">
                <h1 className="text-9xl font-bold text-center text-cyan-900">Error 404!</h1>
                <p className="text-3xl font-semibold text-slate-500 text-center mt-2">The page you requested does not exist or <br /> has moved.</p>
            </div>
        </>
    );
};

export default Error404;