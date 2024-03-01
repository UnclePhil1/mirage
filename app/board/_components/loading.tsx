import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ToolbarSkeleton } from "./toolbar";
import { ParticipantsSkeleton } from "./participants";

export const Loading = () => {
  return (
    <main
      className="h-screen w-full relative bg-neutral-100 touch-none flex items-center justify-center"
    >
      <Loader className="h-6 w-6 text-slate-300 animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};