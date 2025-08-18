import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';
import { Helmet } from 'react-helmet';

interface ProjectDetailProps {
  project: {
    slug: string;
    title: string;
    description: string;
    overview: string;
    role: string;
    stack: string[];
    architecture: string;
    screenshots: string[];
    outcomes: string[];
    githubUrl?: string;
    liveUrl?: string;
    startDate: string;
    endDate: string;
    teamSize: number;
    image: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const goBack = () => {
    window.history.back();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>{project.title} - Portfolio Project</title>
        <meta name="description" content={project.description} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${project.title} - Portfolio Project`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} - Portfolio Project`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.image} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "image": project.image,
            "author": {
              "@type": "Person",
              "name": "Your Name"
            },
            "dateCreated": project.startDate,
            "dateModified": project.endDate,
            "url": window.location.href
          })}
        </script>
      </Helmet>

      <motion.div
        className="project-detail"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="project-header" variants={itemVariants}>
          <button className="back-button" onClick={goBack}>
            <ArrowLeft size={20} />
            Back to Projects
          </button>
          
          <div className="project-title-section">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-meta">
              <div className="meta-item">
                <Calendar size={16} />
                <span>{project.startDate} - {project.endDate}</span>
              </div>
              <div className="meta-item">
                <Users size={16} />
                <span>Team of {project.teamSize}</span>
              </div>
              <div className="meta-item">
                <Target size={16} />
                <span>{project.role}</span>
              </div>
            </div>
            
            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={16} />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Content Grid */}
        <div className="project-content">
          {/* Block 1: Overview */}
          <motion.section className="project-block" variants={itemVariants}>
            <h2 className="block-title">Overview</h2>
            <div className="block-content">
              <p>{project.overview}</p>
            </div>
          </motion.section>

          {/* Block 2: Role */}
          <motion.section className="project-block" variants={itemVariants}>
            <h2 className="block-title">My Role</h2>
            <div className="block-content">
              <p>{project.role}</p>
            </div>
          </motion.section>

          {/* Block 3: Tech Stack */}
          <motion.section className="project-block" variants={itemVariants}>
            <h2 className="block-title">Tech Stack</h2>
            <div className="block-content">
              <div className="tech-stack">
                {project.stack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Block 4: Architecture Diagram */}
          <motion.section className="project-block" variants={itemVariants}>
            <h2 className="block-title">Architecture</h2>
            <div className="block-content">
              <div className="architecture-diagram">
                <img src={project.architecture} alt="Architecture Diagram" />
              </div>
            </div>
          </motion.section>

          {/* Block 5: Screenshots/GIFs */}
          <motion.section className="project-block" variants={itemVariants}>
            <h2 className="block-title">Screenshots & Demo</h2>
            <div className="block-content">
              <div className="screenshots-grid">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot-item">
                    <img src={screenshot} alt={`Screenshot ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Block 6: Outcomes */}
          <motion.section className="project-block" variants={itemVariants}>
            <h2 className="block-title">Outcomes & Results</h2>
            <div className="block-content">
              <ul className="outcomes-list">
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetail;
