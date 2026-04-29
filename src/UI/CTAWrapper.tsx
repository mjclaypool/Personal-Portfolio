import { ReactNode } from "react"
import { motion } from "framer-motion";

type wrapperProps = {
    children: ReactNode
}

export default function CTAWrapper( props: wrapperProps ) {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
            transition={{type: 'spring', duration: '0.3'}}
            className="font-bold bg-p-glacier-blue rounded-full hover:bg-opacity-80 shadow-md"
        >
            {props.children}
        </motion.div>
    )
}