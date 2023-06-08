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
        title: "Web app / Frontend",
        description: "Crafted the frontend of a cutting-edge fintech web application, delivering a seamless user experience for bill payments, gift card transactions, and more.",
        image: eonace,
        link: "https://eonace.co",
        tools: [
            {
                name: "NextJS",
                Icon: SiNextdotjs
            },
            {
                name: "Mantine",
                Icon: TbBrandMantine
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
                name: "Axios",
                Icon: SiAxios
            }
        ]
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