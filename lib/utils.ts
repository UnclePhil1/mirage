import { Camera } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = [
  "#6ED7F6",
  "#CAD188",
  "#C8AACC",
  "#DE48A7",
  "#BFAF38",
  "#FCCB61",
  "#D405EE",
  "#EFD465",
  "#B4C7F5",
  "#CBE228",
  "#AD48CC",
  "#C0C3AA",
  "#47F90B",
  "#DBAC68",
  "#AF216E",
  "#A9BDD8",
  "#5E66AB",
  "#A8ACC2",
  "#2EB3D1",
  "#79573B",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
