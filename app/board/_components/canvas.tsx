'use client'

import React from 'react'
import Info from './info'
import { Participants } from './participants'
import { Toolbar } from './toolbar'
import { useSelf } from '@/liveblocks.config'

interface CanvasProps {
    boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);
  
  return (
    <div className='w-full h-screen bg-muted-foreground/10 touch-none relative'>
        <Info boardId={boardId} />
        <Participants />
        {/* <Toolbar /> */}
    </div>
  )
}

export default Canvas