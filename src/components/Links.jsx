export default function Links({ repoLink }) {
  return (
    <div>
      <h2 className="font-bold text-3xl text-start text-p-ice-blue pb-4">
        Links:
      </h2>
      <h4 className="font-bold text-xl my-2">
        Repository <a href={repoLink} target="_blank" className="underline hover:text-p-ice-blue focus:text-p-ice-blue">Link</a>
      </h4>
    </div>
  )
}