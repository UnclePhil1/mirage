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

    // const {
    //     mutate: onFavorite,
    //     pending: pendingFavorite,
    // } = useApiMutation(api.board.favorite);
    // const {
    //     mutate: onUnfavorite,
    //     pending: pendingUnfavorite,
    // } = useApiMutation(api.board.unfavorite);

    // const toggleFavorite = () => {
    //     if (isFavorite) {
    //         onUnfavorite({ id })
    //             .catch(() => toast.error("Failed to unfavorite"))
    //     } else {
    //         onFavorite({ id, orgId })
    //             .catch(() => toast.error("Failed to favorite"))
    //     }
    // };

    return (
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden border-secondary/20">
                <div className="relative flex-1 bg-secondary/10">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fit"
                    />
                    <Overlay />
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={() => {}}
                    disabled={false}
                />
            </div>
        </Link>
    )
}

export default BoardCard