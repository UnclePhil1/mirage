import React from 'react'
import Image from 'next/image'

const EmptySearch = () => {
    return (
        <div className="h-full flex-col flex self-center items-center justify-center">
            <Image
                src={'/Images/searchagain.svg'}
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
            <p className='text-primary/50 text-xl text-center'>Not found, try searching again!</p>
        </div>
    )
}

export default EmptySearch