export default function Screenshots( {screenshots, children} ) {
  return (
    <div id="screenshots-section" className="pb-8">
      <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">Screenshots:</h2>
      <div className="flex flex-col gap-4">
        {screenshots.map(image => (
          <img key={image} src={image} className="w-full border-2 border-n-light-grey rounded-md" />
        ))}
      </div>
      {children}
    </div>
  )
}