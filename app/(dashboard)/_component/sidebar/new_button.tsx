'use client'

import React from 'react'

import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const NewButton = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <div className="aspect-square w-full h-full">
                        <TooltipProvider>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger asChild>
                                    <button className='bg-primary/10 h-full w-full rounded-md flex justify-center items-center opacity-60 hover:opacity-100 transition p-[6px]'>
                                        <Plus className='text-white' />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side='right' sideOffset={18}>
                                    <p>Create organization</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </div>
                </DialogTrigger>
                <DialogContent className='p-0 bg-transparent border-none max-w-[450px]'>
                    <CreateOrganization />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default NewButton