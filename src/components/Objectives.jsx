export default function Objectives( {objective, requirements, children} ) {
  return (
    <div>
      <h3>Objective:</h3>
      <p>{objective}</p>
      <ul>
        {requirements.map(req => (
          <li key={req}>{req}</li>
        ))}
      </ul>
      {children}
    </div>
  )
}