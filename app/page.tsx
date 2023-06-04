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
import servicesImg1 from "@/images/my-service-image-01.svg"
import servicesImg2 from "@/images/my-service-image-02.svg"
import gridImg from "@/images/grid-image.svg"
import aboutmeImg from "@/images/about-me-image.svg"

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

    const services = [
        {
            name: "Frontend Development",
            description: `
                I specialize in creating visually captivating and user-friendly websites,
                blending creativity with functionality as a frontend developer.
            `
        },
        {
            name: "Backend Engineering",
            description: `
                I deliver robust and efficient solutions that power the core functionalities of your applications, 
                ensuring seamless performance and scalability.
            `
        },
        {
            name: "Software Development",
            description: `
                Tailored software development services, satisfying exclusive business needs with exceptional solutions.
            `
        }
    ]

    return <>
        <main className="min-h-screen relative overflow-hidden">
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
                    <button className="my-button">
                        Lets talk
                    </button>
                </div>
            </div>
            <div className="my-container my-32 sm:my-40">
                <p className="text-2xl leading-[1.4] sm:text-5xl font-black sm:mb-8">Onyeka Ikedinobi</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="sm:order-2">
                        <Image 
                            src={aboutmeImg}
                            alt=""
                            className="w-full my-5 sm:my-0 sm:h-[400px] object-contain"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <p>
                            Hey, my name is  and I am across social medias. I’m a graphic designer, 
                            UX/UI designer & front-end web developer from France. 
                            I’m also passionate about pop music and make portraits and universes around what I listen to and 
                            I’m always curious to learn more when it comes to new technologies and creative coding.
                        </p>
                        <button className="my-button">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-container relative my-32 sm:my-40">
                <p className="text-2xl leading-[1.4] sm:text-5xl font-black sm:mb-8">Services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="sm:order-2 p-4 grid grid-cols-1 divide-y divide-zinc-500">
                        {
                            services.map(({ name, description }, index) => (
                                <div className="flex gap-4 py-5" key={index}>
                                    <div className="w-1/5 sm:w-1/4">
                                        <p className=" font-black">0{index}</p>
                                    </div>
                                    <div className="w-4/5 sm:w-3/4">
                                        <p className="text-xl font-bold">{name}</p>
                                        <p className="text-slate-200">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-4 hidden justify-center items-center sm:flex">
                        <div className="w-[80%] relative">
                            <Image 
                                src={servicesImg1}
                                alt=""
                                className="w-full h-auto "
                            />
                            <motion.div 
                                className="w-full h-auto absolute top-0 left-0"
                                initial={{
                                    x: "-10%",
                                    y: "-10%"
                                }}
                                whileHover={{
                                    x: 0,
                                    y: 0,
                                }}
                            >
                                <Image 
                                    src={servicesImg2}
                                    alt=""
                                    className="w-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Image 
                    src={gridImg}
                    alt=""
                    className="object-contain absolute top-[-20%] left-[-100px] -z-10 w-[250px]"
                />
                <Image 
                    src={gridImg}
                    alt=""
                    className="object-contain absolute bottom-[-20%] right-[-100px] -z-10 w-[250px] rotate-90"
                />
            </div>
        </main>
    </>

}