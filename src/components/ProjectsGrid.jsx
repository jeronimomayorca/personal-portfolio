import { useState, useCallback, memo } from 'react';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const projects = [
  {
    title: "AI Chat Assistant",
    description: "An intelligent chat assistant powered by advanced language models. This project leverages OpenAI's GPT models to provide contextual, real-time chat experiences.",
    image: "/projects/ai-chat.jpg",
    tags: ["AI", "React", "Node.js"],
    link: "#",
    size: "large",
    date: "2024-01-10",
    client: "OpenAI Labs",
    repo: "https://github.com/youruser/ai-chat-assistant"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory, payment integration, and user analytics.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    size: "medium",
    date: "2023-11-05",
    client: "ShopNow Inc.",
    repo: "https://github.com/youruser/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, notifications, and team boards.",
    image: "/projects/task-manager.jpg",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    link: "#",
    size: "small",
    date: "2023-09-20",
    client: "Productivity Tools",
    repo: "https://github.com/youruser/task-manager"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Astro and Tailwind CSS, featuring smooth animations and responsive design.",
    image: "/projects/portfolio.jpg",
    tags: ["Astro", "Tailwind", "TypeScript"],
    link: "#",
    size: "medium",
    date: "2023-08-01",
    client: "Personal",
    repo: "https://github.com/youruser/portfolio"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps, charts, and forecast visualizations.",
    image: "/projects/weather.jpg",
    tags: ["React", "OpenWeather API", "Chart.js"],
    link: "#",
    size: "small",
    date: "2023-06-15",
    client: "Weatherly",
    repo: "https://github.com/youruser/weather-dashboard"
  },
  {
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout logging, progress charts, and social features.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "GraphQL", "MongoDB"],
    link: "#",
    size: "large",
    date: "2023-04-10",
    client: "FitLife",
    repo: "https://github.com/youruser/fitness-tracker"
  }
];

const sizeClasses = {
  large: 'md:col-span-4 lg:col-span-6 row-span-2',
  medium: 'md:col-span-3 lg:col-span-4 row-span-2',
  small: 'md:col-span-3 lg:col-span-4 row-span-1',
};

const ProjectCard = memo(function ProjectCard({ project, idx, onExpand }) {
  return (
    <motion.article
      layoutId={`card-${idx}`}
      className={`group relative bg-secondary rounded-2xl overflow-hidden shadow-md cursor-pointer ${sizeClasses[project.size]}`}
      onClick={() => onExpand(idx)}
      initial={false}
      whileHover={{ scale: 1.03 }}
      transition={{ layout: { duration: 0.4, type: 'spring' }, scale: { duration: 0.2 } }}
    >
      <motion.div layout className="h-full bg-accent/20 relative flex flex-col justify-end">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div layout className="relative p-6 flex flex-col justify-end transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/50 rounded-full text-sm text-accent">
                {tag}
              </span>
            ))}
          </div>
          <motion.a 
            href={project.link}
            className="inline-flex items-center text-accent hover:underline mt-2"
            onClick={e => e.stopPropagation()}
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.article>
  );
});

export default function ProjectsGrid() {
  const [expanded, setExpanded] = useState(null);

  const onExpand = useCallback((idx) => setExpanded(idx), []);
  const closeModal = useCallback(() => setExpanded(null), []);
  const project = expanded !== null ? projects[expanded] : null;

  // Modal JSX
  const modal = project && (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ background: 'rgba(0,0,0,0.7)' }}
        onClick={closeModal}
      >
        <motion.div
          layoutId={`card-${expanded}`}
          className="bg-secondary rounded-2xl shadow-2xl w-full max-w-lg mx-2 sm:mx-4 md:mx-8 p-6 relative box-border"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.4 }}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-accent text-2xl font-bold">&times;</button>
          <img src={project.image} alt={project.title} className="w-full rounded-xl mb-4" loading="lazy" />
          <h2 className="text-2xl font-bold mb-2 text-accent">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/50 rounded-full text-sm text-accent">
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-2 text-sm text-gray-300"><b>Date:</b> {project.date}</div>
          <div className="mb-2 text-sm text-gray-300"><b>Client:</b> {project.client}</div>
          <div className="mb-2 text-sm text-gray-300"><b>Repository:</b> <a href={project.repo} className="text-accent underline" target="_blank" rel="noopener noreferrer">{project.repo}</a></div>
          <div className="mb-2 text-sm text-gray-300"><b>Live:</b> <a href={project.link} className="text-accent underline" target="_blank" rel="noopener noreferrer">{project.link}</a></div>
          <p className="mt-2 text-base text-gray-200">{project.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <LayoutGroup>
      <div className="vento-grid grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[240px] w-full box-border">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            layoutId={`card-${idx}`}
            className={`group relative bg-secondary rounded-2xl overflow-hidden shadow-md cursor-pointer ${sizeClasses[project.size]}`}
            onClick={() => setExpanded(idx)}
            initial={false}
            whileHover={{ scale: 1.03 }}
            transition={{ layout: { duration: 0.4, type: 'spring' }, scale: { duration: 0.2 } }}
          >
            <motion.div layout className="h-full bg-accent/20 relative flex flex-col justify-end">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div layout className="relative p-6 flex flex-col justify-end transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/50 rounded-full text-sm text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href={project.link}
                  className="inline-flex items-center text-accent hover:underline mt-2"
                  onClick={e => e.stopPropagation()}
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.article>
        ))}
      </div>
      {project && typeof window !== 'undefined' && createPortal(modal, document.body)}
    </LayoutGroup>
  );
}