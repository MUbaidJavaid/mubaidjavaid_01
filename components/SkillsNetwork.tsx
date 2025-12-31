'use client'

import * as d3 from 'd3'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools'

interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: number
  years: number
  connections: string[]
}

// Futuristic color palette with glowing effects
const skillColors: Record<
  string,
  { primary: string; glow: string; gradient: string }
> = {
  React: {
    primary: '#61DAFB',
    glow: 'rgba(97, 218, 251, 0.8)',
    gradient: 'linear-gradient(135deg, #61DAFB 0%, #21A1F1 100%)'
  },
  'Next.js': {
    primary: '#000000',
    glow: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(135deg, #000000 0%, #666666 100%)'
  },
  JavaScript: {
    primary: '#F7DF1E',
    glow: 'rgba(247, 223, 30, 0.8)',
    gradient: 'linear-gradient(135deg, #F7DF1E 0%, #D4BB0C 100%)'
  },
  TypeScript: {
    primary: '#3178C6',
    glow: 'rgba(49, 120, 198, 0.8)',
    gradient: 'linear-gradient(135deg, #3178C6 0%, #235A97 100%)'
  },
  'ShadCN UI': {
    primary: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.8)',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  },
  'Material UI': {
    primary: '#0081CB',
    glow: 'rgba(0, 129, 203, 0.8)',
    gradient: 'linear-gradient(135deg, #0081CB 0%, #0066A6 100%)'
  },
  'React Query & tanstack': {
    primary: '#FF4154',
    glow: 'rgba(255, 65, 84, 0.8)',
    gradient: 'linear-gradient(135deg, #FF4154 0%, #E62E42 100%)'
  },
  'React bites': {
    primary: '#FF9F1C',
    glow: 'rgba(255, 159, 28, 0.8)',
    gradient: 'linear-gradient(135deg, #FF9F1C 0%, #E68A00 100%)'
  },
  'React 3 fiber': {
    primary: '#61DAFB',
    glow: 'rgba(97, 218, 251, 0.8)',
    gradient: 'linear-gradient(135deg, #61DAFB 0%, #21A1F1 100%)'
  },
  'three.js': {
    primary: '#000000',
    glow: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)'
  },
  'Tailwind CSS': {
    primary: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.8)',
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)'
  },
  'CSS Modules': {
    primary: '#264de4',
    glow: 'rgba(38, 77, 228, 0.8)',
    gradient: 'linear-gradient(135deg, #264de4 0%, #1E3BB8 100%)'
  },
  'Framer Motion': {
    primary: '#0055FF',
    glow: 'rgba(0, 85, 255, 0.8)',
    gradient: 'linear-gradient(135deg, #0055FF 0%, #0044CC 100%)'
  },
  HTML: {
    primary: '#E34F26',
    glow: 'rgba(227, 79, 38, 0.8)',
    gradient: 'linear-gradient(135deg, #E34F26 0%, #C03A1E 100%)'
  },
  // Backend
  'Node.js': {
    primary: '#339933',
    glow: 'rgba(51, 153, 51, 0.8)',
    gradient: 'linear-gradient(135deg, #339933 0%, #267326 100%)'
  },
  Express: {
    primary: '#000000',
    glow: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)'
  },
  'REST APIs': {
    primary: '#10b981',
    glow: 'rgba(16, 185, 129, 0.8)',
    gradient: 'linear-gradient(135deg, #10b981 0%, #0DA271 100%)'
  },
  JWT: {
    primary: '#000000',
    glow: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)'
  },
  MongoDB: {
    primary: '#47A248',
    glow: 'rgba(71, 162, 72, 0.8)',
    gradient: 'linear-gradient(135deg, #47A248 0%, #3A8C3A 100%)'
  },
  PostgreSQL: {
    primary: '#336791',
    glow: 'rgba(51, 103, 145, 0.8)',
    gradient: 'linear-gradient(135deg, #336791 0%, #29547A 100%)'
  },
  SQL: {
    primary: '#f29111',
    glow: 'rgba(242, 145, 17, 0.8)',
    gradient: 'linear-gradient(135deg, #f29111 0%, #D47A00 100%)'
  },
  // Tools
  Git: {
    primary: '#F05032',
    glow: 'rgba(240, 80, 50, 0.8)',
    gradient: 'linear-gradient(135deg, #F05032 0%, #D63A1E 100%)'
  },
  Docker: {
    primary: '#2496ED',
    glow: 'rgba(36, 150, 237, 0.8)',
    gradient: 'linear-gradient(135deg, #2496ED 0%, #1B7DCC 100%)'
  },
  Vercel: {
    primary: '#000000',
    glow: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)'
  },
  Postman: {
    primary: '#FF6C37',
    glow: 'rgba(255, 108, 55, 0.8)',
    gradient: 'linear-gradient(135deg, #FF6C37 0%, #E65522 100%)'
  },
  'VS Code': {
    primary: '#007ACC',
    glow: 'rgba(0, 122, 204, 0.8)',
    gradient: 'linear-gradient(135deg, #007ACC 0%, #0066B3 100%)'
  },
  Github: {
    primary: '#181717',
    glow: 'rgba(24, 23, 23, 0.8)',
    gradient: 'linear-gradient(135deg, #181717 0%, #000000 100%)'
  }
}

