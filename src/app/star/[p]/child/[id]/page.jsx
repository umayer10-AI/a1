import React from 'react';

const page = async({params}) => {
    const {p,id} = await params
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-25'>Hello id {p} -- {id}</h2>
        </div>
    );
};

export default page;