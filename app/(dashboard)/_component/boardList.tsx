'use client'
import React from 'react'
import EmptySearch from './emptyStates/emptySearch';
import EmptyFavorite from './emptyStates/emptyFavorite';
import EmptyData from './emptyStates/emptyData';

import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api';
import BoardCard from './board-card';
import { NewBoardButton } from './new-board-btn';

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    }
}

const BoardList = ({ orgId, query }: BoardListProps) => {
    const data = useQuery(api.boards.get, {
         orgId, ...query
        });

    if (data === undefined) {
        return (
            <div>
                <h1 className="text-3xl text-primary">
                    {
                        query.favorites ? 'Favorite boards' : 'Team boards'
                    }
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mt-8 pb-10 gap-4">
                    <NewBoardButton orgId={orgId} disabled />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                </div>
            </div>
        )
    }

    if (!data?.length && query.search) {
        return (
            <EmptySearch />
        )
    }

    if (!data?.length && query.favorites) {
        return (
            <EmptyFavorite />
        )
    }

    if (!data.length) {
        return (
            <EmptyData />
        )
    }

    return (
        <div>
            <h1 className="text-3xl text-primary">
                {
                    query.favorites ? 'Favorite boards' : 'Team boards'
                }
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mt-8 pb-10 gap-4">
                <NewBoardButton orgId={orgId} />
                {data?.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite}

                    />
                ))}
            </div>
        </div>
    )
}

export default BoardList