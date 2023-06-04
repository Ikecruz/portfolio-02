'use client'

import Link from "next/link"
import { MobileNavbar } from "./MobileNavbar"
import { Hamburger } from "../Icons/Hamburger"
import { useState } from "react"

export const Navbar = () => {

    const [mobile, setMobile] = useState(false)

    return <>
    
        <nav className="my-container py-7">
            <div className="flex justify-between">
                <p>Ikecruz</p>
                <div>
                    <ul className="hidden sm:flex gap-5 list-none">
                        <li className="">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="">
                            Works
                        </li>
                        <li className="">
                            Projects
                        </li>
                        <li className="">
                            Contacts
                        </li>
                    </ul>
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