const skillsData: Skill[] = [
  // Frontend
  {
    id: 'React',
    name: 'React',
    category: 'frontend',
    level: 95,
    years: 4,
    connections: [
      'Next.js',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'React 3 fiber',
      'React Redux-toolkit'
    ]
  },
  {
    id: 'Next.js',
    name: 'Next.js',
    category: 'frontend',
    level: 95,
    years: 3,
    connections: ['React', 'TypeScript', 'Vercel']
  },
  {
    id: 'JavaScript',
    name: 'JavaScript',
    category: 'frontend',
    level: 95,
    years: 5,
    connections: ['React', 'TypeScript', 'HTML']
  },
  {
    id: 'TypeScript',
    name: 'TypeScript',
    category: 'frontend',
    level: 90,
    years: 3,
    connections: ['React', 'Next.js', 'Node.js']
  },
  {
    id: 'Tailwind CSS',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 95,
    years: 3,
    connections: ['React', 'Next.js', 'ShadCN UI']
  },
  {
    id: 'Framer Motion',
    name: 'Framer Motion',
    category: 'frontend',
    level: 85,
    years: 2,
    connections: ['React', 'Next.js']
  },
  {
    id: 'ShadCN UI',
    name: 'ShadCN UI',
    category: 'frontend',
    level: 90,
    years: 2,
    connections: ['Tailwind CSS', 'React', 'Next.js']
  },
  {
    id: 'Material UI',
    name: 'Material UI',
    category: 'frontend',
    level: 85,
    years: 2,
    connections: ['React']
  },
  {
    id: 'React Query & tanstack',
    name: 'React Query & tanstack',
    category: 'frontend',
    level: 85,
    years: 2,
    connections: ['React', 'REST APIs']
  },
  {
    id: 'React bites',
    name: 'React bites',
    category: 'frontend',
    level: 80,
    years: 1,
    connections: ['React']
  },
  {
    id: 'React Redux-toolkit',
    name: 'React Redux-toolkit',
    category: 'frontend',
    level: 80,
    years: 1,
    connections: ['React']
  },
  {
    id: 'React 3 fiber',
    name: 'React 3 fiber',
    category: 'frontend',
    level: 80,
    years: 2,
    connections: ['React', 'three.js']
  },
  {
    id: 'three.js',
    name: 'three.js',
    category: 'frontend',
    level: 80,
    years: 2,
    connections: ['React 3 fiber']
  },
  {
    id: 'CSS Modules',
    name: 'CSS Modules',
    category: 'frontend',
    level: 85,
    years: 3,
    connections: ['React', 'HTML']
  },
  {
    id: 'HTML',
    name: 'HTML',
    category: 'frontend',
    level: 95,
    years: 5,
    connections: ['CSS Modules', 'JavaScript']
  },

  // Backend
  {
    id: 'Node.js',
    name: 'Node.js',
    category: 'backend',
    level: 90,
    years: 4,
    connections: ['Express', 'TypeScript', 'MongoDB', 'Docker']
  },
  {
    id: 'Express',
    name: 'Express',
    category: 'backend',
    level: 90,
    years: 4,
    connections: ['Node.js', 'REST APIs', 'JWT']
  },
  {
    id: 'REST APIs',
    name: 'REST APIs',
    category: 'backend',
    level: 95,
    years: 4,
    connections: ['Express', 'Node.js', 'Postman']
  },
  {
    id: 'JWT',
    name: 'JWT',
    category: 'backend',
    level: 90,
    years: 3,
    connections: ['Express', 'Node.js']
  },

  // Database
  {
    id: 'MongoDB',
    name: 'MongoDB',
    category: 'database',
    level: 90,
    years: 4,
    connections: ['Node.js', 'Express', 'PostgreSQL']
  },
  {
    id: 'PostgreSQL',
    name: 'PostgreSQL',
    category: 'database',
    level: 85,
    years: 3,
    connections: ['MongoDB', 'Node.js', 'SQL']
  },
  {
    id: 'SQL',
    name: 'SQL',
    category: 'database',
    level: 85,
    years: 3,
    connections: ['PostgreSQL']
  },

  // Tools
  {
    id: 'Git',
    name: 'Git',
    category: 'tools',
    level: 95,
    years: 5,
    connections: ['Github', 'Docker', 'VS Code']
  },
  {
    id: 'Docker',
    name: 'Docker',
    category: 'tools',
    level: 80,
    years: 2,
    connections: ['Git', 'Node.js']
  },
  {
    id: 'Vercel',
    name: 'Vercel',
    category: 'tools',
    level: 85,
    years: 3,
    connections: ['Next.js', 'Github']
  },
  {
    id: 'Postman',
    name: 'Postman',
    category: 'tools',
    level: 90,
    years: 4,
    connections: ['REST APIs']
  },
  {
    id: 'VS Code',
    name: 'VS Code',
    category: 'tools',
    level: 95,
    years: 5,
    connections: ['Git', 'TypeScript']
  },
  {
    id: 'Github',
    name: 'Github',
    category: 'tools',
    level: 95,
    years: 5,
    connections: ['Git', 'Vercel']
  }
]

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  color: string
}

