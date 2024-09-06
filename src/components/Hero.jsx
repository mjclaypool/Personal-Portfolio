import heroImg from "../assets/pexels-daniel-smyth-83914874-10406128.jpg";

export default function Hero() {
  return (
    <div className='relative flex justify-center items-center h-[60vh] w-[100vw]'>
      <img src={heroImg} alt="CNC machine cutting into a metal block" loading="eager" className="absolute h-full w-full object-cover z-0" />
      <div className="absolute h-full w-full bg-gradient-to-r from-[rgba(1,13,19,1)] from-20% to-[rgba(1,13,19,0)] to-100% z-10" />
      <div className='relative flex flex-col w-full px-8 z-20 lg:px-24 lg:max-w-[1600px]'>
        <h1 className="font-bold text-4xl my-8 xl:text-5xl lg:max-w-[60%]">
          Welcome to my portfolio!
        </h1>
        <p className="text-base leading-tight mb-4 lg:max-w-[60%]">
          I built this interactive site to share why I, a mechanical engineer turned software developer, am a great choice for bringing engaging, user-centered products into reality.
        </p>
      </div>
      <div className='absolute bottom-3 right-6 text-xs z-20'>
        <p>
          Image source: <a
            href="https://www.pexels.com/photo/close-up-photo-of-metal-tool-10406128/"
            target="_blank"
            className="hover:text-p-ice-blue focus:text-p-ice-blue"
          >
            Daniel Smyth, Pexels
          </a>
        </p>
      </div>
    </div>
  )
}