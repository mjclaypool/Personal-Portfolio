import CTAWrapper from "../UI/CTAWrapper";

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
        <CTAWrapper>
          <a
            href={props.liveLink}
            target="_blank"
            className="flex items-center px-8 py-2.5"
          >
            Preview Site
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              aria-label="Font Awesome external link icon"
              className="h-[18px] object-contain cursor-pointer text-n-light-grey pl-2"
            />
          </a>
        </CTAWrapper>
      }
      {props.repoLink &&
      <CTAWrapper>
          <a
            href={props.repoLink}
            target="_blank"
            className="flex items-center px-8 py-2.5"
          >
            View Code
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              aria-label="Font Awesome external link icon"
              className="h-[18px] object-contain cursor-pointer text-n-light-grey pl-2"
            />
          </a>
        </CTAWrapper>
      }
    </div>
  )
}