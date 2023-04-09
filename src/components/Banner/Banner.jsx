import React from 'react';

const Banner = ({children}) => {
    return (
        <div className='bg-sky-50'>
           {children}
        </div>
    );
};

export default Banner;