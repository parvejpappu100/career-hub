import React from 'react';
import Banner from '../Banner/Banner';

const Blog = () => {
    return (
        <div >
            <div>
                <Banner>
                    <h6 className='text-center py-32 text-3xl font-bold'>Blog</h6>
                </Banner>
            </div>
            <section className='max-w-3xl mx-auto my-5 p-2'>
                {/* First Question */}
                <article>
                    <h4 className='text-3xl font-semibold'>When is the Context Api used?</h4>
                    <h6 className='my-4 text-xl font-medium'>The Context API in React is used for sharing data between components that are not directly connected by the component tree hierarchy. It provides a way to pass data through the component tree without having to manually pass props down through every level of the tree.</h6>
                </article>
                {/* Second Question  */}
                <article>
                    <h4 className='text-3xl font-semibold mt-5'>What is custom hook in react?</h4>
                    <h6 className='my-4 text-xl font-medium'>In React, a custom hook is a JavaScript function that allows you to reuse stateful logic between components. Custom hooks are a way to abstract away complex logic into reusable, modular functions, and they can be shared across multiple components.</h6>
                </article>
                {/* Third Question  */}
                <article>
                    <h4 className='text-3xl font-semibold mt-5'>What is useRef? What is the purpose of useRef ?</h4>
                    <h6 className='my-4 text-xl font-medium'>useRef is a hook in React that returns a mutable ref object whose .current property can be used to store a value that persists between renders. The primary purpose of useRef is to access and manage a DOM element or a child component instance imperatively from within a function component.</h6>
                    <h6 className='my-4 text-xl font-medium'>The primary purpose of useRef is to access and manage a DOM element or a child component instance imperatively from within a function component.</h6>
                </article>
                {/* Fourth Question  */}
                <article>
                    <h4 className='text-3xl font-semibold mt-5'>What is useMemo? What is the purpose of useMemo?</h4>
                    <h6 className='my-4 text-xl font-medium'>useMemo is a hook in React that memoizes the result of a function and only re-computes the result when one of its dependencies changes.</h6>
                    <h6 className='my-4 text-xl font-medium'>The primary purpose of useMemo is to optimize performance by memoizing the result of a function and only re-computing the result when one of its dependencies changes.</h6>
                </article>
            </section>
        </div>
    );
};

export default Blog;