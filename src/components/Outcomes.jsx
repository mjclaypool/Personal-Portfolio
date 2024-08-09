export default function Outcomes( {outcomes, learnings, insights, children}) {
  return (
    <div id="outcomes-section">
      <h2>Outcomes:</h2>
      <p>{outcomes}</p>
      <ul className="outcomes-list">
        {learnings.map(concept => (
          <li key={concept}>{concept}</li>
        ))}
      </ul>
      <p>{insights}</p>
      {children}
    </div>
  )
}