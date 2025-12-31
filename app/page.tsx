'use client'

import HeroSection from '@/components/HeroSection'
import LetterGlitch from '@/components/letter-glitch'
import MouseFollowGrid from '@/components/MouseFollowGrid'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import { lazy, Suspense, useEffect, useState } from 'react'

// Lazy load heavy components for better performance
const InteractionBox = lazy(() => import('@/components/InteractionBox'))
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'))
const SkillsSection = lazy(() => import('@/components/SkillsSection'))
const JourneySection = lazy(() => import('@/components/JourneySection'))
const CertificatesSection = lazy(
  () => import('@/components/CertificatesSection')
)
const ContactSection = lazy(() => import('@/components/ContactSection'))

// Loading fallback with branded styling
const SectionLoader = () => (
  <div className='min-h-[50vh] flex items-center justify-center'>
    <div className='flex flex-col items-center gap-4'>
      <div className='w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin' />
      <span className='text-muted-foreground text-sm font-mono'>
        Loading...
      </span>
    </div>
  </div>
)

export default function Home () {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'projects',
        'skills',
        'journey',
        'certificates',
        'contact'
      ]

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (
            rect.top < window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <SmoothScroll>
      <div className='min-h-screen bg-background text-foreground overflow-x-hidden noise'>
        <div className='fixed inset-0 z-0 pointer-events-none'>
          <LetterGlitch
            glitchColors={['#2b45399b', '#61dca39d', '#61b3dc9d']}
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            opacity={0.15}
          />
        </div>
        {/*             glitchColors={['#2b4539', '#61dca3', '#61b3dc']} */}
        {/* Mouse-following grid background */}
        <MouseFollowGrid />

        {/* Navigation */}
        <Navigation activeSection={activeSection} />

        {/* Right-side interaction box */}
        <Suspense fallback={null}>
          <InteractionBox />
        </Suspense>

        {/* Main content */}
        <main className='relative z-10'>
          <section id='hero' className='min-h-screen'>
            <HeroSection />
          </section>

          <Suspense fallback={<SectionLoader />}>
            <section id='projects' className='min-h-screen py-20'>
              <ProjectsSection />
            </section>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <section id='skills' className='min-h-screen py-20'>
              <SkillsSection />
            </section>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <section id='journey' className='min-h-screen py-20'>
              <JourneySection />
            </section>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <section id='certificates' className='py-20'>
              <CertificatesSection />
            </section>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <section id='contact' className='min-h-screen py-20'>
              <ContactSection />
            </section>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className='relative z-10 border-t border-border/50 py-8 glass'>
          <div className='container mx-auto px-4 text-center'>
            <p className='text-muted-foreground text-sm'>
              © 2025{' '}
              <span className='text-gradient font-semibold'>Ubaid Javaid</span>.
              Built with Next.js 16 + React 19.
            </p>
            <p className='text-xs text-muted-foreground/60 mt-2 font-mono'>
              MERN Stack Developer | Performance Architect
            </p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  )
}
