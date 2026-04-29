import { useState } from "react";

import LoadingWheel from "./LoadingWheel";

type imageProps = {
    imgSrc: string,
    altText: string
}

export default function CaseStudyHero( props : imageProps ) {
    const [imgLoad, setImgLoad] = useState(false)
    const heroURL = new URL(`../assets/${props.imgSrc}`, import.meta.url).href

    return (
        <div className="flex justify-center py-12 lg:py-0 animate-hero-load">
            <div className="relative rounded-full overflow-hidden w-[320px] h-[320px] border-2 border-n-light-grey lg:w-[400px] lg:h-[400px]">
                {!imgLoad && <LoadingWheel />}
                <img
                    src={heroURL}
                    alt={props.altText}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoad ? 'opacity-100' : 'opacity-0'} text-center flex items-center`}
                    onLoad={() => setImgLoad(true)}
                    onError={() => setImgLoad(true)}
                />
            </div>
        </div>
    )
}