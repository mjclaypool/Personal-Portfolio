import { motion } from "framer-motion";

import owimg from '../assets/interests--OW-fan-art.png'
import bikeimg from '../assets/interests--bike.png'

export default function Interests() {
    return(
        <div id='interests' className='flex flex-col px-8 py-16 items-center'>
            <h2 className="font-bold text-3xl self-center py-6">Interests</h2>
            <div className="xl:px-24 lg:max-w-[1600px]">
                <h3 className="text-2xl my-4 font-bold">3D Art</h3>
                <p className="font-normal leading-tight mb-4">In June 2025, I started teaching myself 3D modeling in Autodesk Maya. Having over a decade of CAD experience, I gravitated towards hard surface modeling and quickly picked up new skills for proper topology in sub-d models, mesh optimization of game assets, UV mapping, texturing, and rendering. Check out examples of my work!</p>
                <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center animate-load-images py-4 pb-12">
                    <motion.div
                        key='art-1'
                        whileHover={{scale: 1.05}}
                        whileFocus={{scale: 1.05}}
                        transition={{ duration: 0.1 }}
                    >
                        <a
                            href="https://www.artstation.com/artwork/AZNGVq"
                            target="_blank"
                            aria-level="Open live site for Sombra's Machine Pistor - Overwatch 2 Fan Art in a new tab"
                        >
                            <img src={owimg} className="max-h-[280px] rounded-xl hover:shadow-card focus:shadow-card cursor-pointer" />
                        </a>
                        
                    </motion.div>
                    <motion.div
                        key='art-2'
                        whileHover={{scale: 1.05}}
                        whileFocus={{scale: 1.05}}
                        transition={{ duration: 0.1 }}
                    >
                        <a
                            href="https://www.artstation.com/artwork/NqNZPz"
                            target="_blank"
                            aria-level="Open live site for Trek Marlin 6 in a new tab"
                        >
                            <img src={bikeimg} className="max-h-[280px] rounded-xl hover:shadow-card focus:shadow-card cursor-pointer" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}