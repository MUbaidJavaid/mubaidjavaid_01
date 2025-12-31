'use client'

import { Project, projects } from '@/lib/data/projects'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Github,
  X
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'

export default function ProjectsSection () {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (activeProject) {
      setCurrentImageIndex(prev =>
        prev === activeProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (activeProject) {
      setCurrentImageIndex(prev =>
        prev === 0 ? activeProject.images.length - 1 : prev - 1
      )
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return

      switch (e.key) {
        case 'Escape':
          setActiveProject(null)
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProject, prevImage, nextImage])

  return (
    <div className='container mx-auto px-4 py-20'>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-center '
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gradient'>
          Featured Projects
        </h2>
        <p className='text-muted-foreground max-w-xl mx-auto'>
          Selected projects showing full-stack & UI expertise
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20'>
        {projects.map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className='overflow-hidden group cursor-pointer h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-2xl'
              onClick={() => {
                setActiveProject(project)
                setCurrentImageIndex(0)
              }}
            >
              {/* Project Image Container */}
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className='object-cover transition-all duration-500 group-hover:scale-110'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority={project.id <= 3}
                />

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                  <div className='flex items-center gap-2 text-white mb-2'>
                    <Eye size={20} />
                    <span className='font-medium'>View Project</span>
                  </div>
                  <p className='text-white/80 text-sm line-clamp-2'>
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags on Image */}
                <div className='absolute top-4 left-4 flex flex-wrap gap-1'>
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='px-2 py-1 text-xs font-medium bg-black/70 backdrop-blur-sm text-white rounded-md'
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className='px-2 py-1 text-xs font-medium bg-black/70 backdrop-blur-sm text-white rounded-md'>
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className='p-6'>
                <div className='flex items-start justify-between mb-3'>
                  <h3 className='text-xl font-bold line-clamp-1 flex-1'>
                    {project.title}
                  </h3>
                  <span className='text-xs text-muted-foreground bg-secondary px-2 py-1 rounded ml-2'>
                    {project.images.length} images
                  </span>
                </div>

                <p className='text-muted-foreground mb-4 line-clamp-2'>
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex-1 group/btn'
                    onClick={e => {
                      e.stopPropagation()
                      if (project.liveUrl)
                        window.open(project.liveUrl, '_blank')
                    }}
                  >
                    <ExternalLink
                      className='mr-2 group-hover/btn:scale-110 transition-transform'
                      size={16}
                    />
                    Live Demo
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex-1 group/btn'
                    onClick={e => {
                      e.stopPropagation()
                      if (project.githubUrl)
                        window.open(project.githubUrl, '_blank')
                    }}
                  >
                    <Github
                      className='mr-2 group-hover/btn:rotate-12 transition-transform'
                      size={16}
                    />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[999] bg-black/95 backdrop-blur-lg flex items-center justify-center  p-4'
            onClick={() => setActiveProject(null)}
          >
            {/* Modal Container - Now Scrollable */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className='relative  w-full max-w-5xl max-h-[70vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col'
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className='absolute top-4 right-4 z-20 p-3 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/90 transition-colors border border-white/20'
              >
                <X size={20} className='text-white' />
              </button>

              {/* Image Counter */}
              <div className='absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm text-white border border-white/20'>
                {currentImageIndex + 1} / {activeProject.images.length}
              </div>

              {/* Main Image with Navigation Buttons */}
              <div className='relative h-[50vh] min-h-[300px] bg-gray-800 flex-shrink-0'>
                <Image
                  src={activeProject.images[currentImageIndex]}
                  alt={`${activeProject.title} - Image ${
                    currentImageIndex + 1
                  }`}
                  fill
                  className='object-contain'
                  priority
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/90 transition-colors border border-white/20'
                >
                  <ChevronLeft size={24} className='text-white' />
                </button>
                <button
                  onClick={nextImage}
                  className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/90 transition-colors border border-white/20'
                >
                  <ChevronRight size={24} className='text-white' />
                </button>

                {/* Image Navigation Dots */}
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                  {activeProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Info Panel - Scrollable */}
              <div className='flex-1 overflow-y-auto custom-scrollbar p-6 bg-gray-800/50 backdrop-blur-sm'>
                <div className='flex flex-col lg:flex-row gap-6 min-h-0'>
                  {/* Project Details - Scrollable if needed */}
                  <div className='flex-1 overflow-y-auto custom-scrollbar pr-2'>
                    <h3 className='text-2xl font-bold text-white mb-3'>
                      {activeProject.title}
                    </h3>
                    <p className='text-gray-300 mb-4 whitespace-pre-line'>
                      {activeProject.description}
                    </p>

                    {/* Tech Tags */}
                    <div className='mb-6'>
                      <h4 className='text-sm font-semibold text-gray-400 mb-3'>
                        Technologies Used
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {activeProject.tags.map(tag => (
                          <span
                            key={tag}
                            className='px-3 py-1 text-sm font-medium bg-primary/20 text-primary rounded-full border border-primary/30'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className='flex flex-wrap gap-3 mb-6'>
                      {activeProject.liveUrl && (
                        <Button
                          onClick={() =>
                            window.open(activeProject.liveUrl, '_blank')
                          }
                          className='gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70'
                        >
                          <ExternalLink size={18} />
                          Visit Live Site
                        </Button>
                      )}
                      {activeProject.githubUrl && (
                        <Button
                          variant='outline'
                          className='gap-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                          onClick={() =>
                            window.open(activeProject.githubUrl, '_blank')
                          }
                        >
                          <Github size={18} />
                          View Source Code
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  <div className='lg:w-48 flex-shrink-0'>
                    <div className='sticky top-0 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg'>
                      <h4 className='text-sm font-semibold text-gray-400 mb-3'>
                        All Images ({activeProject.images.length})
                      </h4>
                      <div className='grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto custom-scrollbar-thin'>
                        {activeProject.images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all group/thumbnail ${
                              index === currentImageIndex
                                ? 'border-primary ring-2 ring-primary/50'
                                : 'border-transparent hover:border-white/50'
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className='object-cover'
                            />
                            <div
                              className={`absolute inset-0 bg-black/40 transition-opacity ${
                                index === currentImageIndex
                                  ? 'opacity-0'
                                  : 'opacity-0 group-hover/thumbnail:opacity-100'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Keyboard Navigation Hint */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm text-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10'>
              <kbd className='px-2 py-1 bg-gray-800 rounded mx-1'>←</kbd>
              <kbd className='px-2 py-1 bg-gray-800 rounded mx-1'>→</kbd>
              navigate •
              <kbd className='px-2 py-1 bg-gray-800 rounded mx-1 ml-2'>ESC</kbd>
              close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .custom-scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        /* Hide scrollbar when not hovering */
        .custom-scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        .custom-scrollbar-thin:hover {
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        .custom-scrollbar-thin::-webkit-scrollbar-thumb {
          background: transparent;
        }

        .custom-scrollbar-thin:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  )
}
