import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="hero-section"
      style={{ y: springY, opacity: springOpacity, scale }}
    >
      <div className="hero-container">
        {/* Background Elements */}
        <div className="hero-background">
          <motion.div
            className="floating-shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="floating-shape shape-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="floating-shape shape-3"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text">Your Name</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Full-Stack Developer & UI/UX Designer
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Crafting innovative digital experiences with cutting-edge technologies. 
              Specializing in React, TypeScript, and modern web development.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNext}
              >
                View My Work
                <ArrowDown size={20} />
              </motion.button>

              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Profile Card */}
          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ rotateY: 5, scale: 1.02 }}
          >
            <div className="profile-card glass">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Available for hire</h3>
                <p>Open to new opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
            >
              <link.icon size={24} />
              <span className="social-tooltip">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>


    </motion.div>
  );
};

export default Hero;
