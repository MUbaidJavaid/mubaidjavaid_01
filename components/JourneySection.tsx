import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

interface JourneyItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

const journeyData: JourneyItem[] = [
  {
    year: '2024 - Present',
    title: 'MERN Stack Developer',
    organization: 'Fiesta Consultants',
    description: 'Built 50+ reusable React components and 20+ Node.js modules. Improved frontend performance by 25% through code optimization.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'Full Stack Projects',
    organization: 'Freelance',
    description: 'Developed complete web applications including Yalla Dubai Travel with JWT authentication and Quran-Translation with high-performance API integration.',
    type: 'work',
  },
  {
    year: '2020 - 2024',
    title: 'BS Computer Science',
    organization: 'University of Education Lahore',
    description: 'Focused on software engineering, web development, and database management systems.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Mini Tools Factory',
    organization: 'Personal Project',
    description: 'Refactored codebase improving stability by 20%. Demonstrated advanced debugging and optimization skills.',
    type: 'achievement',
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
};

export default function JourneySection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          My Journey
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional growth and key milestones in software development.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-electric via-emerald-glow to-cyan-electric opacity-30" />

        {journeyData.map((item, index) => {
          const Icon = iconMap[item.type];
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-primary text-sm font-mono mb-2">
                    <Calendar size={14} />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-emerald-glow mb-3">{item.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${item.type === 'work' ? 'bg-cyan-electric/20 text-cyan-electric border-cyan-electric' :
                      item.type === 'education' ? 'bg-emerald-glow/20 text-emerald-glow border-emerald-glow' :
                      'bg-amber-warm/20 text-amber-warm border-amber-warm'
                    } border-2 backdrop-blur-sm`}
                >
                  <Icon size={18} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
