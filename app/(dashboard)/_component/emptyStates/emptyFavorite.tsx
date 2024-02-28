import React from 'react'
import Image from 'next/image'

const EmptyFavorite = () => {
    return (
        <div className="h-full flex-col flex self-center items-center justify-center">
            <Image
                src={'/Images/favorite.svg'}
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
            <p className='text-secondary/50 text-xl text-center font-normal'>No favorites!</p>
            <p className='text-secondary/50 text-sm text-center'>Add a favorite of your own</p>
        </div>
    )
}

export default EmptyFavorite