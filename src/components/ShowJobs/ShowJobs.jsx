import React from 'react';
import './ShowJobs.css'
import {  MapPinIcon , CurrencyDollarIcon} from '@heroicons/react/24/solid'

const ShowJobs = ({job}) => {
    const {img , post , company , job_type , location , office_add , salary} = job;
    return (
        <div className='border border-gray-100 rounded-xl shadow bg-sky-50 p-3 flex flex-col lg:flex-row items-center gap-5'>
            <img className='w-96' src={img} alt="" />
            <div>
            <h6 className='text-2xl font-medium my-2'>{post}</h6>
            <h6 className='text-xl my-2'>{company}</h6>
            <div className='flex items-center gap-5 my-3'>
                <h6 className='job-btn'>{location}</h6>
                <h6 className='job-btn'>{job_type}</h6>
            </div>
            <div className='flex gap-4 items-center my-3'>
                <div className='flex gap-1 items-center'>
                    <MapPinIcon className="h-6 w-6 " /> 
                    <h6>{office_add}</h6>
                </div>
                <div className='flex items-center gap-1'>
                    <CurrencyDollarIcon className="h-6 w-6 " />
                    <h6>Salary : {salary}</h6>
                </div>
            </div>
            <button className='btn-job-primary p-3 my-5 text-white rounded font-semibold'>View Details</button>
            </div>
        </div>
    );
};

export default ShowJobs;