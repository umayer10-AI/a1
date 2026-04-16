import React from 'react';

const page = async ({params}) => {
    const {filePath} = await params
    console.log(filePath)
    return (
        <div>
            <h2>FIlePath -- {filePath.join("/")}</h2>
        </div>
    );
};

export default page;