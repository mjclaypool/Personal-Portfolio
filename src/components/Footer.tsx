import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

type profPic = {
  imageSrc: string
}

export default function Footer( props: profPic ) {
  const connectLink = "flex flex-1 justify-center font-bold border-2 border-n-light-grey py-3 rounded-md hover:text-p-ice-blue hover:border-p-ice-blue focus:text-p-ice-blue focus:border-p-ice-blue";
  const hashLink = "hover:text-p-ice-blue focus:text-p-ice-blue";

  return (
    <footer className="flex justify-center bg-gradient-to-t from-[rgba(0,0,0,.5)] from-0% to-[#2e3a41] to-50% border-t-2 border-cc-grad-dark-grey">
      <div className="flex flex-1 flex-col justify-between items-center lg:items-start gap-20 font-bold py-12 px-8 lg:flex-row lg:px-24 lg:max-w-[1200px]">
        <HashLink to="/#" aria-label="return-to-homepage" className="flex flex-col items-center gap-2">
          <img src={props.imageSrc} alt='My profile picture' loading="lazy" className="rounded-md" />
          <span className="text-2xl">Mallory Claypool</span>
        </HashLink>
        <div className="flex flex-col gap-2 text-center px-8 lg:text-start lg:pt-8">
          <h3 className="text-2xl pb-4">Pages:</h3>
          <HashLink to="/#projects" className={hashLink}>Projects</HashLink>
          <HashLink to="/#about" className={hashLink}>About</HashLink>
          <HashLink to="/#interests" className={hashLink}>Interests</HashLink>
        </div>
        <div className="lg:pt-8">
          <h3 className="text-2xl pb-4">Connect:</h3>
          <div className="flex gap-3 w-[332px]">
            <motion.a
              whileHover={{scale: 1.1}}
              whileFocus={{scale: 1.1}}
              transition={{type: 'spring', duration: '0.3'}}
              href="https://www.linkedin.com/in/mallory-claypool/"
              target="_blank"
              className={connectLink}
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{scale: 1.1}}
              whileFocus={{scale: 1.1}}
              transition={{type: 'spring', duration: '0.3'}}
              href="https://www.github.com/mjclaypool/"
              target="_blank"
              className={connectLink}
            >
              Github
            </motion.a>
          </div>
          <motion.a
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
            transition={{type: 'spring', duration: '0.3'}}
            href="https://www.artstation.com/mjclay"
            target="_blank"
            className={`${connectLink} mt-3`}
          >
            ArtStation
          </motion.a>
        </div>
      </div>
    </footer>
  )
}