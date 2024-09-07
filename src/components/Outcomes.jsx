export default function Outcomes( {outcomes, skills, insights, children}) {
  return (
    <div className="mb-12">
      <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">Outcomes:</h2>
      <p className="pb-2">{outcomes}</p>
      <ul className="list-disc leading-tight pl-8 pb-4">
        {skills.map(concept => (
          <li key={concept}>{concept}</li>
        ))}
      </ul>
      <p className="leading-tight">{insights}</p>
      {children}
    </div>
  )
}