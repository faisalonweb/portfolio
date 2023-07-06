import Hero from './scene/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Work from '@/components/Work'
import GetInTouch from '@/components/GetInTouch'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Work />
      <GetInTouch />
    </main>
  )
}
