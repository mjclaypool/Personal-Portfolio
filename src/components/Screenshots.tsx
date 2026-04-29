type screenProps = {
  screenshots: string[]
}

export default function Screenshots( props : screenProps ) {
  return (
      <div id="screenshots-section" className="flex flex-col flex-1 mb-12">
        <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">Screenshots:</h2>
        <div className="flex flex-col gap-4 self-center lg:max-w-[1000px]">
          {props.screenshots.map(image => {
            const screenshotURL = new URL(`../assets/${image}`, import.meta.url).href
            return (
            <img key={screenshotURL} src={screenshotURL} loading="lazy" className="border-2 border-n-light-grey rounded-md animate-load-images" />
            )
          })}
        </div>
      </div>
  )
}