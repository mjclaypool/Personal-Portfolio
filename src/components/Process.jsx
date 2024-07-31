export default function Process( {learnings, children} ) {
  return (
    <div id="process-section">
      <h2>Process:</h2>
      <ul className="process-list">
        {learnings.map(idea => (
          <div className="process-list-item" key={idea.title}>
            <h4>{idea.title}</h4>
            <p>{idea.insight}</p>
          </div>
        ))}
      </ul>
      {children}
    </div>
  )
}