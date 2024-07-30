export default function AboutDetails( {content}) {
  return (
    <div id="details-window">
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      <p>{content.takeaways}</p>
    </div>
  )
}