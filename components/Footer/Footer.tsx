import footerMainImage from "@/../images/footer-img.svg"
import Image from "next/image"
import { socialItems } from "../Navbar/MobileNavbar"
import { AnimatedText } from "../AnitmatedText"
import blobImage from "@/../images/footer-blob.svg"

export const Footer = () => {

    const linkItems = [
        {
            name: "About",
            link: "#hello"
        },
        {
            name: "My Services",
            link: ""
        },
        {
            name: "My Projects",
            link: ""
        }
    ]

    return <>
    
        <div className="my-container my-28 mb-0">
            <div className="h-auto md:min-h-[450px] relative grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="hidden md:block absolute top-0 h-full scale-125 -left-[20%] -z-10">
                    <Image 
                        src={footerMainImage}
                        alt=""
                        className="h-full w-auto"
                    />
                </div>
                <div>
                    <AnimatedText 
                        text="say hello"
                        className="uppercase font-black text-3xl md:text-5xl mb-5 md:mb-10"
                    />
                    <p>Experienced software developer available for team collaboration or building your business&apos;s software solution. Skilled in clean coding, problem-solving, and staying up-to-date with industry trends. Let&apos;s connect and create something great!</p>
                </div>
                <div className="pt-7 md:pt-[100px]">
                    <div className="flex flex-col md:items-end">
                        <a className=" text-2xl md:text-3xl hover:underline portrait:underline underline-offset-[6px]">hello@ikecruz.dev</a>
                    </div>
                    <div>
                        <ul className="my-10 flex flex-col gap-5 font-[600] text-xl">
                            {
                                linkItems.map(({ name, link }, index) => (
                                    <li key={index}>
                                        <a 
                                            className="hover:underline portrait:underline underline-offset-[6px]" 
                                            href={link}
                                        >
                                            {name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex justify-end gap-6 text-2xl py-7">
                        {
                            socialItems.map(({ Icon, link }, index) => (
                                <a href={link} key={index}>
                                    <Icon />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="absolute top-0 h-full -right-[30%]  md:-right-[50%] -z-10">
                    <Image 
                        src={blobImage}
                        alt=""
                        className="h-full w-auto opacity-70 md:opacity-50"
                    />
                </div>
            </div>    
        </div>   

    </>

}