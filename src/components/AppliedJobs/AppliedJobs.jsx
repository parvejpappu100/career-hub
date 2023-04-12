import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { getShoppingCart } from '../../utilities/fakeDb';

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const appliedJob = getShoppingCart();
    const savedJob = [];

    const [showJob , setShowJob] = useState(savedJob)
    // const [filteredJob  , setFilterJob] = useState([]);

    for (const id in appliedJob){
        const savedJobs = jobs.find( product => product.id === id);
        if (savedJobs){
            const quantity = appliedJob[id];
            savedJobs.quantity = quantity;
            savedJob.push(savedJobs)
        }
    }

    const handleFilterRemoteJob = () =>{
        const appliedJob = savedJob.filter(aJob => aJob.location == "Remote");
        setShowJob(appliedJob);
    }

    const handleFilterOnsideJob = () =>{
        const appliedJob = savedJob.filter(aJob => aJob.location == "Onside");
        setShowJob(appliedJob);
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
                            <li><button onClick={handleFilterRemoteJob}>Remote</button></li>
                            <li><button onClick={handleFilterOnsideJob}>Onside</button></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {
                        showJob.map(job => <ShowAppliedJobs
                        key={job.id}
                        job = {job}
                        ></ShowAppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;