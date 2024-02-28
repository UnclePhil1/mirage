"use client";
import Image from "next/image";
// import { TypewriterEffect } from "./typeWrtier";
import Logo from '@/public/Images/logowhite.png'

export function SplashScreen() {
    // const words = [
      
    //     {
    //         text: "Welcome",
    //     },
    //     {
    //         text: "to",
    //     },
    //     {
    //         text: "your",
    //     },
    //     {
    //         text: "white",
    //     },
    //     {
    //         text: "board!",
    //     },
    // ];
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-black">
            {/* <p className="text-neutral-100 dark:text-neutral-200 text-base  mb-10">
                Refelctive Bond.
            </p>
            <TypewriterEffect words={words} /> */}
            <Image
                src={Logo} alt="Logo" width={700} height={300} className="w-40 h-20 object-fill"
            />
        </div>
    );
}
