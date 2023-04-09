import React from 'react';

const JobCategory = ({job}) => {
    const {name , img , available_jobs} = job;
    return (
        <div className=' p-4 bg-sky-50 rounded-lg'>
            <img className='h-12 w-12 mb-5' src={img} alt="" />
            <h6 className='font-medium'>{name}</h6>
            <h6><small>{available_jobs}</small></h6>
        </div>
    );
};

export default JobCategory;