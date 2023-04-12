import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { getShoppingCart } from '../../utilities/fakeDb';

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const appliedJob = getShoppingCart();
    let savedJob = [];
    
    for (const id in appliedJob){
        const savedJobs = jobs.find( product => product.id === id);
        if (savedJobs){
            const quantity = appliedJob[id];
            savedJobs.quantity = quantity;
            savedJob.push(savedJobs)
        }
    }

   
    return (
        <div>
            <div>
                <Banner>
                    <h4 className='text-center py-32 text-3xl font-bold'>Applied Jobs</h4>
                </Banner>
            </div>
            <div className='lg:container mx-auto my-10'>
                <div>
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button>Remote</button></li>
                            <li><button>Onside</button></li>
                        </ul>
                    </div>
                </div>
                {
                    savedJob.map(job => <ShowAppliedJobs
                    key={job.id}
                    job = {job}
                    ></ShowAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;