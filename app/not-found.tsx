import Link from 'next/link'
import React from 'react'

export default function NotFound(){
return <main className='lg:mt-40 md:mt-30 mt-4 w-full flex items-center justify-center'>
    <div className='flex flex-col sm:gap-2 gap-1 items-center'>
        <h1 className='font-bold sm:text-5xl text-3xl '>404</h1>
        <h2 className='font-semibold text-lg sm:text-xl'>Page not found</h2>
        <p className='opacity-70 max-w-[95%] text-center text-sm'>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link className='bg-foreground text-sm text-surface px-3 py-2 rounded-sm mt-1 sm:mt-3' href={"/"}>Go Home</Link>
    </div>
</main>
}