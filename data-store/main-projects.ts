import { 
    SiNextdotjs, 
    SiTypescript, 
    SiReact, 
    SiAxios,
    SiFramer,
    SiTailwindcss
} from "react-icons/si"
import eonace from "@/images/projects-screenshot/eonace.png"
import ikecruz from "@/images/projects-screenshot/ikecruz.png"
import { TbBrandMantine } from "react-icons/tb"

export const mainProjects = [
    {
        name: "Eonace",
        title: "Mobile payment solution",
        description: "Developed a user-friendly platform facilitating the purchase of gift cards, airtime recharge, electricity bill payments, and online service transactions",
        image: eonace,
        link: "https://eonace.co",
        tools: []
    },
    {
        name: "Ikecruz V2",
        title: "Web app / Frontend",
        description: "Designed and developed an impressive portfolio website that showcases my talents, achievements, and creative projects with an intuitive user interface and captivating design.",
        image: ikecruz,
        link: "",
        tools: [
            {
                name: "NextJS",
                Icon: SiNextdotjs
            },
            {
                name: "Typescript",
                Icon: SiTypescript
            },
            {
                name: "React",
                Icon: SiReact
            },
            {
                name: "Tailwind",
                Icon: SiTailwindcss
            },
            {
                name: "Framer Motion",
                Icon: SiFramer
            }
        ]
    }
]