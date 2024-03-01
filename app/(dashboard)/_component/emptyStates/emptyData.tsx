'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import { api } from '@/convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const EmptyData = () => {
    const router = useRouter();
    const { organization } = useOrganization()
    const { mutate, pending } = useApiMutation(api.board.create);
    const onClick = () => {
        if (!organization) {
            return;
        }

        mutate({
            orgId: organization.id,
            title: 'Untitled'
        })
        .then((id) => {
            toast.success('Board created successfully!')
            router.push(`/board/${id}`)
        })
        .catch(() => {
            toast.error('Failed to create board!')
        })
    }

    return (
        <div className="h-full flex-col flex self-center items-center justify-center">
            <Image
                src={'/Images/data.svg'}
                alt='empty'
                width={700}
                height={300}
                className='w-full md:w-[350px] h-full md:h-[350px]'
                style={{
                    opacity: 0,
                    animation: '1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut',
                    animationDelay: '0s',
                }}
            />
            <p className='text-primary/50 text-xl text-center font-normal'>No board created yet!</p>
            <p className='text-primary/50 text-sm text-center'>Create your first board for your organization!</p>
            <Button disabled={pending} onClick={onClick} variant={'default'} className='mt-4'>Create your board</Button>
        </div>
    )
}

export default EmptyData