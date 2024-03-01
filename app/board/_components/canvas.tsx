'use client'

import React from 'react'
import Info from './info'
import { Participants } from './participants'
import { Toolbar } from './toolbar'
import { useState } from 'react'

import { 
  useHistory, 
  useCanUndo, 
  useCanRedo,
  useMutation,
  useStorage,
  useOthersMapped,
  useSelf,
} from "@/liveblocks.config";

// import { 
//   colorToCss,
//   connectionIdToColor, 
//   findIntersectingLayersWithRectangle, 
//   penPointsToPathLayer, 
//   pointerEventToCanvasPoint, 
//   resizeBounds,
// } from "@/lib/utils";

import { 
  Camera, 
  CanvasMode, 
  CanvasState, 
  Color,
  LayerType,
  Point,
  Side,
  XYWH,
} from "@/types/canvas";


interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me: any) => me.info);
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <div className='w-full h-screen bg-muted-foreground/10 touch-none relative'>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar 
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
    </div>
  )
}

export default Canvas