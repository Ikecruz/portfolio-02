'use client'

import Link from "next/link"
import { XIcon } from "../Icons/XIcon"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { MobileNavbarProps } from "../interfaces"
import { AnimatePresence, Variants, motion } from "framer-motion"
import Image from "next/image"
import blobImage from "@/images/blob-gradient.svg"
import { useEffect } from "react"
import { fira, linkItems } from "./Navbar"
import { Link as ScrollLink } from "react-scroll"

export const listContainer: Variants = {
    hidden: {
        opacity: 0,
        transition: {
            delay: 0.5,
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

export const socialItems = [
    {
        name: "Github",
        Icon: () => <FiGithub />,
        link: "https://github.com/ikecruz"
    },
    {
        name: "Twitter",
        Icon: () => <FiTwitter />,
        link: "https://twitter.com/ikxcrxz"
    },
    {
        name: "Linkedin",
        Icon: () => <FiLinkedin />,
        link: "https://www.linkedin.com/in/onyeka-ikedinobi-98538b204/"
    }
]

export const MobileNavbar = ({
    opened,
    onClose
}: MobileNavbarProps) => {

    const navLink: Variants = {
        hidden: {
            opacity: 0,
            x: "-100%",
        },
        show: {
            opacity: 1,
            x: 0,
        }
    }

    const socialLink: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    useEffect(() => {
        if (document && opened) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [opened])

    return <AnimatePresence>
        <motion.div
            className="md:hidden absolute flex flex-col z-10 w-full h-screen top-0 left-0 bg-primary-color"
            initial={false}
            animate={opened ? {
                opacity: 1
            } : {
                opacity: 0,
                transition: {
                    delay: 0.7
                }
            }}
            key="mobile-nav"
        >
            <div className="block transform -z-[1] -scale-x-100 sm:hidden absolute top-0 left-0">
                <Image
                    src={blobImage}
                    alt=""
                    className="w-[500px] md:w-[700px] opacity-70"
                />
            </div>
            <div className="flex justify-between my-container py-7">
                <div>
                    <div className="w-[46px] ps-3 bg-white">
                        <p className="text-2xl font-black text-white filter mix-blend-difference" style={fira.style} >ikecruz.</p>
                    </div>
                </div>
                <button onClick={onClose}>
                    <XIcon size={25} />
                </button>
            </div>
            <div className="flex-1 w-[90%] sm:w-[80%] lg:max-w-6xl mx-auto py-7">
                <motion.ul
                    className="flex underline underline-offset-[6px] flex-col gap-10 text-[25px]  h-full py-6"
                    variants={listContainer}
                    initial={false}
                    animate={opened ? "show" : "hidden"}
                    exit="hidden"
                >
                    {
                        linkItems.map((item) => (
                            <motion.li
                                key={item.path}
                                variants={navLink}
                            >
                                <ScrollLink
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    to={item.path}
                                    onClick={onClose}
                                >
                                    {item.name}
                                </ScrollLink>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>
            <motion.div
                className="flex gap-6 px-6 sm:px-14 text-2xl md:px-24 py-7"
                variants={listContainer}
                initial={false}
                animate={opened ? "show" : "hidden"}
                exit="hidden"
            >
                {
                    socialItems.map(({ link, Icon }) => (
                        <motion.a
                            href=""
                            key={link}
                            variants={socialLink}
                        >
                            <Icon />
                        </motion.a>
                    ))
                }
            </motion.div>
        </motion.div>
    </AnimatePresence>

}