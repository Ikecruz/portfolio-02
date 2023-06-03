"use client"

import { Navbar } from "@/components/Navbar/Navbar";
import Image from "next/image";
import blobImage from "@/images/blob-gradient.svg"

export default function Home() {

    return <>
        <main className="min-h-screen relative">
            <Navbar />
            <div className="hidden -z-10 sm:block absolute top-0 right-0">
                <Image 
                    src={blobImage}
                    alt=""
                    className="w-[500px] md:w-[700px] opacity-60"
                />
            </div>
        </main>
    </>

}