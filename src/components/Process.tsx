type processProps = {
  learnings: {
    title: string;
    insight: string;
    demo?: string
  }[]
}

export default function Process( props : processProps ) {
  return (
      <div>
        <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">Process:</h2>
        <ul>
          {props.learnings.map(idea => {
            const demoURL = idea.demo ? new URL(`../assets/${idea.demo}`, import.meta.url).href : undefined
            return (
              <div className="flex flex-col mb-12" key={idea.title}>
                <h4 className="font-bold text-xl leading-tight mb-2">{idea.title}</h4>
                <p className="leading-tight whitespace-pre-line">{idea.insight}</p>
                {demoURL && (
                  <video controls autoPlay loop muted className="w-full md:w-3/4 lg:w-1/2 self-center cursor-pointer rounded-xl mt-6 border-2 border-cc-light-grey">
                    <source src={demoURL} type="video/mp4" />
                  </video>
                )}
              </div>
            )
          })}
        </ul>
      </div>
  )
}