import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import ShowJobs from '../ShowJobs/ShowJobs';

const Home = () => {
    const [jobsCategory , setJobsCategory] = useState([]);
    useEffect( () => {
        fetch("/jobsCategory.json")
        .then(res => res.json())
        .then(data => setJobsCategory(data))
    } , [])

    const [showAll , setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true);
    }
    
    const jobs = useLoaderData();
    return (
        <div>
            <div>
                <Banner>
                    <div className='flex flex-col md:flex-row gap-5 pt-5 px-2 items-center lg:container mx-auto'>
                        <div className=' w-full'>
                            <h4 className='text-xl md:text-2xl lg:text-5xl font-bold'>Apply for Your Next Career Move <br /> <span className='text-sky-500'>Find Your Dream Job Today</span></h4>
                            <p className='my-5'>Looking for your dream job? Look no further than [insert website name]. Our platform connects job seekers with top employers and offers a streamlined job search experience. Apply with ease and take the next step in your career journey  today.</p>
                            <a className="btn btn-job-primary text-white font-semibold">Get Started</a>
                        </div>
                        <div>
                            <img  className=' w-full' src="https://i.ibb.co/481wqsN/hardy.png" alt="" />
                        </div>
                    </div>
                </Banner>
            </div>
            <div className='lg:container mx-auto'>
                <h3 className='text-3xl text-center mt-16 font-bold'>Job Category List</h3>
                <p className=' text-center my-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 md:grid-cols-4 p-2 gap-5 my-5'>
                    {
                        jobsCategory.map(job => <JobCategory
                        key={job.id}
                        job={job}
                        ></JobCategory>)
                    }
                </div>
                <div>
                    <h3 className='text-3xl text-center mt-28 font-bold'>Featured Jobs</h3>
                    <p className=' text-center my-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 my-10 gap-5 '>
                        {
                            jobs.slice(0 , showAll ? 6 : 4).map(job => <ShowJobs
                            key={job.id}
                            job={job}
                            ></ShowJobs>)
                        }
                    </div>
                    <div className='text-center my-5'>
                        { !showAll && (<button onClick={handleShowAll} className='btn-job-primary p-3 my-5 text-white rounded font-semibold'>
                                See More
                            </button>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;