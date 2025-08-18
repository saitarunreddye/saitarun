import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Code, Palette, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'design', label: 'UI/UX Design', icon: Palette },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "🛒",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
      features: ["User Authentication", "Product Management", "Shopping Cart", "Payment Processing", "Admin Dashboard"],
      year: "2023"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      category: "web",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Express"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/username/task-app",
      features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "File Sharing", "Progress Tracking"],
      year: "2023"
    },
    {
      id: 3,
      title: "Fitness Tracking Mobile App",
      description: "A cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "💪",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Chart.js"],
      liveUrl: "https://fitness-app-demo.com",
      githubUrl: "https://github.com/username/fitness-app",
      features: ["Workout Tracking", "Progress Monitoring", "Social Features", "Nutrition Tracking", "Goal Setting"],
      year: "2022"
    },
    {
      id: 4,
      title: "Portfolio Website Design",
      description: "A modern portfolio website design with glassmorphism effects, smooth animations, and responsive design principles.",
      image: "🎨",
      category: "design",
      technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "GSAP"],
      liveUrl: "https://portfolio-design-demo.com",
      githubUrl: "https://github.com/username/portfolio-design",
      features: ["Glassmorphism Design", "Smooth Animations", "Responsive Layout", "Interactive Elements", "Performance Optimized"],
      year: "2022"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A weather dashboard application with real-time weather data, location-based forecasts, and interactive weather maps.",
      image: "🌤️",
      category: "web",
      technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet", "Tailwind CSS"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/username/weather-app",
      features: ["Real-time Weather", "Location Services", "Interactive Maps", "Weather Alerts", "Historical Data"],
      year: "2022"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard for scheduling posts, analyzing performance, and managing multiple accounts.",
      image: "📊",
      category: "web",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Social APIs", "Chart.js"],
      liveUrl: "https://social-dashboard-demo.com",
      githubUrl: "https://github.com/username/social-dashboard",
      features: ["Post Scheduling", "Analytics Dashboard", "Multi-platform Support", "Content Calendar", "Performance Reports"],
      year: "2021"
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <motion.div
      ref={ref}
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my best work and innovative solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              {filter.icon && <filter.icon size={18} />}
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  <div className="project-overlay">
                    <div className="project-actions">
                      <motion.button
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                      <motion.button
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="project-features">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal glass"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <>
                      <div className="modal-header">
                        <h3>{project.title}</h3>
                        <button
                          className="close-btn"
                          onClick={() => setSelectedProject(null)}
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="modal-content">
                        <div className="modal-image">
                          <span className="project-emoji large">{project.image}</span>
                        </div>
                        
                        <div className="modal-details">
                          <p className="modal-description">{project.description}</p>
                          
                          <div className="modal-section">
                            <h4>Technologies Used</h4>
                            <div className="tech-list">
                              {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="modal-section">
                            <h4>Key Features</h4>
                            <ul className="features-list">
                              {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="modal-actions">
                            <motion.button
                              className="btn btn-primary"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => window.open(project.liveUrl, '_blank')}
                            >
                              <ExternalLink size={18} />
                              View Live
                            </motion.button>
                            <motion.button
                              className="btn btn-secondary"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github size={18} />
                              View Code
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

</motion.div>
  );
};

export default Projects;
