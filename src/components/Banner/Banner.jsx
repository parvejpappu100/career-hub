import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 pt-5 px-2 items-center'>
            <div className=' w-full'>
                <h4 className='text-xl md:text-2xl lg:text-5xl font-bold'>Apply for Your Next Career Move <br /> <span className='text-sky-500'>Find Your Dream Job Today</span></h4>
                <p className='my-5'>Looking for your dream job? Look no further than [insert website name]. Our platform connects job seekers with top employers and offers a streamlined job search experience. Apply with ease and take the next step in your career journey today.</p>
                <a className="btn btn-job-primary text-white font-semibold">Star Applying</a>
            </div>
            <div>
                <img  className=' w-full' src="https://i.ibb.co/481wqsN/hardy.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;