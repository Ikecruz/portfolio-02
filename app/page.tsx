"use client"

import { Navbar } from "@/components/Navbar/Navbar";
import Image from "next/image";
import blobImage from "@/images/blob-gradient.svg"
import heroImg1 from "@/images/hero-image-01.svg"
import heroImg2 from "@/images/hero-image-02.svg"
import heroImg3 from "@/images/hero-image-03.svg"
import { BsChatSquareText } from "react-icons/bs"
import { AnimatedText } from "@/components/AnitmatedText";
import { Variants, motion } from "framer-motion";

export default function Home() {

    const appear: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                bounce: 0.3,
                type: "spring"
            }
        }
    }

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
            <div className="my-container sm:my-10 md:mb-14 gap-[4%] flex flex-wrap sm:h-[65vh] md:h-[80vh] min-[1300px]:h-[65vh]">
                <motion.div 
                    className="relative w-full h-auto sm:w-[43%]"
                    variants={appear}
                    initial="hidden"
                    animate="show"
                >
                    <div className="hidden sm:block absolute top-[50%] translate-y-[-50%] sm:left-[4%] z-[1]">
                        <Image
                            src={heroImg1}
                            alt=""
                            className="sm:w-[500px] sm:h-auto w-full object-contain"
                        />
                    </div>
                    <div className="hidden sm:block absolute top-[50%] translate-y-[-50%] sm:left-[-33%]">
                        <Image
                            src={heroImg2}
                            alt=""
                            className="sm:w-[600px] w-full object-contain"
                        />
                    </div>
                    <div className="sm:hidden h-[400px]">
                        <Image
                            src={heroImg3}
                            alt=""
                            className="h-full w-full scale-110 object-contain"
                        />
                    </div>
                </motion.div>
                <div className="w-full sm:w-[43%] flex flex-col justify-center gap-7">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-white flex justify-center items-center rounded-full">
                            <BsChatSquareText color="black" size="40%" />
                        </div>
                        <p className="font-black">Chat with me</p>
                    </div>
                    <AnimatedText 
                        text="Your Design & Development Partner"  
                        classname="text-4xl leading-[1.4] sm:text-5xl min-[980px]:text-6xl lg:text-7xl sm:leading-[1.2] font-black"
                    />
                    <button className="w-fit py-[10px] px-[60px] bg-white rounded-tr-[40px] text-sm font-extrabold text-black">
                        Lets talk
                    </button>
                </div>
            </div>
            <div className="my-container my-10">
                <p className="text-2xl leading-[1.4] sm:text-5xl font-black mb-6 sm:mb-10">My Services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-4 bg-white">

                    </div>
                    <div className="p-4 bg-white hidden sm:block">

                    </div>
                </div>
            </div>
        </main>
    </>

}