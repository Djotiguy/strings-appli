"use client";
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
        <div className='flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg'>
            <div>
                <h1 className='text-center text-4xl my-4'>Social Media</h1>
            </div>
            <div className='text-center'>
                <Link
                className='bg-slate-900 text-white my-4 p-3 rounded-lg block' 
                href="/signin"> Sign in </Link>
            </div>
            <div className='text-center'>
                <Link
                className='bg-slate-900 text-white my-4 p-3 rounded-lg block'  
                href="signup"> Sign up </Link>
            </div>
        </div>
    </main>
  )
}
