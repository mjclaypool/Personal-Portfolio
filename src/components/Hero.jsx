import heroImg from "../assets/pexels-daniel-smyth-83914874-10406128.jpg";

export default function Hero() {
  return (
    <div className='relative flex h-[60vh]'>
      <img
        src={heroImg}
        alt="Hero image of a CNC machine cutting into a metal block"
        className="absolute h-[60vh] w-[100vw] object-cover z-0"
      />
      <div className="absolute h-[60vh] w-[100vw] bg-gradient-to-r from-[rgba(1,13,19,1)] from-20% to-[rgba(1,13,19,0)] to-100% z-10" />
      <div className='relative flex flex-col w-full px-8 m-auto z-20'>
        <h1 className="font-bold text-4xl my-8">Welcome to my portfolio!</h1>
        <p className="text-base leading-tight mb-4">I built this interactive site to share why I, a mechanical engineer turned software developer, am a great choice for bringing engaging, user-centered products into reality.</p>
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