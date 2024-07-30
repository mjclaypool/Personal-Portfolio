export default function Process( {process, learnings, children} ) {
  return (
    <div>
      <h3>Process:</h3>
      <p>{process}</p>
      <ul>
        {learnings.map(idea => (
          <li key={idea.title}>{idea.title}
            <ul>
              <li>{idea.insight}</li>
            </ul>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}