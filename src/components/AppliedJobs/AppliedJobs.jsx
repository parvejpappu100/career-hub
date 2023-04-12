import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { getShoppingCart } from '../../utilities/fakeDb';

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const storedCart = getShoppingCart();
    const savedCart = [];
    
    for (const id in storedCart){
        const addedProducts = jobs.find( product => product.id === id);
        if (addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts)
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
                {
                    savedCart.map(job => <ShowAppliedJobs
                    key={job.id}
                    job = {job}
                    ></ShowAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;