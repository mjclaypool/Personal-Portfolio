type processProps = {
  learnings: {
    title: string;
    insight: string;
  }[]
}

export default function Process( props : processProps ) {
  return (
      <div>
        <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">Process:</h2>
        <ul>
          {props.learnings.map(idea => (
            <div className="mb-12" key={idea.title}>
              <h4 className="font-bold text-xl leading-tight mb-2">{idea.title}</h4>
              <p className="leading-tight">{idea.insight}</p>
            </div>
          ))}
        </ul>
      </div>
  )
}