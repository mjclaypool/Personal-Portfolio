export default function Hero() {
  const heroURL = new URL(`../assets/hero--drill-press-transparent.png`, import.meta.url).href

  return (
    <div className='relative w-full h-[60vh] flex justify-center items-center'>
      <div className='absolute w-[100vw] h-full bg-cc-purple border-y-2 border-cc-light-grey'>
        <img src={heroURL} alt="3D model of a benchtop drill press" className="absolute right-0 2xl:right-[144px] h-full object-cover animate-hero-load z-20" />
      </div>
      <div className="absolute block h-full w-[100vw] bg-gradient-to-r from-[rgba(0,0,0,1)] from-20% to-[rgba(215,220,226,0)] to-100% z-10" />
      <div className='relative w-full lg:max-w-[1600px] flex flex-col self-end lg:self-center z-20 p-8 md:p-12 lg:px-24 text-cc-light-grey'>
        <h1 className="max-w-[60%] md:max-w-[50%] font-bold text-4xl my-8 md:text-5xl">
          Welcome to my portfolio!
        </h1>
        <p className="max-w-[70%] md:max-w-[50%] font-medium text-base leading-tight mb-4">
          I built this interactive site to share why I, a mechanical engineer turned software developer, am a great choice for bringing engaging, user-centered products into reality.
        </p>
      </div>
    </div>
  )
}