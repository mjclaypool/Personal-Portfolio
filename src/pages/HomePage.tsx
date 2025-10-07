import Hero from '../components/Hero.tsx';
import Projects from '../components/Projects.tsx';
import About from '../components/About.tsx';
import Interests from '../components/Interests.tsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Interests />
    </>
  )
}