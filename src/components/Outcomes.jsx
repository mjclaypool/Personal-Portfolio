export default function Outcomes( {outcomes, learnings, children}) {
  return (
    <>
      <h3>Outcomes:</h3>
      <p>{outcomes}</p>
      <ul>
        {learnings.map(concept => (
          <li key={concept}>{concept}</li>
        ))}
      </ul>
      {children}
    </>
  )
}