import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type linksProps = {
  repoLink: string,
  liveLink: string,
}

export default function Links( props : linksProps ) {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-4 mb-12">
      {props.liveLink &&
        <motion.a
          whileHover={{scale: 1.1}}
          whileFocus={{scale: 1.1}}
          transition={{type: 'spring', duration: '0.3'}}
          href={props.liveLink}
          target="_blank"
          className="flex items-center font-bold bg-p-glacier-blue px-8 py-2.5 rounded-full hover:bg-opacity-80"
        >
          Preview Site
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            aria-label="Font Awesome external link icon"
            className="h-[18px] object-contain cursor-pointer text-n-light-grey pl-2"
          />
        </motion.a>
      }
      {props.repoLink &&
        <motion.a
          whileHover={{scale: 1.1}}
          whileFocus={{scale: 1.1}}
          transition={{type: 'spring', duration: '0.3'}}
          href={props.repoLink}
          target="_blank"
          className="flex items-center font-bold bg-p-glacier-blue px-8 py-2.5 rounded-full hover:bg-opacity-80"
        >
          View Code
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            aria-label="Font Awesome external link icon"
            className="h-[18px] object-contain cursor-pointer text-n-light-grey pl-2"
          />
        </motion.a>
      }
    </div>
  )
}