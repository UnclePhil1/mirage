import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import Images, { StaticImageData } from 'next/image'
import Board from '@/public/Images/board.png'
import Stickers from '@/public/Images/stickers.png'
import Notes from '@/public/Images/notes.png'
import Shape from '@/public/Images/shape.png'
import Toolbox from '@/public/Images/toolbox.png'
import Realtime from '@/public/Images/time.png'


interface CardItem {
    image: StaticImageData,
    text: string
}

const cardArray: CardItem[] = [
    {
        image: Board,
        text: "WhiteBoard",
    },
    {
        image: Stickers,
        text: "Stickers",
    },
    {
        image: Notes,
        text: "Notes",
    },
    {
        image: Shape,
        text: "Shape",
    },
    {
        image: Toolbox,
        text: "Toolbox",
    },
    {
        image: Realtime,
        text: "Realtime Collaboration",
    },
]

const Features = () => {
    return (
        <div className='p-4 py-8 bg-black h-auto'>
            <h1 className="text-3xl text-primary md:p-8 font-semibold mb-8">Our Features</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 md:px-[5%]">
                {
                    cardArray.map((card: CardItem) => (
                        <div key={card.text} className='bg-black'>
                            <Card className='flex flex-col justc items-center bg-black p-4  border border-muted'>
                                <CardHeader className='rounded-full w-[150px] h-[150px] p-6 bg-primary'>
                                    <Images
                                        src={card.image}
                                        alt={card.text}
                                        width={700}
                                        height={300}
                                        className='w-full h-full'
                                    />
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='text-primary text-3xl text-center'>{card.text}</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Features