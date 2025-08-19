import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Calendar } from 'lucide-react';

interface HeroProps {
  onHireMeClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHireMeClick }) => {
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
    { icon: Github, href: "https://github.com/saitarunreddye", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/esaitarun", label: "LinkedIn" },
    { icon: Mail, href: "mailto:saitarunreddye@gmail.com", label: "Email" },
  ];

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMeClick = () => {
    // Track hire me click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hire_me_click', {
        event_category: 'engagement',
        event_label: 'hero_hire_me_button'
      });
    }
    onHireMeClick();
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "saitarunreddye@gmail.com";
    
    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
      // Show a temporary notification
      const notification = document.createElement('div');
      notification.textContent = `Email copied: ${email}`;
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #000;
        color: #fff;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
      `;
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
      
      document.body.appendChild(notification);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.remove();
        style.remove();
      }, 3000);
    });
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
          {/* Profile Image */}
          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="profile-image-container">
              <img 
                src="/images/profile.jpg" 
                alt="Professional headshot" 
                className="profile-image"
              />
              <div className="profile-glow"></div>
            </div>
          </motion.div>

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
              <span className="gradient-text">E. Sai Tarun Reddy</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Full Stack Developer · Backend Engineer · Cloud Engineer
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              I build secure REST APIs, automate CI/CD, and design cloud-native systems. Recently completed my MS in Information Systems at Cleveland State University, focusing on analytics and cloud architectures.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="hero-btn primary"
                onClick={handleHireMeClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                Hire Me
              </motion.button>
              
              <motion.button
                className="hero-btn secondary"
                onClick={scrollToNext}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                View Work
              </motion.button>
            </motion.div>

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
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  onClick={link.label === "Email" ? handleEmailClick : undefined}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="scroll-btn"
              whileHover={{ y: 5 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
