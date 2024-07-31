export default function Screenshots( {screenshots, children} ) {
  return (
    <div id="screenshots-section">
      <h2>Screenshots:</h2>
      <div className="screenshot-list">
        {screenshots.map(image => (
          <img key={image} src={image} className="screenshot" />
        ))}
      </div>
      {children}
    </div>
  )
}