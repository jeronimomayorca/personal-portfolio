import { useState, useCallback, memo } from 'react';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const projects = [
  
  {
    title: "Tu Técnico de Confianza",
    description: "Your Trusted Technician is a web platform that makes it easy for users to book services for maintaining, repairing, and upgrading their PCs. Developed with modern technologies and following best coding practices, this application is designed to provide a simple, fast, and efficient user experience.",
    image: `https://api.microlink.io/?url=https://agendatuservicio.co&screenshot=true&meta=false&embed=screenshot.url`,
    tags: ["Astro", "TypeScript", "Node.js"],
    link: "https://agendatuservicio.co",
    size: "large",
    date: "January 2025",
    client: "Personal Project",
    repo: "https://github.com/jeronimomayorca/tu-tecnico-de-confianza"
  },
  {
    title: "Enfermos por el Fútbol",
    description: "This was a university project where I built an app that simulates a single-elimination tournament. The outcome is based on each team's strength, endurance, speed, and accuracy.",
    image: "/logo_epf.png",
    tags: ["Python", "Django", "SQL", "Graphs"],
    link: "https://ecommerce-platform.com",
    size: "medium",
    date: "2023-11-05",
    client: "University Project",
    repo: "https://github.com/jeronimomayorca/EnfermosxElFutbol"
  },
  {
    title: "VeloSecure",
    description: "A collaborative task management application with real-time updates, notifications, and team boards.",
    image: `https://api.microlink.io/?url=https://task-manager-app.com&screenshot=true&meta=false&embed=screenshot.url`,
    tags: ["Vue.js", "Firebase", "Tailwind"],
    link: "https://task-manager-app.com",
    size: "small",
    date: "2023-09-20",
    client: "Productivity Tools",
    repo: "https://github.com/youruser/task-manager"
  },
  {
    title: "Kevin's Jewelry",
    description: "Website made for a wholesale jewelry in order to register by invitation new entrepreneurs or afiliates to sell their products (rings, earrings, chains, charms, bracelets, anklets, rosaries) where the users can access to a large inventory with preferencial prices for resell the products and increase their profits.",
    image: `https://api.microlink.io/?url=https://jewelry-front.vercel.app/&screenshot=true&meta=false&embed=screenshot.url`,
    tags: ["Angular", "Tailwind", "NestJS", "PostgreSQL"],
    link: "https://jewelry-front.vercel.app/",
    size: "large",
    date: "August 2024",
    client: "Kevin's Jewelry",
    repo: "https://github.com/MazorcaLlegosCorpp/jewelry-front"
  },
  {
    title: "VigIA",
    description: "Real-time weather information with interactive maps, charts, and forecast visualizations.",
    image: `https://api.microlink.io/?url=https://weather-dashboard.com&screenshot=true&meta=false&embed=screenshot.url`,
    tags: ["React", "OpenWeather API", "Chart.js"],
    link: "https://weather-dashboard.com",
    size: "medium",
    date: "2023-06-15",
    client: "Weatherly",
    repo: "https://github.com/youruser/weather-dashboard"
  },
];

const sizeClasses = {
  large: 'md:col-span-4 lg:col-span-6 row-span-2',
  medium: 'md:col-span-3 lg:col-span-4 row-span-2',
  small: 'md:col-span-3 lg:col-span-4 row-span-1',
};

const ProjectCard = memo(function ProjectCard({ project, idx, onExpand }) {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Preview";

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
        <img 
          src={imageError ? fallbackImage : project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          loading="lazy"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
        <motion.div layout className="relative p-6 flex flex-col justify-end transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-200 mb-4 line-clamp-2 text-base leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent">
                {tag}
              </span>
            ))}
          </div>
          <motion.a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-white hover:bg-accent px-4 py-2 rounded-lg transition-all duration-300 mt-2"
            onClick={e => e.stopPropagation()}
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
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
        style={{ background: 'rgba(0,0,0,0.85)' }}
        onClick={closeModal}
      >
        <motion.div
          layoutId={`card-${expanded}`}
          className="bg-secondary rounded-2xl shadow-2xl w-full max-w-4xl mx-2 sm:mx-4 md:mx-8 p-8 relative box-border"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.4 }}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-accent text-2xl font-bold">&times;</button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={project.image} alt={project.title} className="w-full rounded-xl mb-6 shadow-lg" loading="lazy" />
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-accent">{project.title}</h2>
              <div className="space-y-3 mb-6 text-gray-200">
                <div className="text-sm"><b className="text-accent">Date:</b> {project.date}</div>
                <div className="text-sm"><b className="text-accent">Client:</b> {project.client}</div>
                <div className="text-sm">
                  <b className="text-accent">Repository:</b>{' '}
                  <a 
                    href={project.repo} 
                    className="text-accent hover:text-white hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {project.repo}
                  </a>
                </div>
                <div className="text-sm">
                  <b className="text-accent">Live:</b>{' '}
                  <a 
                    href={project.link} 
                    className="text-accent hover:text-white hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </div>
              </div>
              <p className="text-base text-gray-200 leading-relaxed">{project.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <LayoutGroup>
      <div className="vento-grid grid grid-cols-1 md:grid-cols-7 lg:grid-cols-10 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[240px] w-full box-border">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} onExpand={onExpand} />
        ))}
      </div>
      {project && typeof window !== 'undefined' && createPortal(modal, document.body)}
    </LayoutGroup>
  );
}