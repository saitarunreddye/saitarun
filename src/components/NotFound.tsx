import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Home, FolderOpen, Mail, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
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

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist. Let's get you back on track!" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Let's get you back on track!" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 - Page Not Found" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist. Let's get you back on track!" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "404 - Page Not Found",
            "description": "The page you're looking for doesn't exist. Let's get you back on track!",
            "url": window.location.href
          })}
        </script>
      </Helmet>

      <motion.div
        className="not-found-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="not-found-container">
          {/* 404 Number */}
          <motion.div className="error-number" variants={itemVariants}>
            <span className="error-4">4</span>
            <span className="error-0">0</span>
            <span className="error-4">4</span>
          </motion.div>

          {/* Error Message */}
          <motion.div className="error-content" variants={itemVariants}>
            <h1>Oops! Page Not Found</h1>
            <p>
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, let's get you back on track!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="error-actions" variants={itemVariants}>
            <button className="action-btn primary" onClick={goBack}>
              <ArrowLeft size={20} />
              Go Back
            </button>
            <button className="action-btn secondary" onClick={goHome}>
              <Home size={20} />
              Go Home
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="quick-links" variants={itemVariants}>
            <h2>Quick Navigation</h2>
            <div className="links-grid">
              <a href="/#projects" className="quick-link">
                <FolderOpen size={24} />
                <div className="link-content">
                  <h3>View Projects</h3>
                  <p>Explore my latest work and case studies</p>
                </div>
              </a>
              
              <a href="/#contact" className="quick-link">
                <Mail size={24} />
                <div className="link-content">
                  <h3>Get in Touch</h3>
                  <p>Let's discuss your next project</p>
                </div>
              </a>
              
              <a href="/now" className="quick-link">
                <Home size={24} />
                <div className="link-content">
                  <h3>What I'm Working On</h3>
                  <p>See my current projects and goals</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div className="fun-message" variants={itemVariants}>
            <p>
              💡 <strong>Pro tip:</strong> While you're here, why not check out my latest projects 
              or drop me a message? I'm always excited to connect with fellow developers and creators!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default NotFound;
