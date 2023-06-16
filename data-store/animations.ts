import { Variants } from "framer-motion"

export const comeFromUnder: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
            delayChildren: 0.3
        }
    }
}

export const comeFromUnderChildren: Variants = {
    hidden: {
        opacity: 0,
        y: "100vh"
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1
        }
    }
}

export const buttonAnimation: Variants = {
    active: {
        borderTopRightRadius: 0,
        transition: {
            type: "spring",
            duration: 1
        }
    }
}