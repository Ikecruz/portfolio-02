'use client'

import Link from "next/link"
import { MobileNavbar, listContainer } from "./MobileNavbar"
import { Hamburger } from "../Icons/Hamburger"
import { useState } from "react"
import { Variants, motion } from "framer-motion"

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
                <p>Ikecruz</p>
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