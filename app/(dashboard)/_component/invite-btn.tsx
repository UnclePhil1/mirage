'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { OrganizationProfile } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const InviteBtn = () => {

    return (
        <div>
            <div className="hidden md:block">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={'outline'} className='bg-transparent border border-primary text-primary hover:bg-primary hover:text-secondary'>
                            <Plus className='h-4 w-4 mr-2' />
                            Invite members
                        </Button>
                    </DialogTrigger>
                    <DialogContent className='p-0 bg-transparent border-none'>
                        <OrganizationProfile />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="md:hidden">
                <Dialog>
                    <DialogTrigger asChild>
                        <TooltipProvider>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger asChild>
                                    <Button variant={'outline'} className='bg-transparent border border-primary'>
                                        <Plus className='' size={15} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side='right' sideOffset={18}>
                                    <p>add new members</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DialogTrigger >

                    <DialogContent className='p-0 bg-transparent border-none'>
                        <OrganizationProfile />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default InviteBtn