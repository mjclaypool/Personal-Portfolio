import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Links({ repoLink, liveLink }) {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-4 mb-12">
      {liveLink &&
        <motion.a
          whileHover={{scale: 1.1}}
          whileFocus={{scale: 1.1}}
          transition={{type: 'spring', duration: '0.3'}}
          href={liveLink}
          target="_blank"
          className="flex items-center font-bold bg-p-glacier-blue px-8 py-2.5 rounded-full hover:bg-opacity-80"
        >
          Preview Site
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            alt="Font Awesome external link icon"
            className="h-[18px] object-contain cursor-pointer text-n-light-grey pl-2"
          />
        </motion.a>
      }
      {repoLink &&
        <motion.a
          whileHover={{scale: 1.1}}
          whileFocus={{scale: 1.1}}
          transition={{type: 'spring', duration: '0.3'}}
          href={repoLink}
          target="_blank"
          className="flex items-center font-bold bg-p-glacier-blue px-8 py-2.5 rounded-full hover:bg-opacity-80"
        >
          View Code
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            alt="Font Awesome external link icon"
            className="h-[18px] object-contain cursor-pointer text-n-light-grey pl-2"
          />
        </motion.a>
      }
    </div>
  )
}