import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "#333"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "#0077b5"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "#1da1f2"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:hello@yourportfolio.com",
      color: "#ea4335"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Section */}
          <div className="footer-main">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="brand-name">
                <span className="gradient-text">Portfolio</span>
              </h3>
              <p className="brand-description">
                Crafting innovative digital experiences with passion and creativity. 
                Let's build something amazing together.
              </p>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Quick Links</h4>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <p>Ready to start your next project?</p>
                <a href="mailto:hello@yourportfolio.com" className="contact-email">
                  hello@yourportfolio.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                  <span className="social-tooltip">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Your Name. Made with{' '}
              <Heart size={16} className="heart-icon" />{' '}
              and lots of coffee.
            </p>
            
            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

</footer>
  );
};

export default Footer;
