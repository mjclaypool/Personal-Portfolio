export default function Objectives( {objective, requirements, children} ) {
  return (
    <div className="lg:mb-12">
      <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">Objectives:</h2>
      <p className="pb-2">{objective}</p>
      <ul className="list-disc leading-tight pl-8">
        {requirements.map(req => (
          <li key={req}>{req}</li>
        ))}
      </ul>
      {children}
    </div>
  )
}