'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Overlay } from './overlay';

import { formatDistanceToNow } from "date-fns";
import { useAuth } from '@clerk/nextjs';
import { Footer } from './footer';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import Actions from '@/components/actions';
import { MoreHorizontal } from 'lucide-react';

interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
};

const BoardCard = ({
    id,
    title,
    authorId,
    authorName,
    createdAt,
    imageUrl,
    orgId,
    isFavorite,
}: BoardCardProps) => {
    const { userId } = useAuth();

    const authorLabel = userId === authorId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true,
    });

    const {
        mutate: onFavorite,
        pending: pendingFavorite,
    } = useApiMutation(api.board.favorite);

    const {
        mutate: onUnfavorite,
        pending: pendingUnfavorite,
    } = useApiMutation(api.board.unfavorite);

    const toggleFavorite = () => {
        if (isFavorite) {
            onUnfavorite({ id })
                .catch(() => toast.error("Failed to unfavorite"))
        } else {
            onFavorite({ id, orgId })
                .catch(() => toast.error("Failed to favorite"))
        }
    };

    return (
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden border-muted-foreground/20">
                <div className="relative flex-1 bg-primary/10">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fit"
                    />
                    <Overlay />
                    <Actions
                        id={id}
                        title={title}
                        side='right'
                    >
                        <button className='absolute top-1 right-1 opacity-100 bg-secondary/20 w-[30px] h-[30px] flex justify-center items-center rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1 outline-none'>
                            <MoreHorizontal
                                className='text-white opacity-75 hover:opacity-100 transition-opacity'
                                size={30}
                            />
                        </button>
                    </Actions>
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={toggleFavorite}
                    disabled={pendingFavorite || pendingUnfavorite}
                />
            </div>
        </Link>
    )
}

export default BoardCard

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden border-secondary/20">
            <div className="relative flex-1 bg-secondary/10">
                <Skeleton className='h-full w-full' />
                <Overlay />
            </div>
        </div>
    )
}