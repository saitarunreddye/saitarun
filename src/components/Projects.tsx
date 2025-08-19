import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Palette, Smartphone } from 'lucide-react';

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
      title: "CloudOps Monitor – Real-Time Cloud Infrastructure Dashboard",
      description: "Unified dashboard for monitoring AWS resources with real‑time metrics and alerts; reduced cloud costs by ~20% via optimization insights. Built microservices to pull AWS usage data and stream updates in real time with Slack/Email alerts when thresholds exceeded.",
      image: "☁️",
      category: "web",
      technologies: ["React", "Flask/FastAPI", "AWS CloudWatch", "Docker", "Prometheus", "Grafana"],
      liveUrl: "https://example.com/cloudops-monitor",
      githubUrl: "https://github.com/saitarunreddye",
      features: ["Real-time Metrics", "Cost Insights", "Slack/Email Alerts", "Service Health"],
      year: "2024"
    },
    {
      id: 2,
      title: "Eventify – AI-Powered Event Recommendation Platform",
      description: "Personalized event recommendation app using ML-driven profiles and collaborative filtering. User signup → recommends local events via collaborative filtering with automated ticket reminders + calendar sync with Google API.",
      image: "🎟️",
      category: "web",
      technologies: ["React", "FastAPI", "PostgreSQL", "scikit-learn", "Docker", "AWS S3"],
      liveUrl: "https://example.com/eventify",
      githubUrl: "https://github.com/saitarunreddye",
      features: ["Recommendations", "Reminders & Calendar Sync", "Analytics Dashboards"],
      year: "2024"
    },
    {
      id: 3,
      title: "DevLinker – Automated Resume → Job Matcher",
      description: "AI tool that scrapes job boards and ranks matches with ATS-friendly suggestions. Scrapes job descriptions from Indeed/LinkedIn APIs with embedding-based matching using LLM/semantic search.",
      image: "🤖",
      category: "web",
      technologies: ["Python", "FastAPI", "React", "AWS Lambda", "Pinecone"],
      liveUrl: "https://example.com/devlinker",
      githubUrl: "https://github.com/saitarunreddye",
      features: ["Semantic Search", "Resume Tips", "Job Scraping"],
      year: "2025"
    },
    {
      id: 4,
      title: "DataVision – ETL + Analytics for Business Insights",
      description: "End‑to‑end pipeline for ingesting raw data → clean → visualize with BI dashboards. Automated ingestion + transformation of multi-GB datasets with improved query performance by 60% using caching + indexing.",
      image: "📈",
      category: "web",
      technologies: ["PySpark", "Airflow", "PostgreSQL", "Flask", "Plotly"],
      liveUrl: "https://example.com/datavision",
      githubUrl: "https://github.com/saitarunreddye",
      features: ["Automated Ingestion", "Transformations", "KPI Dashboards"],
      year: "2023"
    },
    {
      id: 5,
      title: "SecureAuth – Passwordless Authentication with Biometrics",
      description: "Authentication platform supporting facial recognition and OTP-based login with JWT + RBAC. Passwordless login using face + OTP fallback with JWT tokens with refresh + role-based access control.",
      image: "🔐",
      category: "web",
      technologies: ["React", "FastAPI", "AWS Rekognition", "Twilio", "Docker"],
      liveUrl: "https://example.com/secureauth",
      githubUrl: "https://github.com/saitarunreddye",
      features: ["Face Login", "OTP Fallback", "Role-based Access"],
      year: "2023"
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

                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul className="features-list">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag more">+{project.technologies.length - 4}</span>
                      )}
                    </div>
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
