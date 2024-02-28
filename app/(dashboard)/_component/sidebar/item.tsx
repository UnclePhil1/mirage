'use client'


import React from 'react'
import Image from 'next/image'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

const Item = ({
    id, name, imageUrl
}: ItemProps) => {

    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if (!setActive) return;

        setActive({ organization: id });
    }

    return (
        <div>
            <div className="aspect-square relative">
                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                            <Image
                                src={imageUrl}
                                alt={name}
                                fill
                                onClick={onClick}
                                className={cn(`rounded-md cursor-pointer opacity-75 hover:opacity-100 transition`, isActive && "opacity-100")}
                            />
                        </TooltipTrigger>
                        <TooltipContent side='right' sideOffset={18}>
                            <p>{name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default Item