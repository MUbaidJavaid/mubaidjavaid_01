import { motion } from 'framer-motion'
import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react'
import { Card } from './ui/card'
const stats = [
  { icon: <Code2 size={32} />, value: '50+', label: 'Projects Completed' },
  { icon: <Briefcase size={32} />, value: '3+', label: 'Years Experience' },
  { icon: <Award size={32} />, value: '10+', label: 'Certifications' },
  {
    icon: <GraduationCap size={32} />,
    value: '100%',
    label: 'Client Satisfaction'
  }
]

export default function AboutSection () {
  return (
    <div className='container mx-auto px-4 py-20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gradient'>
          About Me
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Passionate developer dedicated to creating exceptional web
          experiences.
        </p>
      </motion.div>

      <div className='max-w-5xl mx-auto'>
        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className='p-6 text-center hover:shadow-xl transition-shadow'>
                <div className='text-primary mb-3 flex justify-center'>
                  {stat.icon}
                </div>
                <div className='text-3xl font-bold mb-1 text-gradient'>
                  {stat.value}
                </div>
                <div className='text-sm text-muted-foreground'>
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='glass rounded-2xl p-8 md:p-12'
        >
          <div className='space-y-6 text-lg leading-relaxed'>
            <p>
              Hi! I'm a{' '}
              <span className='text-primary font-semibold'>
                Full Stack Developer
              </span>{' '}
              specializing in the MERN stack. I transform ideas into elegant,
              scalable web applications that users love.
            </p>
            <p>
              With a strong foundation in both frontend and backend
              technologies, I excel at creating seamless user experiences while
              ensuring robust server-side architecture. My expertise spans from
              responsive UI design to RESTful API development and database
              optimization.
            </p>
            <p>
              I'm passionate about writing clean, maintainable code and staying
              current with the latest web development trends. Whether it's
              building a complex e-commerce platform or a real-time
              collaboration tool, I bring dedication and technical excellence to
              every project.
            </p>
            <div className='pt-4'>
              <h3 className='text-2xl font-bold mb-4 text-gradient'>
                What I Bring
              </h3>
              <ul className='space-y-3'>
                {[
                  'Full-stack expertise with modern technologies',
                  'Strong problem-solving and debugging skills',
                  'Responsive design and mobile-first approach',
                  'Performance optimization and best practices',
                  'Clear communication and collaborative mindset'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className='flex items-start gap-3'
                  >
                    <span className='text-primary mt-1'>✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
