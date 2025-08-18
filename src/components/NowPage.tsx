import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, Target, BookOpen, Code, Users } from 'lucide-react';

const NowPage: React.FC = () => {
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

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>What I'm Working On Now - Portfolio</title>
        <meta name="description" content="Current projects, learning goals, and what I'm focused on this month" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="What I'm Working On Now - Portfolio" />
        <meta property="og:description" content="Current projects, learning goals, and what I'm focused on this month" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="What I'm Working On Now - Portfolio" />
        <meta name="twitter:description" content="Current projects, learning goals, and what I'm focused on this month" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What I'm Working On Now",
            "description": "Current projects, learning goals, and what I'm focused on this month",
            "author": {
              "@type": "Person",
              "name": "Your Name"
            },
            "datePublished": currentDate,
            "dateModified": currentDate,
            "url": window.location.href
          })}
        </script>
      </Helmet>

      <motion.div
        className="now-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="now-container">
          {/* Header */}
          <motion.div className="now-header" variants={itemVariants}>
            <h1 className="now-title">What I'm Working On Now</h1>
            <p className="now-subtitle">
              Last updated: {currentDate}
            </p>
            <p className="now-description">
              This page shows what I'm currently focused on, learning, and building. 
              Inspired by the <a href="https://nownownow.com/" target="_blank" rel="noopener noreferrer">/now movement</a>.
            </p>
          </motion.div>

          {/* Current Projects */}
          <motion.section className="now-section" variants={itemVariants}>
            <h2 className="section-title">
              <Code size={24} />
              Current Projects
            </h2>
            <div className="now-grid">
              <div className="now-card">
                <h3>Portfolio Website Enhancement</h3>
                <p>Adding advanced features like project detail pages, Calendly integration, and performance optimizations.</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
                <span className="progress-text">85% Complete</span>
              </div>
              
              <div className="now-card">
                <h3>E-commerce Platform</h3>
                <p>Building a full-stack e-commerce solution with React, Node.js, and Stripe integration.</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '60%' }}></div>
                </div>
                <span className="progress-text">60% Complete</span>
              </div>
              
              <div className="now-card">
                <h3>AI Chat Application</h3>
                <p>Developing a conversational AI app using OpenAI's API and real-time messaging.</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '40%' }}></div>
                </div>
                <span className="progress-text">40% Complete</span>
              </div>
            </div>
          </motion.section>

          {/* Learning Goals */}
          <motion.section className="now-section" variants={itemVariants}>
            <h2 className="section-title">
              <BookOpen size={24} />
              Learning Goals
            </h2>
            <div className="now-grid">
              <div className="now-card">
                <h3>Advanced TypeScript</h3>
                <p>Deep diving into advanced TypeScript patterns, generics, and type safety best practices.</p>
                <div className="learning-status">In Progress</div>
              </div>
              
              <div className="now-card">
                <h3>Three.js & 3D Web</h3>
                <p>Exploring 3D graphics and animations for web applications using Three.js.</p>
                <div className="learning-status">Starting Soon</div>
              </div>
              
              <div className="now-card">
                <h3>System Design</h3>
                <p>Studying scalable architecture patterns and distributed systems design.</p>
                <div className="learning-status">Planning</div>
              </div>
            </div>
          </motion.section>

          {/* Personal Goals */}
          <motion.section className="now-section" variants={itemVariants}>
            <h2 className="section-title">
              <Target size={24} />
              Personal Goals
            </h2>
            <div className="now-grid">
              <div className="now-card">
                <h3>Open Source Contributions</h3>
                <p>Contributing to popular open-source projects and building my own libraries.</p>
                <div className="goal-metric">3 contributions this month</div>
              </div>
              
              <div className="now-card">
                <h3>Technical Writing</h3>
                <p>Writing blog posts about web development, React, and modern JavaScript.</p>
                <div className="goal-metric">2 articles per month</div>
              </div>
              
              <div className="now-card">
                <h3>Community Engagement</h3>
                <p>Participating in tech meetups, conferences, and mentoring junior developers.</p>
                <div className="goal-metric">1 event per month</div>
              </div>
            </div>
          </motion.section>

          {/* Current Focus */}
          <motion.section className="now-section" variants={itemVariants}>
            <h2 className="section-title">
              <Clock size={24} />
              Current Focus
            </h2>
            <div className="focus-content">
              <p>
                This month, I'm primarily focused on <strong>performance optimization</strong> and 
                <strong> user experience improvements</strong>. I'm working on implementing lazy loading, 
                optimizing bundle sizes, and enhancing the overall user journey.
              </p>
              <p>
                I'm also dedicating time to <strong>learning new technologies</strong> that will help me 
                build better, more scalable applications. The goal is to stay current with industry trends 
                while deepening my expertise in core technologies.
              </p>
            </div>
          </motion.section>

          {/* Availability */}
          <motion.section className="now-section" variants={itemVariants}>
            <h2 className="section-title">
              <Calendar size={24} />
              Availability
            </h2>
            <div className="availability-content">
              <p>
                I'm currently <strong>available for new projects</strong> and collaborations. 
                I have capacity for:
              </p>
              <ul>
                <li>Full-stack web development projects</li>
                <li>React/TypeScript consulting</li>
                <li>Code reviews and technical mentoring</li>
                <li>Performance optimization work</li>
              </ul>
              <p>
                If you'd like to discuss a project or collaboration, 
                <a href="#contact" className="contact-link"> let's connect</a>!
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default NowPage;