const categoryColors = {
  frontend: {
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6, 182, 212, 0.3)',
    border: 'border-cyan-500/30'
  },
  backend: {
    gradient: 'from-emerald-500 to-green-600',
    glow: 'rgba(16, 185, 129, 0.3)',
    border: 'border-emerald-500/30'
  },
  database: {
    gradient: 'from-purple-500 to-violet-600',
    glow: 'rgba(139, 92, 246, 0.3)',
    border: 'border-purple-500/30'
  },
  tools: {
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245, 158, 11, 0.3)',
    border: 'border-amber-500/30'
  }
}

export default function AtomicSkillsNetwork () {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [nodePositions, setNodePositions] = useState<
    Record<string, { x: number; y: number }>
  >({})
  const [selectedCategory, setSelectedCategory] = useState<
    SkillCategory | 'all'
  >('all')

  // Setup container size
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Create animated particles with colors
  useEffect(() => {
    const colors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444']
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(newParticles)
  }, [])

  // D3 Force Layout with improved physics
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    const links = skillsData.flatMap(s =>
      s.connections.map(c => ({
        source: s.id,
        target: c,
        value: 1
      }))
    )

    const simulation = d3
      .forceSimulation(skillsData as any)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(150)
          .strength(0.5)
      )
      .force(
        'charge',
        d3.forceManyBody().strength(-400).distanceMin(50).distanceMax(300)
      )
      .force(
        'center',
        d3.forceCenter(dimensions.width / 2, dimensions.height / 2)
      )
      .force('collision', d3.forceCollide().radius(60))
      .force('x', d3.forceX(dimensions.width / 2).strength(0.05))
      .force('y', d3.forceY(dimensions.height / 2).strength(0.05))
      .alphaDecay(0.02)
      .on('tick', () => {
        const pos: Record<string, { x: number; y: number }> = {}
        skillsData.forEach(s => {
          pos[s.id] = {
            x: Math.max(50, Math.min((s as any).x, dimensions.width - 50)),
            y: Math.max(50, Math.min((s as any).y, dimensions.height - 50))
          }
        })
        setNodePositions(pos)
      })

    return () => {
      simulation.stop()
    }
  }, [dimensions])

  const isConnected = (skillId: string) => {
    if (!hoveredSkill) return false
    if (skillId === hoveredSkill) return true
    const hovered = skillsData.find(s => s.id === hoveredSkill)
    return hovered?.connections.includes(skillId) || false
  }

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter(skill => skill.category === selectedCategory)

  return (
    <div className='relative min-h-screen py-20 px-4 overflow-hidden md:px-20'>
      {/* Animated Background Gradient */}
      <div className='absolute inset-0 ' />

      {/* Animated Grid Background */}
      {/* <div className='absolute inset-0 opacity-30'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div> */}

      {/* Floating Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className='absolute rounded-full'
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            opacity: 0.3
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(p.id) * 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header with animated title */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h2 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Tech Ecosystem
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Interactive network of interconnected skills and technologies
          </p>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gradient'>
            Technical Skills
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Comprehensive expertise across the modern web development stack.
          </p>
        </motion.div>
        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-8'
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-white/10 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/20'
                : 'bg-black/20 border-gray-700 text-gray-400 hover:border-cyan-400/50'
            }`}
          >
            All Skills
          </button>
          {Object.entries(categoryColors).map(([category, colors]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as SkillCategory)}
              className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                selectedCategory === category
                  ? `bg-white/10 ${colors.border} text-white shadow-lg shadow-${
                      category === 'frontend'
                        ? 'cyan'
                        : category === 'backend'
                        ? 'emerald'
                        : category === 'database'
                        ? 'purple'
                        : 'amber'
                    }-500/20`
                  : 'glass border-gray-700 text-gray-400 hover:border-white/30'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        {/* Main Network Container */}
        <div
          ref={containerRef}
          className='relative w-full h-[800px] rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl'
          // style={{
          //   background:
          //     'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.3) 100%)'
          // }}
        >
          {/* Animated Connections */}
          <svg className='absolute inset-0 w-full h-full pointer-events-none'>
            <defs>
              {Object.entries(skillColors).map(([name, color]) => (
                <linearGradient
                  key={name}
                  id={`gradient-${name}`}
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop
                    offset='0%'
                    stopColor={color.primary}
                    stopOpacity='0.8'
                  />
                  <stop
                    offset='100%'
                    stopColor={color.primary}
                    stopOpacity='0.2'
                  />
                </linearGradient>
              ))}
            </defs>

            {skillsData.flatMap(s =>
              s.connections.map(c => {
                const pos1 = nodePositions[s.id]
                const pos2 = nodePositions[c]
                if (!pos1 || !pos2) return null

                const active =
                  hoveredSkill &&
                  (hoveredSkill === s.id ||
                    hoveredSkill === c ||
                    isConnected(s.id) ||
                    isConnected(c))

                return (
                  <g key={`${s.id}-${c}`}>
                    {/* Main connection line with gradient */}
                    <line
                      x1={pos1.x}
                      y1={pos1.y}
                      x2={pos2.x}
                      y2={pos2.y}
                      stroke='url(#gradient-React)' // Using React gradient as fallback
                      strokeWidth={active ? 3 : 1.5}
                      strokeOpacity={active ? 0.6 : 0.2}
                      className='transition-all duration-300'
                    />

                    {/* Glowing effect for active connections */}
                    {active && (
                      <motion.line
                        x1={pos1.x}
                        y1={pos1.y}
                        x2={pos2.x}
                        y2={pos2.y}
                        stroke='white'
                        strokeWidth='2'
                        strokeOpacity='0.3'
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                      />
                    )}
                  </g>
                )
              })
            )}
          </svg>

          {/* Skill Nodes */}
          {Object.entries(nodePositions).map(([id, pos]) => {
            const skill = skillsData.find(s => s.id === id)
            if (!skill) return null

            const isVisible =
              selectedCategory === 'all' || skill.category === selectedCategory
            if (!isVisible) return null

            const active = hoveredSkill === id
            const color = skillColors[skill.name] || skillColors.React
            const categoryColor = categoryColors[skill.category]
            const nodeSize = 30 + (skill.level / 100) * 40

            return (
              <motion.div
                key={id}
                className='absolute cursor-pointer group'
                style={{
                  left: pos.x,
                  top: pos.y,
                  width: nodeSize,
                  height: nodeSize,
                  marginLeft: -nodeSize / 2,
                  marginTop: -nodeSize / 2,
                  zIndex: active ? 50 : 10
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: active ? 1.2 : 1,
                  opacity: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.5 },
                  y: {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
                onMouseEnter={() => setHoveredSkill(id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Outer Glow Ring */}
                <motion.div
                  className='absolute inset-0 rounded-full'
                  style={{
                    background: `conic-gradient(from 0deg, ${color.primary}, ${categoryColor.glow}, ${color.primary})`,
                    filter: 'blur(15px)',
                    opacity: active ? 0.6 : 0.3
                  }}
                  animate={{ rotate: active ? 360 : 0 }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 0.3 }
                  }}
                />

                {/* Main Node */}
                <div
                  className='relative w-full h-full rounded-full flex items-center justify-center backdrop-blur-md border-2'
                  style={{
                    background: color.gradient,
                    borderColor: active ? 'white' : color.primary,
                    boxShadow: active
                      ? `0 0 40px ${color.glow}, inset 0 0 20px rgba(255,255,255,0.3)`
                      : `0 0 20px ${color.glow}, inset 0 0 10px rgba(0,0,0,0.3)`
                  }}
                >
                  <span className='text-xs font-bold text-white text-center px-1 drop-shadow-lg'>
                    {skill.name}
                  </span>

                  {/* Skill Level Indicator */}
                  <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2'>
                    <div className='h-1 w-16 bg-gray-800 rounded-full overflow-hidden'>
                      <motion.div
                        className='h-full rounded-full'
                        style={{ background: color.gradient }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Tooltip */}
                {active && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className='absolute left-1/2 top-full mt-4 -translate-x-1/2 min-w-[200px] p-4 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl z-50'
                    style={{
                      background: 'rgba(10, 10, 20, 0.8)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className='text-center space-y-3'>
                      <h3 className='text-lg font-bold text-white'>
                        {skill.name}
                      </h3>

                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-400'>
                          Proficiency
                        </span>
                        <span
                          className='font-semibold'
                          style={{ color: color.primary }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-400'>
                          Experience
                        </span>
                        <span className='font-semibold text-white'>
                          {skill.years} year{skill.years !== 1 ? 's' : ''}
                        </span>
                      </div>

                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-400'>Category</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor.gradient} text-white`}
                        >
                          {skill.category}
                        </span>
                      </div>

                      {skill.connections.length > 0 && (
                        <div className='pt-3 border-t border-white/10'>
                          <p className='text-sm text-gray-400 mb-2'>
                            Connections
                          </p>
                          <div className='flex flex-wrap gap-1 justify-center'>
                            {skill.connections.map(connId => {
                              const connSkill = skillsData.find(
                                s => s.id === connId
                              )
                              if (!connSkill) return null
                              const connColor =
                                skillColors[connSkill.name]?.primary || '#fff'
                              return (
                                <span
                                  key={connId}
                                  className='px-2 py-1 text-xs rounded-full bg-white/5 hover:bg-white/10 transition-colors'
                                  style={{
                                    borderLeft: `3px solid ${connColor}`
                                  }}
                                >
                                  {connSkill.name}
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tooltip Arrow */}
                    <div className='absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-inherit border-t border-l border-white/10 rotate-45' />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'
        >
          {Object.entries(categoryColors).map(([category, colors]) => (
            <div
              key={category}
              className='p-4 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300 group'
              style={{
                // background: 'rgba(255, 255, 255, 0.05)',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedCategory(category as SkillCategory)}
              onMouseEnter={() => setHoveredSkill(null)}
            >
              <div className='flex items-center gap-3'>
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 0 20px ${colors.glow}` }}
                >
                  <div className='w-4 h-4 rounded-full bg-white/20' />
                </div>
                <div>
                  <h3 className='font-semibold text-white capitalize'>
                    {category}
                  </h3>
                  <p className='text-sm text-gray-400'>
                    {skillsData.filter(s => s.category === category).length}{' '}
                    skills
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='mt-12 pt-8 border-t border-white/10'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-400'>
                {skillsData.length}
              </div>
              <div className='text-sm text-gray-400'>Total Skills</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-emerald-400'>
                {Math.round(
                  skillsData.reduce((acc, s) => acc + s.level, 0) /
                    skillsData.length
                )}
                %
              </div>
              <div className='text-sm text-gray-400'>Avg Proficiency</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-purple-400'>
                {skillsData.reduce((acc, s) => acc + s.connections.length, 0)}
              </div>
              <div className='text-sm text-gray-400'>Total Connections</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-amber-400'>
                {Math.round(
                  (skillsData.reduce((acc, s) => acc + s.years, 0) /
                    skillsData.length) *
                    10
                ) / 10}
              </div>
              <div className='text-sm text-gray-400'>Avg Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Corner Decorations */}
      <div className='absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl' />
      <div className='absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl' />
      <div className='absolute top-1/2 left-20 w-24 h-24 rounded-full bg-emerald-500/10 blur-3xl' />
    </div>
  )
}
