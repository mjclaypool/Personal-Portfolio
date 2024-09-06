export default function Screenshots( {screenshots, children} ) {
  return (
      <div id="screenshots-section" className="flex flex-col flex-1 mb-12">
        <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">Screenshots:</h2>
        <div className="flex flex-col gap-4 self-center lg:max-w-[1000px]">
          {screenshots.map(image => (
            <img key={image} src={image} loading="lazy" className="border-2 border-n-light-grey rounded-md" />
          ))}
        </div>
        {children}
      </div>
  )
}