import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <div>
            <div className="shadow-md border border-t border-r-0 border-l-0 bg-black py-4 px-8 backdrop-blur-md flex justify-between items-center w-full">
                <div className="flex justify-start items-center space-x-2">
                    <Image
                        src={'/logo.svg'}
                        alt='Logo'
                        width={120}
                        height={120}
                        className='w-10 h-10'
                    />
                    <h1 className='text-primary text-2xl'>
                        Mirage
                    </h1>
                </div>


                <div className="flex gap-4 justify-center items-center">
                    <Button variant='outline' className=''>
                        <Link href={'/sign-in'}>Log-in</Link>
                    </Button>
                    <Button className='hidden md:block'>
                        <Link href={'/sign-in'}>Sign-Up</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar