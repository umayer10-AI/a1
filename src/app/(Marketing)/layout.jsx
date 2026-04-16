import Nav2 from '@/component/Nav2';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Nav2></Nav2>
            {children}
        </div>
    );
};

export default layout;