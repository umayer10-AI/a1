"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const p = usePathname()
    return (
        <div className='flex items-center justify-between px-10 bg-cyan-800 py-4'>
            <h2 className='text-2xl font-bold'>Navbar</h2>
            <ul className='font-semibold flex items-center gap-5'>
                <Link href={'/'} className={p==='/' ? "btn btn-accent btn-outline" : "btn"}>Home</Link>
                <Link href={'/about'} className={p==='/about' ? "btn btn-accent btn-outline" : "btn"}>About</Link>
                <Link href={'/star'} className={p==='/star' ? "btn btn-accent btn-outline" : "btn"}>Star</Link>
                <Link href={'/files'} className={p==='/files' ? "btn btn-accent btn-outline" : "btn"}>Files</Link>
            </ul>
        </div>
    );
};

export default Navbar;