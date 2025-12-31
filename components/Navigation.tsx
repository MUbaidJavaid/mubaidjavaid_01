import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'
import { scrollToSection } from './SmoothScroll'

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
]

export default function Navigation ({ activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className='fixed top-0 left-0 right-0 z-40 px-4 py-4'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='glass-strong rounded-2xl px-6 py-3 flex items-center justify-between'>
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('hero')}
              className='flex items-center gap-2 text-xl font-bold'
              whileHover={{ scale: 1.05 }}
            >
              <Zap className='text-primary' size={24} />
              <span className='text-gradient'>UJ</span>
            </motion.button>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-1'>
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId='navActiveIndicator'
                        className='absolute inset-0 bg-primary/10 rounded-xl border border-primary/20'
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden p-2 rounded-xl hover:bg-muted/30 transition-colors'
              aria-label='Toggle menu'
            >
              <AnimatePresence mode='wait'>
                {mobileMenuOpen ? (
                  <motion.div
                    key='close'
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key='menu'
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='fixed top-24 left-4 right-4 z-40 md:hidden'
          >
            <div className='glass-strong rounded-2xl p-4 border border-border/50'>
              <ul className='space-y-1'>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                        activeSection === item.id
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
