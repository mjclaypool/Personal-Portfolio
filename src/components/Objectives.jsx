export default function Objectives( {objective, requirements, children} ) {
  return (
    <div id="objectives-section">
      <h2>Objectives:</h2>
      <p>{objective}</p>
      <ul className="objectives-list">
        {requirements.map(req => (
          <li key={req}>{req}</li>
        ))}
      </ul>
      {children}
    </div>
  )
}