import React from 'react';

const page = async ({params}) => {
    const {p} = await params
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-25'>Hello {p}</h2>
        </div>
    );
};

export default page;