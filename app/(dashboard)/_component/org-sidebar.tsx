'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { OrganizationSwitcher } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { HeartIcon, LayoutDashboard } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
});

const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favorites = searchParams.get('favorites');

    return (
        <div className='hidden lg:flex flex-col space-y-6 w-[208px] pt-4 p-4 bg-secondary shadow-md border border-muted/10 relative'>
            <Link href={''}>
                <div className='flex items-center justify-start gap-x-2'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={40}
                        height={40}
                        className=''
                    />
                    <span className={cn(`font-semibold text-2xl text-primary`, font.className)}>Mirage</span>
                </div>
            </Link>
            <div className="fade-in-out"></div>
            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        },

                        organizationSwitcherTrigger: {
                            padding: '6px',
                            width: '100%',
                            borderRadius: '8px',
                            border: '1px solid #E5E7Eb',
                            justifyContent: 'space-between',
                            backgroundColor: 'white'
                        }
                    }
                }}
            />
            <div className="space-y-2 w-full">
                <Button
                    variant={favorites ? 'ghost' : 'default'}
                    asChild
                    size={'lg'}
                    className='font-normal justify-start px-2 w-full hover:bg-muted-foreground/10 hover:text-primary border border-muted-foreground/10'
                >
                    <Link href="/" className='text-primary'>
                        <LayoutDashboard className='h-4 w-4 mr-2' />
                        Team boards
                    </Link>
                </Button>
                <Button
                    variant={favorites ? 'default' : 'ghost'}
                    asChild
                    size={'lg'}
                    className='font-normal justify-start px-2 w-full hover:bg-muted-foreground/10 hover:text-primary border border-muted-foreground/10'
                >
                    <Link href={{
                        pathname: '/',
                        query: { favorites: true }
                    }} className='text-primary'>
                        <HeartIcon className='h-4 w-4 mr-2' />
                        Favorite boards
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default OrgSidebar