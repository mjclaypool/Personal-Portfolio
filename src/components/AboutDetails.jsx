export default function AboutDetails( {content}) {
  return (
    <div id="details-window" className="absolute py-4 px-6 h-[90%] lg:h-auto lg:min-h-[65%] w-[85%] bg-p-glacier-blue bg-opacity-70 rounded-md overflow-auto overflow-x-hidden animate-view-details lg:animate-view-details-lg">
      <h3 className="text-2xl my-4">{content.title}</h3>
      <p className="font-normal leading-tight mb-4">{content.description}</p>
      <p className="font-normal leading-tight mb-4">{content.takeaways}</p>
    </div>
  )
}