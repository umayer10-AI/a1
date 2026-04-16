"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({children}) => {
    const p = usePathname()
    return (
        <div className='flex'>
            <div className='flex flex-col w-50 px-2 bg-base-300 h-screen'>
                <Link href={'/about'} className={p==='/about' ? "btn btn-info btn-outline" : "btn"}>About</Link>
                <Link href={'/about/dash'} className={p==='/about/dash' ? "btn btn-info btn-outline" : "btn"}>About</Link>
                <Link href={'/about/profile'} className={p==='/about/profile' ? "btn btn-info btn-outline" : "btn"}>About</Link>
                <Link href={'/'} className='btn btn-info'>Home</Link>
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;