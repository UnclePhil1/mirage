import React from 'react'
import './styles/empty-styles.css'
import Image from 'next/image'
import { CreateOrganization } from '@clerk/nextjs'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'


const EmptyOrg = () => {
    return (
        <div className="h-full flex-col flex self-center items-center justify-center">
            <Image
                src={'/Images/empty.svg'}
                alt='empty'
                width={700}
                height={300}
                className='w-full md:w-[70%] h-full md:h-[70%]'
                style={{
                    opacity: 0,
                    transform: 'scale(1.5)',
                    animation: '1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut',
                    animationDelay: '0s',
                }}
            />
            <p className='text-primary/50 text-xl text-center'>Welcome to Mirage Whiteboard!</p>
            <p className='text-primary/40 text-sm text-center'>Create an organization to get started!</p>
            <div className="mt-4">
                <Dialog>
                    <DialogTrigger>
                        <div className="aspect-square w-full h-full">
                            <Button variant='default'>
                                Create organization
                            </Button>
                        </div>
                    </DialogTrigger>
                    <DialogContent className='p-0 bg-transparent border-none max-w-[450px]'>
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default EmptyOrg