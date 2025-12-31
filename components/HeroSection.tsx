import { motion } from 'framer-motion'
import {
  ArrowDown,
  Download,
  Facebook,
  Github,
  Mail,
  Sparkles,
  Zap
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { scrollToSection } from './SmoothScroll'
import { Button } from './ui/button'

export default function HeroSection () {
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    setIsLarge(window.innerWidth >= 768)
  }, [])
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href =
      'https://drive.google.com/uc?export=download&id=1QMNvxKId_YhdJQbw1RmVYATbIg2Q3H00'
    link.download = 'Ubaid_Resume_MERN.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const name = 'Ubaid Javaid'.split('')
  const title = 'MERN Stack Developer'
  const subtitle = 'Performance Architect | UI Engineer'

  return (
    <div className='min-h-screen flex items-center justify-center relative px-4 overflow-hidden'>
      {/* Animated gradient orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-electric/20 blur-[120px]'
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className='absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-glow/15 blur-[100px]'
        />
      </div>

      <div className='max-w-5xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='inline-flex items-center gap-2 glass px-4 py-2 rounded-full  mt-32 mb-4 '
          >
            <span className='w-2 h-2 rounded-full bg-emerald-glow animate-pulse' />
            <span className='text-sm text-muted-foreground'>
              Available for new projects
            </span>
          </motion.div>

          {/* Animated Name */}
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4'>
            {name.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.4 + index * 0.04,
                  type: 'spring',
                  damping: 15,
                  stiffness: 100
                }}
                className='inline-block text-gradient'
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>

          {/* Title with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='space-y-3'
          >
            <h2 className='text-xl md:text-4xl font-semibold text-foreground flex items-center justify-center gap-3'>
              <Zap className='text-primary' size={isLarge ? 28 : 20} />
              {title}
              <Zap className='text-primary' size={isLarge ? 28 : 20} />
            </h2>
            <p className='text-sm md:text-xl text-muted-foreground font-mono'>
              {subtitle}
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className='flex flex-wrap justify-center gap-8 mt-8'
          >
            {[
              { value: '25%', label: 'Performance Boost' },
              { value: '50+', label: 'React Components' },
              { value: '20+', label: 'Node.js Modules' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className='text-center'
              >
                <div className='text-2xl md:text-4xl font-bold text-gradient'>
                  {stat.value}
                </div>
                <div className='text-sm text-muted-foreground'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className='flex flex-wrap justify-center gap-3 mt-10'
          >
            {[
              'MongoDB',
              'Express',
              'React',
              'Next.js',
              'Node.js',
              'TypeScript'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className='glass px-5 py-2.5 rounded-full text-sm font-medium font-mono border border-border/50 hover:border-primary/50 transition-colors'
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className='flex flex-wrap justify-center gap-4 mt-12'
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size='lg'
              className='group glow-hover'
            >
              <Sparkles className='mr-2' size={20} />
              View My Work
              <ArrowDown
                className='ml-2 group-hover:translate-y-1 transition-transform'
                size={20}
              />
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant='outline'
              size='lg'
              className='group border-primary/30 hover:border-primary'
            >
              <Download
                className='mr-2 group-hover:translate-y-0.5 transition-transform'
                size={20}
              />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className='flex justify-center gap-6 mt-12'
          >
            {[
              {
                icon: Github,
                href: 'https://github.com/MUbaidJavaid',
                label: 'GitHub'
              },
              {
                icon: Facebook,
                href: 'https://www.facebook.com/mubaidjavaid0',
                label: 'Facebook'
              },
              {
                icon: Mail,
                href: 'mailto:mubaidjavaid97@gmail.com',
                label: 'Email'
              }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className='text-muted-foreground hover:text-primary transition-colors p-2'
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div
          className='font-extrabold text-xl md:text-3xl mt-10'
          style={{
            animation: 'bounceCyan 2.5s ease-in-out infinite'
          }}
        >
          <span>?</span>
        </div>
        <div
          className='h-1 w-5 mx-auto rounded-full'
          style={{
            animation: 'lineCyan 2.5s ease-in-out infinite'
          }}
        ></div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className='absolute -bottom-20 left-1/2 -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='flex flex-col items-center gap-2 text-muted-foreground'
          >
            <span className='text-xs font-mono'>Scroll to explore</span>
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
