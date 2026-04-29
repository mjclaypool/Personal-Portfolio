import { ReactNode } from "react"
import { motion } from "framer-motion";

type wrapperProps = {
    children: ReactNode
}

export default function ArtWrapper( props : wrapperProps ) {
    return (
        <motion.div
            key='art-1'
            whileHover={{scale: 1.05}}
            whileFocus={{scale: 1.05}}
            transition={{ duration: 0.1 }}
        >
            {props.children}
        </motion.div>
    )
}