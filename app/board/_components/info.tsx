"use client";
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { Hint } from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal";
import Actions from "@/components/actions";
import Link from "next/link";
import { Menu } from "lucide-react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return (
    <div className="text-neutral-300 px-1.5">
      |
    </div>
  );
};

const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  })

  if (!data) return <InfoSkeleton />

  return (
    <div className="absolute top-4 left-4 bg-white rounded-md px-1.5 h-12 items-center shadow-md text-center justify-start flex">
      <Hint label="Go to board" side="bottom" sideOffset={10}>
        <Button asChild className="px-2" variant={'board'}>
          <Link href={'/'}>
            <Image
              src={'/logo.svg'}
              alt="Board Logo"
              width={40}
              height={40}
            />
            <span className={cn(
              `font-semibold text-lg ml-2 text-primary hidden md:block`, font.className
            )}>Mirage</span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <div className="md:hidden">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <KeyboardDoubleArrowDownIcon />
            </MenubarTrigger>
            <MenubarContent className="flex">
              <MenubarItem>
                <Hint label="Edit your title" side="bottom" sideOffset={10}>
                  <Button
                    variant={'board'}
                    className="text-base font-normal px-2"
                    onClick={() => onOpen(data._id, data.title)}>
                    {data.title}
                  </Button>
                </Hint>
              <TabSeparator />
              </MenubarItem>
              <MenubarItem>
                <Actions
                  id={data._id}
                  title={data.title}
                  side="bottom"
                  sideOffset={10}
                >
                  <div className="">
                    <Hint label="Main menu" side="bottom" sideOffset={10}>
                      <Button variant={'board'} size='icon'>
                        <Menu />
                      </Button>
                    </Hint>
                  </div>
                </Actions>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

      </div>
      <div className="hidden md:flex justify-center items-center">
        <Hint label="Edit your title" side="bottom" sideOffset={10}>
          <Button
            variant={'board'}
            className="text-base font-normal px-2"
            onClick={() => onOpen(data._id, data.title)}>
            {data.title}
          </Button>
        </Hint>
        <TabSeparator />
        <Actions
          id={data._id}
          title={data.title}
          side="bottom"
          sideOffset={10}
        >
          <div className="">
            <Hint label="Main menu" side="bottom" sideOffset={10}>
              <Button variant={'board'} size='icon'>
                <Menu />
              </Button>
            </Hint>
          </div>
        </Actions>
      </div>
    </div>
  );
};

export default Info;

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-4 left-4 bg-white rounded-md px-1.5 h-12 items-center shadow-md text-center justify-center w-[300px]">
      <Skeleton />
    </div>
  )
}