import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function Footer( {img} ) {
  return (
    <footer className="flex flex-wrap justify-center items-start gap-20 font-bold py-12 px-8">
      <HashLink to="/#" aria-label="return-to-homepage" className="flex flex-col items-center gap-2">
        <img src={img} alt='My profile picture' className="rounded-md" />
        <span className="text-2xl">Mallory Claypool</span>
      </HashLink>
      <div className="flex flex-col gap-2 text-center px-8">
        <h3 className="text-2xl pb-4">Pages:</h3>
        <HashLink to="/#projects" className="hover:text-p-ice-blue focus:text-p-ice-blue">Projects</HashLink>
        <HashLink to="/#exercises" className="hover:text-p-ice-blue focus:text-p-ice-blue">Exercises</HashLink>
        <HashLink to="/#about" className="hover:text-p-ice-blue focus:text-p-ice-blue">About</HashLink>
      </div>
      <div>
        <h3 className="text-2xl px-2 pb-4">Connect:</h3>
        <div className="flex gap-3">
          <motion.a
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
            transition={{type: 'spring', stiffness: 300}}
            href="https://www.linkedin.com/in/mallory-claypool/"
            target="_blank"
            className="flex justify-center items-center w-[160px] h-[56px] font-bold border-2 border-n-light-grey rounded-md hover:text-p-ice-blue hover:border-p-ice-blue focus:text-p-ice-blue focus:border-p-ice-blue"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
            transition={{type: 'spring', stiffness: 300}}
            href="https://www.github.com/mjclaypool/"
            target="_blank"
            className="flex justify-center items-center w-[160px] h-[56px] font-bold border-2 border-n-light-grey rounded-md hover:text-p-ice-blue hover:border-p-ice-blue focus:text-p-ice-blue focus:border-p-ice-blue"
          >
            Github
          </motion.a>
        </div>
      </div>
    </footer>
  )
}