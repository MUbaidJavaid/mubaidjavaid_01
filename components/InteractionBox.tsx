import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Zap
} from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

const techStack = [
  { name: 'React', color: 'hsl(189 100% 50%)' },
  { name: 'Node.js', color: 'hsl(120 60% 50%)' },
  { name: 'MongoDB', color: 'hsl(120 50% 40%)' },
  { name: 'TypeScript', color: 'hsl(211 60% 48%)' },
  { name: 'Express', color: 'hsl(0 0% 70%)' }
]

const stats = [
  { label: 'Projects', value: '50+' },
  { label: 'Components', value: '100+' },
  { label: 'Performance', value: '25%↑' }
]

export default function InteractionBox () {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<'stack' | 'stats'>('stack')

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className='fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block'
    >
      <div className='relative'>
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full glass-strong rounded-l-xl p-2 text-muted-foreground hover:text-foreground transition-colors'
        >
          {isExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </motion.button>

        {/* Main Panel */}
        <AnimatePresence mode='wait'>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className='overflow-hidden'
            >
              <div className='glass-strong rounded-l-2xl p-6 w-[280px] border-l border-y border-border/50'>
                {/* Header */}
                <div className='flex items-center gap-2 mb-6'>
                  <div className='w-2 h-2 rounded-full bg-emerald-glow animate-pulse' />
                  <span className='text-xs font-mono text-muted-foreground'>
                    Available for work
                  </span>
                </div>

                {/* Tab Buttons */}
                <div className='flex gap-2 mb-4'>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'stack'
                        ? 'bg-primary/20 text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Terminal size={12} className='inline mr-1' />
                    Stack
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'stats'
                        ? 'bg-primary/20 text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Sparkles size={12} className='inline mr-1' />
                    Stats
                  </button>
                </div>

                {/* Content */}
                <AnimatePresence mode='wait'>
                  {activeTab === 'stack' ? (
                    <motion.div
                      key='stack'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='space-y-2'
                    >
                      {techStack.map((tech, i) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className='flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors'
                        >
                          <div
                            className='w-2 h-2 rounded-full'
                            style={{ backgroundColor: tech.color }}
                          />
                          <span className='text-sm font-mono'>{tech.name}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key='stats'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='space-y-4'
                    >
                      {stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className='flex items-center justify-between'
                        >
                          <span className='text-sm text-muted-foreground'>
                            {stat.label}
                          </span>
                          <span className='text-lg font-bold text-gradient'>
                            {stat.value}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Quick Actions */}
                <div className='mt-6 pt-4 border-t border-border/50 space-y-3'>
                  <Button
                    size='sm'
                    className='w-full group'
                    onClick={() =>
                      window.open('https://github.com/MUbaidJavaid', '_blank')
                    }
                  >
                    <Github
                      size={16}
                      className='mr-2 group-hover:rotate-12 transition-transform'
                    />
                    View GitHub
                  </Button>
                  <Button variant='outline' size='sm' className='w-full group'>
                    <Download
                      size={16}
                      className='mr-2 group-hover:translate-y-0.5 transition-transform'
                    />
                    Download CV
                  </Button>
                </div>

                {/* Social Links */}
                <div className='flex justify-center gap-4 mt-4 pt-4 border-t border-border/50'>
                  {[
                    { icon: Github, href: 'https://github.com/MUbaidJavaid' },
                    { icon: Linkedin, href: '#' },
                    { icon: Mail, href: 'mailto:contact@ubaid.dev' }
                  ].map(({ icon: Icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.2, y: -2 }}
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsed indicator */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='glass-strong rounded-l-xl py-6 px-3 flex flex-col items-center gap-4'
          >
            <Zap size={18} className='text-primary' />
            <div className='w-px h-8 bg-border' />
            <span className='text-xs font-mono text-muted-foreground [writing-mode:vertical-rl]'>
              MERN Stack
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
