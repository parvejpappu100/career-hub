import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className='lg:container mx-auto my-10 text-center'>
            <h1 className='text-3xl lg:text-5xl my-5 font-bold text-zinc-600'>Oops!</h1>
            <p className='text-xl font-bold'>404 - PAGE NOT FOUND</p>
            <p className='my-3'>The page you are looking for might have been removed had its named changed or it is temporary unavailable</p>
            <button onClick={handleGoBack} className='btn btn-ghost my-5'>Go Back</button>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
  );
};

export default ErrorPage;