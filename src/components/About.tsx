import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: Code, value: "3+", label: "Years Experience" },
    { icon: Palette, value: "20+", label: "Projects Built" },
    { icon: Users, value: "4", label: "Teammates Mentored" },
    { icon: Award, value: "5+", label: "Certifications" },
  ];

  const skills = [
    {
      name: "Frontend Development",
      subtitle: "Angular/React",
      percentage: 85
    },
    {
      name: "Backend Development",
      subtitle: "Flask/FastAPI",
      percentage: 90
    },
    {
      name: "Cloud & DevOps",
      subtitle: "AWS, CI/CD",
      percentage: 85
    },
    {
      name: "Data Engineering",
      subtitle: "PySpark/Airflow",
      percentage: 80
    },
    {
      name: "Security & Monitoring",
      subtitle: "Security Best Practices",
      percentage: 80
    }
  ];

  const timeline = [
    {
      year: "Apr 2020 – May 2023",
      title: "Software Engineer – Full Stack",
      company: "Incentives Software Pvt Ltd",
      description: "Designed and shipped Flask + Angular microservices for an incentive platform serving 20,000+ users. Built secure JWT REST APIs, real-time dashboards, and automated CI/CD with Docker + GitHub Actions."
    },
    {
      year: "Jan – May 2025",
      title: "Graduate Research Assistant",
      company: "Cleveland State University",
      description: "Developed Python dashboards and Flask microservices for student data visualization; optimized DB queries + caching to reduce downtime by 15%."
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="about-section"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="about-content">
          {/* Profile Image */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="about-image-container">
                            <img 
                src="images/profile.jpg" 
                alt="Professional headshot" 
                className="about-image"
              />
              <div className="about-image-glow"></div>
            </div>
          </motion.div>

          {/* Main About Content */}
          <motion.div
            className="about-main"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>
                I’m a detail-oriented Full Stack Developer with 3+ years building cloud‑native, microservices‑driven products. My strength lies in developing secure REST APIs, automating CI/CD pipelines, and building data pipelines at scale.
              </p>
              <p>
                I deliver measurable impact in performance, reliability, and security using Python, Angular/React, and AWS. I recently completed my MS in Information Systems at Cleveland State University, focusing on advanced analytics and cloud architectures.
              </p>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card glass"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <stat.icon size={32} className="stat-icon" />
                  <div className="stat-content">
                    <h4 className="stat-value">{stat.value}</h4>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="about-skills-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>My Expertise</h3>
            <div className="expertise-simple">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="expertise-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="expertise-header">
                    <div className="expertise-info">
                      <h4 className="expertise-title">{skill.name}</h4>
                      <p className="expertise-subtitle">{skill.subtitle}</p>
                    </div>
                    <span className="expertise-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="expertise-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="timeline-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>My Journey</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              >
                <div className="timeline-content glass">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3>What Drives Me</h3>
          <div className="values-grid">
            <motion.div
              className="value-card glass"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Zap size={32} className="value-icon" />
              <h4>Innovation</h4>
              <p>Constantly exploring new technologies and creative solutions</p>
            </motion.div>

            <motion.div
              className="value-card glass"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Heart size={32} className="value-icon" />
              <h4>Passion</h4>
              <p>Deep love for coding and creating meaningful digital experiences</p>
            </motion.div>

            <motion.div
              className="value-card glass"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              <Users size={32} className="value-icon" />
              <h4>Collaboration</h4>
              <p>Believing in the power of teamwork and knowledge sharing</p>
            </motion.div>
          </div>
        </motion.div>
      </div>


    </motion.div>
  );
};

export default About;
