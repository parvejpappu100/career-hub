import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { getShoppingCart } from '../../utilities/fakeDb';

const AppliedJobs = () => {
    const id = useParams();
    const jobs = useLoaderData();
    
    
    const appliedJob = jobs.filter(job => job.id == id.id);

    
    return (
        <div>
            <div>
                <Banner>
                    <h4 className='text-center py-32 text-3xl font-bold'>Applied Jobs</h4>
                </Banner>
            </div>
            <div className='lg:container mx-auto my-10'>
                {
                    appliedJob.map(job => <ShowAppliedJobs
                    key={job.id}
                    job = {job}
                    ></ShowAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;