import { notFound } from 'next/navigation';
import React from 'react';

export const generateMetadata = async ({params}) => {
    const {p} = await params
    return{
        title: `Star ${p}`,
    }
}

const page = async ({params}) => {
    const {p} = await params

    if(!/^\d+$/.test(p)){
        notFound()
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-25'>Hello {p}</h2>
        </div>
    );
};

export default page;