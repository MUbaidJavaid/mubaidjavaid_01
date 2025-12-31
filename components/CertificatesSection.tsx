import { motion } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useRef, useState } from 'react'
import { Button } from './ui/button'

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  image?: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'MERN Stack Development',
    issuer: 'Professional Certification',
    date: '2025',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/specialization/LDU2Q1TES8QH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n'
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: '2025',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/S0XER40OZLRW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    id: 3,
    title: 'Node.js & Express.js',
    issuer: 'Backend Development',
    date: '2025',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/JGL56YZCACHV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    id: 4,
    title: 'Advanced Frontend Development and Deployment',
    issuer: 'Full-Stack Academy',
    date: '2025',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/05KWP85F0KZC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    id: 5,
    title: 'TypeScript Fundamentals',
    issuer: 'Type-Safe Development',
    date: '2025',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/05KWP85F0KZC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  }
]

export default function CertificatesSection () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollTo = (direction: 'left' | 'right') => {
    const newIndex =
      direction === 'left'
        ? Math.max(0, currentIndex - 1)
        : Math.min(certificates.length - 1, currentIndex + 1)

    setCurrentIndex(newIndex)

    if (sliderRef.current) {
      const cardWidth = sliderRef.current.scrollWidth / certificates.length
      sliderRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='container mx-auto px-4 py-20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center mb-12'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gradient'>
          Certifications
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Professional certifications and continuous learning achievements.
        </p>
      </motion.div>

      {/* Slider Container */}
      <div className='relative max-w-6xl mx-auto'>
        {/* Navigation Buttons */}
        <Button
          variant='outline'
          size='icon'
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full glass hidden md:flex'
          onClick={() => scrollTo('left')}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} />
        </Button>

        <Button
          variant='outline'
          size='icon'
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full glass hidden md:flex'
          onClick={() => scrollTo('right')}
          disabled={currentIndex === certificates.length - 1}
        >
          <ChevronRight size={20} />
        </Button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex-shrink-0 w-[300px] md:w-[350px] snap-center'
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className='glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 group'
              >
                {/* Certificate Icon */}
                <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-electric/20 to-emerald-glow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                  <Award className='text-primary' size={32} />
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
                  {cert.title}
                </h3>
                <p className='text-emerald-glow text-sm mb-1'>{cert.issuer}</p>
                <p className='text-muted-foreground text-sm mb-4'>
                  {cert.date}
                </p>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-sm text-primary hover:underline'
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center gap-2 mt-6'>
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                if (sliderRef.current) {
                  const cardWidth =
                    sliderRef.current.scrollWidth / certificates.length
                  sliderRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: 'smooth'
                  })
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
