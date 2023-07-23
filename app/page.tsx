import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Experiencia from '@/components/Experiencia'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Integrantes from '@/components/Integrantes'

export default function Home() {
  return (
    <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll
      z-0'>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      
      <section id="experiencia" className='snap-center'>
        <Experiencia/>
      </section>
      <section id="integrantes" className='snap-center'>
        <Integrantes/>
      </section>
      <section id="contact" className='snap-center'>
        <ContactMe/>
      </section>
    </main >
  )
}
