'use client'

import { Pangolin } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { NoteLayer } from "@/types/canvas";
import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";
import { useState } from "react";

const font = Pangolin({
  subsets: ["latin"],
  weight: ["400"],
});

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.15;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;

  return Math.min(
    fontSizeBasedOnHeight,
    fontSizeBasedOnWidth,
    maxFontSize
  );
};

interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

export const Note = ({
  layer,
  onPointerDown,
  id,
  selectionColor,
}: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;
  const [text, setText] = useState(value || "");

  const updateValue = useMutation((
    { storage },
    newValue: string,
  ) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    const newValue = e.target.value;
    setText(newValue); // Update local text state
    updateValue(newValue); // Update liveLayers value
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill? colorToCss(fill) : "#000",
      }}
      className="shadow-md drop-shadow-xl relative"
    >
      <div className="h-full">
        <ContentEditable
          html={value || "Text"}
          onChange={handleContentChange}
          className={cn(
            "h-full w-full flex items-center p-2 justify-center text-center outline-none",
            font.className
          )}
          style={{
            fontSize: calculateFontSize(width, height),
            color: fill? getContrastingTextColor(fill) : "#000",
          }}
        />
      </div>
    </foreignObject>
  );
};