'use client'

import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen mx-auto flex flex-col justify-center items-center gap-4'>
        <FileSearch size={35} className='text-color-accent'/>
        <h1 className='text-color-accent text-3xl font-bold'> PAGE NOT FOUND</h1>
        <Link href="/" className='text-color-primary hover:text-color-accent transition-all'>Kembali</Link>
    </div>
  )
}

export default Page