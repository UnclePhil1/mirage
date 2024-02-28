import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Accessible = () => {
    return (
        <div className='py-10 bg-black p-4 h-auto'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl uppercase text-center text-primary font-semibold'>A Smarter way to <br /> create value</h1>
            <div className="">
                <div className="w-full flex justify-center items-center py-10">
                    <Image
                        src={'/Images/mac.png'}
                        alt='Image of board'
                        width={700}
                        height={300}
                        className='md:w-[70%] md:h-[50%] rounded-lg'
                    />
                </div>
                <div className="w-full md:h-[70vh] grid grid-cols-1 space-y-10 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:px-[5%] justify-center items-center py-10 gap-4">
                    <div className="relative p-4 transition-all">
                        <p className='font-bold text-[10em] absolute text-secondary/50 md:-top-[70px] md:-left-[30px] -top-[70px] right-[20px] shallow'>1</p>
                        <div>
                            <h1 className='uppercase text-primary text-5xl font-semibold pb-6 z-50'>Simple</h1>
                            <p className='text-slate-400 text-lg'>
                                Sign Up to the white board, <br /> and
                                enjoy its simplicity.
                            </p>
                        </div>
                    </div>
                    <div className="relative p-4 transition-all">
                        <p className='font-bold text-[10em] absolute text-secondary/50 md:-top-[70px] md:-left-[30px] -top-[70px] right-[20px]'>2</p>
                        <div>
                            <h1 className='uppercase text-primary text-5xl font-semibold pb-6 z-50'>Fast</h1>
                            <p className='text-slate-400 text-lg'>
                                Application make use navigate <br /> through fast, and confidently
                            </p>
                        </div>
                    </div>
                    <div className="relative p-4 transition-all">
                        <p className='font-bold text-[10em] absolute text-secondary/50 md:-top-[70px] md:-left-[30px] -top-[70px] right-[20px]'>3</p>
                        <div>
                            <h1 className='uppercase text-primary text-5xl font-semibold pb-6 z-50'>Effective</h1>
                            <p className='text-slate-400 text-lg'>
                                Throughout the whole whiteboard, <br /> everything is made effective and reliable for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 flex w-full md:h-[70vh] justify-center items-center flex-col gap-4">
                <h1 className='text-4xl md:text-5xl lg:text-6xl uppercase text-center text-primary font-semibold hidden md:block'>SignUp today and<br /> have a smooth meeting.</h1>
                <h1 className='text-4xl md:text-5xl lg:text-6xl uppercase text-center text-primary font-semibold md:hidden'>SignUp today and have a smooth meeting.</h1>
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

export default Accessible