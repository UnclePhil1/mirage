'use client'

import { PointerEvent, memo } from "react";

import { colorToCss } from "@/lib/utils";
import { LayerType } from "@/types/canvas";
import { useStorage } from "@/liveblocks.config";

import { Rectangle } from './rectangle'
import { Ellipse } from "./ellipse";

interface LayerPreviewProps {
    id: string;
    onLayerPointDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
};

export const LayerPreview = memo(({
    id,
    onLayerPointDown,
    selectionColor
}: LayerPreviewProps) => {

    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
        return null;
    }

    switch (layer.type) {
        case LayerType.Ellipse:
            return (
                <Ellipse
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointDown}
                    selectionColor={selectionColor}
                />
            );

        case LayerType.Rectangle:
            return (
                <Rectangle
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointDown}
                    selectionColor={selectionColor}
                />
            );
        default: console.warn("Unknow LayerTyp")
            return null;
    }
    return (
        <div>
            LayerPreview
        </div>
    )
})

LayerPreview.displayName = "LayerPreview";