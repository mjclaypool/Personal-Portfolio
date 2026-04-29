import { ReactNode } from "react"
import { motion } from "framer-motion";

type wrapperProps = {
    link: string,
    children: ReactNode
}

export default function StackIconWrapper( props: wrapperProps ) {
    return (
        <motion.a
            whileHover={{scale: 1.2}}
            whileFocus={{scale: 1.2}}
            transition={{duration: '0.1'}}
            href={props.link}
            target="_blank"
            className="w-[24px] h-[24px] hover:text-p-ice-blue focus:text-p-ice-blue"
        >
            {props.children}
        </motion.a>
    )
}