import HomeSectionHeading from './HomeSectionHeading.tsx';
import ProjectOverview from './ProjectOverview.tsx';

export default function Projects() {
  return (
    <div id='projects' className='flex flex-col w-full h-full py-16 md:pt-32'>
      <HomeSectionHeading label='Projects' />
      <div className="flex flex-col flex-wrap gap-12 justify-center items-center px-8 md:px-0">
        <ProjectOverview projIndex={0} type="forward" />
        <ProjectOverview projIndex={1} type="reverse" />
      </div>
    </div>
  )
}