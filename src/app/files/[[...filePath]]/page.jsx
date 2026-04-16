import React from 'react';

const page = async ({params}) => {
    const {filePath} = await params
    // console.log(filePath)
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-25'>FIlePath -- {filePath?.join("/")}</h2>
        </div>
    );
};

export default page;