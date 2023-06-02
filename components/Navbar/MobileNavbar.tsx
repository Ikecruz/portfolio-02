'use client'

import Link from "next/link"
import { XIcon } from "../Icons/XIcon"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { BsLinkedin } from "react-icons/bs"

export const MobileNavbar = () => {

    return <>

        <div className="absolute flex flex-col w-full h-screen top-0 left-0 bg-primary-color">
            <div className="flex justify-between px-6 sm:px-14 md:px-24 py-7">
                <div></div>
                <button>
                    <XIcon size={20} />
                </button>
            </div>
            <div className="flex-1 px-6 sm:px-14 md:px-24 py-7">
                <ul className="flex flex-col gap-10 text-3xl  h-full py-6">
                    <li>
                        <Link href="/">
                            Home
                        </Link> 
                    </li>
                    <li>
                        <Link href="/">
                            Projects
                        </Link> 
                    </li>
                    <li>
                        <Link href="/">
                            Services
                        </Link> 
                    </li>
                    <li>
                        <Link href="/">
                            Contacts
                        </Link> 
                    </li>
                </ul>
            </div>
            <div className="flex gap-6 px-6 sm:px-14 text-2xl md:px-24 py-7">
                <a href="">
                    <FiGithub />
                </a>
                <a href="">
                    <FiLinkedin />
                </a>
                <a href="">
                    <FiTwitter />
                </a>
            </div>
        </div>
        

    </>

}