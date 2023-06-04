import { AnimatePresence, Variants, motion } from "framer-motion";
import { AnimatedTextProps } from "./interfaces";

export const AnimatedText = ({
    text,
    classname
}: AnimatedTextProps) => {

    const wordArr = text.split("")

    const sentence: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }

    const letter: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return <motion.p
        className={classname}
        variants={sentence}
        initial="hidden"
        animate="visible"
    >
        {
            wordArr.map((char, index) => (
                <motion.span
                    key={char + '-' + index}
                    variants={letter}
                >
                    {char}
                </motion.span>
            ))
        }
    </motion.p>

}