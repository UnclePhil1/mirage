import Image from "next/image";

import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="h-screen w-screen flex-col flex justify-center items-center">
                <Image
                    src={'/logo.svg'}
                    alt="logo"
                    width={120}
                    height={120}
                    className="animate-pulse duration-700"
                />
            </div>
        </div>
    )
}

export default Loading