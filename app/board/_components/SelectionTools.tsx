'use client'

import React, { memo } from 'react'
import { Button } from '@/components/ui/button';
import { BringToFrontIcon, SendToBack, Trash2 } from 'lucide-react';

import { Camera, Color } from '@/types/canvas';
import { useSelf, useMutation } from '@/liveblocks.config';
import { useSelectionBounds } from '@/hooks/use-selection-bounds';
import { ColorPicker } from './color-picker';
import { useDeleteLayers } from '@/hooks/use-delete-layers';
import { Hint } from '@/components/hint';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';


interface SelectionToolsProps {
    camera: Camera;
    setLastUsedColor: (color: Color) => void;
}


export const SelectionTools = memo(({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    // const duplicateLayer = useMutation((
    //     { storage }
    // ) => {
    //     const liveLayers = storage.get('layers');
    //     const liveLayerIds = storage.get('layerIds');
    //     const newLayer = { ...originalLayer, id: newId };

    //     selection.forEach((id) => {
    //         const originalLayer = liveLayers.get(id);
    //         if (originalLayer) {
    //             // Create a copy of the original layer with a new ID
    //             const newLayer = { ...originalLayer.toImmutable(), id };
    //             newLayer.push(newLayer);
    //             liveLayers.set(newLayer.id, newLayer);
    //             liveLayerIds.push(newLayer.id);
    //         }
    //     });

    //     // This is just an example, make sure to adapt the code to your specific data structure and requirements
    // }, [selection]);


    const bringToFront = useMutation((
        { storage }
    ) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        // Appends new elements to the end of an array, and returns the new length of the array.
        for (let i = 0; i < arr.length; i++) {
            if (selection.includes(arr[i])) {
                indices.push(i);
            }
        }

        // Move one element from one index to another.
        for (let i = indices.length - 1; i >= 0; i--) {
            liveLayerIds.move(
                indices[i],
                arr.length - 1 - (indices.length - 1 - i)
            );
        }
    }, [selection]);

    const moveToBack = useMutation((
        { storage }
    ) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        // Determines whether an array includes a certain element, returning true or false as appropriate.
        for (let i = 0; i < arr.length; i++) {
            if (selection.includes(arr[i])) {
                indices.push(i);
            }
        }

        // Move one element from one index to another.
        for (let i = 0; i < indices.length; i++) {
            liveLayerIds.move(indices[i], i);
        }
    }, [selection]);

    const setFill = useMutation((
        { storage },
        fill: Color,
    ) => {

        const liveLayers = storage.get('layers');
        setLastUsedColor(fill);

        selection.forEach((id) => {
            liveLayers.get(id)?.set("fill", fill);
        })


    }, [selection, setLastUsedColor]);

    const deleteLayers = useDeleteLayers();

    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) {
        return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;

    const y = selectionBounds.y + camera.y;

    return (
        <div className="absolute p-3 rounded-xl bg-white border flex select-none"
            style={{
                transform: `
            translate(
                calc(${x}px - 50%)
                , calc(${y - 16}px - 100%)
            )
            `
            }}
        >
            <ColorPicker
                onChange={setFill}
            />

            <div className="flex flex-col gap-y-0.5">
                <Hint label='Bring to front'>
                    <Button
                        variant='board'
                        size='icon'
                        onClick={bringToFront}
                    >
                        <BringToFrontIcon />
                    </Button>
                </Hint>
                <Hint label='Send to back'>
                    <Button
                        variant='board'
                        size='icon'
                        onClick={moveToBack}
                    >
                        <SendToBack />
                    </Button>
                </Hint>
            </div>

            <div className="flex flex-col items-center pl-2 ml-2 border-l border-neutral-200">
                <Hint label='Delete'>
                    <Button
                        variant='board'
                        size='icon'
                        onClick={deleteLayers}
                    >
                        <Trash2 className="w-5 h-5" />
                    </Button>
                </Hint>
            </div>
        </div>
    )
});

SelectionTools.displayName = 'SelectionTools';