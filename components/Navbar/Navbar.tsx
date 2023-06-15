'use client'

import Link from "next/link"
import { MobileNavbar, listContainer } from "./MobileNavbar"
import { Hamburger } from "../Icons/Hamburger"
import { useState } from "react"
import { Variants, motion } from "framer-motion"
import { Fira_Sans, IBM_Plex_Sans, Inter, Kanit, Lato, Mukta } from "next/font/google"

export const linkItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

export const fira = Fira_Sans({ weight: "800", subsets: ['latin'] })

export const Navbar = () => {

    const [mobile, setMobile] = useState(false)

    const navLink: Variants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        }
    }

    return <>
    
        <nav className="my-container py-7">
            <div className="flex justify-between">
                <div>
                    <div className="w-[46px] ps-3 bg-white">
                        <p className="text-2xl font-black text-white filter mix-blend-difference" style={fira.style} >ikecruz.</p>
                    </div>
                </div>
                <div>
                    <motion.ul 
                        className="hidden sm:flex gap-5 list-none"
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {
                            linkItems.map((item) => (
                                <motion.li 
                                    className="hover:underline underline-offset-2" 
                                    key={item.path}
                                    variants={navLink}
                                >
                                    <Link href={item.path}>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                    <button onClick={() => setMobile(!mobile)} className="sm:hidden">
                        <Hamburger size={30} />
                    </button>
                </div>
            </div>
        </nav>
        <MobileNavbar 
            opened={mobile} 
            onClose={() => setMobile(!mobile)} 
        />

    </>

}