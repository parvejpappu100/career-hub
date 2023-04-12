import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import {  CurrencyDollarIcon , CalendarIcon , MapPinIcon, PhoneIcon , EnvelopeIcon} from '@heroicons/react/24/solid'
import './JobDetails.css'
import { addToDb, getShoppingCart } from '../../utilities/fakeDb';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

const JobDetails = () => {
    const id = useParams();
    const jobs = useLoaderData();
    const details = jobs.find(detail => detail.id == id.id );

    const [job , setJob] = useState([]);


    useEffect( () => {
        const storedJob = getShoppingCart();
        const savedJob = [];
        for (const id in storedJob){
            const appliedJob = jobs.find(job => job.id == id);
            if(appliedJob){
                const quantity = storedJob[id];
                appliedJob.quantity = quantity;
                savedJob.push(appliedJob)

            }
        }
        setJob(savedJob);
    } , [jobs])

    const hanldeStoredJob = (details) =>{
        const newJob = [...job , details];
        setJob(newJob);
        addToDb(details.id)
    }


    const {job_description , job_res , educational_req , experience ,salary , post , address , phone , email } = details;
    return (
        <div>
            <div>
                <Banner>
                    <h4 className='text-center py-32 text-3xl font-bold'>Job Details</h4>
                </Banner>
            </div>
            <div className='lg:container mx-auto flex flex-col md:flex-row gap-5 my-10 p-2'>
                <div className='w-full'>
                    <h6><strong>Job Description</strong> : {job_description}</h6>
                    <h6 className='my-5'><strong>Job Responsibility</strong> : {job_res}</h6>
                    <h6><strong>Educational Requirements:</strong> {educational_req}</h6>
                    <h6 className='mt-5'> <strong>Experience :</strong> {experience}</h6>
                </div>
                <div className='w-full md:w-3/5 '>
                    <div className='job-detail  p-5 rounded'>
                        <h4 className='font-bold'>Job Details</h4>
                        <hr className='w-1/2 my-4' />
                        <div className='flex items-center gap-3'>
                            <CurrencyDollarIcon className="text-blue-300 h-6 w-6 " />
                            <strong>Salary :</strong> {salary}
                        </div>
                        <div className='flex items-center gap-3'>
                            <CalendarIcon className="text-blue-300 h-6 w-6 " />
                            <strong>Job Title :</strong>  {post}
                        </div>
                        <h4 className='my-4 font-bold'>Contact Information</h4>
                        <hr className='w-1/2 mb-4' />
                        <div className='flex items-center gap-3'>
                            <PhoneIcon className="text-blue-300 h-4 w-6 " />
                            <strong>Phone :</strong><small>{phone}</small>
                        </div>
                        <div className='flex items-center gap-3'>
                            <EnvelopeIcon className="text-blue-300 h-4 w-6 " />
                            <strong>Email :</strong><small>{email}</small>
                        </div>
                        <div className='flex items-center gap-3'>
                            <MapPinIcon className="text-blue-300 h-4 w-6 " />
                            <strong>Address:</strong><small>{address}</small>
                        </div>
                    </div>
                    <div>
                        <Link to= "/jobs">
                            <button onClick={() => hanldeStoredJob(details)} className="btn btn-job-primary text-white font-semibold w-full mt-4">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;