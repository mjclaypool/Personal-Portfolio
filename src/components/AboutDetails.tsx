import { useContext } from "react"
import CaseStudyContext from "../store/CaseStudyContext.tsx"

export default function AboutDetails() {
  const caseStudyCtx = useContext(CaseStudyContext)

  return (
    <div id="details-window" className="absolute py-4 px-6 min-h-[55%] max-h-[90%] lg:min-h-[66%] xl:min-h-[55%] w-[85%] bg-gradient-to-t from-[rgba(0,0,0,.5)] from-0% to-[#2e3a41] to-50% rounded-xl overflow-auto overflow-x-hidden lg:animate-view-details">
      <h3 className="text-2xl my-4">{caseStudyCtx.activeButton.title}</h3>
      <p className="font-normal leading-tight mb-4">{caseStudyCtx.activeButton.description}</p>
      <p className="font-normal leading-tight mb-4">{caseStudyCtx.activeButton.takeaways}</p>
    </div>
  )
}