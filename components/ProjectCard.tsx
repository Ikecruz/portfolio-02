import { motion, Variants } from "framer-motion"
import { useState } from "react"
import eonace from "@/images/projects-screenshot/eonace.png"
import Image from "next/image"
import { useMediaQuery } from '@mantine/hooks';
import { BiLinkExternal } from "react-icons/bi"
import { SiNextdotjs, SiTypescript } from "react-icons/si"
import { TbBrandMantine } from "react-icons/tb"
import { buttonAnimation, comeFromUnder, comeFromUnderChildren } from "@/data-store/animations";
import { mainProjects } from "@/data-store/main-projects";

export const ProjectCard = ({ 
    description,
    image,
    link,
    name,
    tools,
    title,
    index
}: typeof mainProjects[0] & { index: number }) => {

    const [isHover, setIsHover] = useState(false)

    const isMobile = useMediaQuery('(max-width: 768px)')

    const overlayAnimation: Variants = {
        idle: {
            opacity: 0
        },
        onhover: {
            bottom: 0,
            opacity: 1
        }
    }

    const imageContainer: Variants = {
        onhover: {
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0
        }
    }

    return <>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2"
            onHoverEnd={() => setIsHover(false)}
            onHoverStart={() => setIsHover(true)}
            variants={comeFromUnder}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <motion.div 
                className="flex flex-col justify-center relative mb-7 md:mb-0"
                variants={comeFromUnderChildren}
            >
                <div className="flex gap-8 md:gap-20 min-h-32">
                    <p className="text-zinc-300">0{index}</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl sm:text-3xl font-black">{name}</p>
                        <p className="text-zinc-300 mb-3">{title}</p>
                        <div className="flex flex-wrap gap-3 mb-4">
                            {
                                tools.map(({ name, Icon }) => (
                                    <div className="text-3xl" key={name + "index"}>
                                        <Icon title={name} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <p className="absolute top-[40%] left-[55%] md:left-[40%] md:-translate-x-[40%] -translate-y-[40%] text-9xl font-black -z-10  font-sans text-transparent bg-clip-text bg-gradient-to-b to-70% from-zinc-600 to-transparent">
                    0{index}
                </p>
            </motion.div>
            <motion.div
                variants={comeFromUnderChildren}
            >
                <motion.div
                    className="relative overflow-hidden md:rounded-bl-[100px] md:rounded-tr-[100px]"
                    variants={!isMobile && isHover ? imageContainer : undefined}
                    initial={false}
                    animate={ isHover ? "onhover" : "idle" }
                >
                    <Image
                        src={image}
                        alt=""
                        className={`object-cover ${!isMobile && isHover && "blur-md"}`}
                    />
                    <motion.div
                        className="h-full backdrop-brightness-50 absolute -bottom-full w-full flex p-8 gap-4 flex-col justify-center"
                        variants={!isMobile && isHover ? overlayAnimation : undefined}
                        initial={false}
                        animate={ isHover ? "onhover" : "idle" }
                    >
                        <p className="text-base">
                            {description}
                        </p>
                        {
                            link !== "" &&
                            <motion.a
                                href={link}
                                className="my-button hidden md:flex items-center gap-3"
                                variants={buttonAnimation}
                                whileHover="active"
                                target="_blank"
                            >
                                <span>Visit</span>
                                <BiLinkExternal />
                            </motion.a>
                        }
                    </motion.div>
                </motion.div>
                {
                    link !== "" &&
                    <div className="md:hidden mt-3">
                        <a href={link} target="_blank" className="my-button flex items-center gap-3">
                            <span>Visit</span>
                            <BiLinkExternal />
                        </a>
                    </div>
                }
            </motion.div>
        </motion.div>

    </>

}