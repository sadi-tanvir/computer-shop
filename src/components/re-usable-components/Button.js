import React from 'react';

const Button = ({children,className,onClick}) => {
    return (
        <>
            <button onClick={onClick}  className={`bg-orange-300 px-3 py-1 rounded mt-3 text-white ${className}`}>
                {children}
            </button>
        </>
    );
};

export default Button;