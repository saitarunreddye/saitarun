import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Users, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: "Software Engineer – Full Stack",
      company: "Incentives Software Pvt Ltd",
      location: "Hyderabad, India",
      period: "Apr 2020 – May 2023",
      description: "Designed and shipped Flask + Angular microservices for an incentive platform serving 20,000+ users.",
      achievements: [
        "Built secure JWT REST APIs; reduced unauthorized access by 40%",
        "Delivered real-time dashboards with PostgreSQL + MongoDB",
        "Re-architected ETL (PySpark + Airflow) boosting throughput 80%",
        "Automated parsing on AWS Lambda, cutting manual ops 70%",
        "Integrated Prometheus + Grafana monitoring, improving MTTR",
        "Implemented CI/CD with Docker + GitHub Actions (deploy 2h → 10m)",
        "Mentored 4 junior devs; improved team delivery velocity"
      ],
      technologies: ["Angular", "Flask", "FastAPI", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "GitHub Actions", "PySpark", "Airflow", "Prometheus", "Grafana"],
      type: "Full-time",
      logo: "💼"
    },
    {
      id: 2,
      title: "Graduate Research Assistant",
      company: "Cleveland State University",
      location: "Cleveland, OH",
      period: "Jan – May 2025",
      description: "Developed Python dashboards and Flask microservices for student data visualization.",
      achievements: [
        "Reduced reporting work by 60% with automated dashboards",
        "Optimized DB queries + caching, cutting downtime 15%"
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "Caching"],
      type: "Graduate Assistant",
      logo: "🎓"
    }
  ];



  return (
    <motion.div
      ref={ref}
      className="experience-section"
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <div className="timeline-content glass">
                <div className="experience-header">
                  <div className="company-logo">
                    <span className="logo-emoji">{experience.logo}</span>
                  </div>
                  <div className="experience-info">
                    <h3 className="job-title">{experience.title}</h3>
                    <h4 className="company-name">{experience.company}</h4>
                    <div className="job-meta">
                      <span className="job-location">
                        <MapPin size={16} />
                        {experience.location}
                      </span>
                      <span className="job-period">
                        <Calendar size={16} />
                        {experience.period}
                      </span>
                      <span className="job-type">{experience.type}</span>
                    </div>
                  </div>
                </div>

                <p className="job-description">{experience.description}</p>

                <div className="achievements-section">
                  <h5>Key Achievements</h5>
                  <ul className="achievements-list">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>
                        <Award size={16} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-section">
                  <h5>Technologies Used</h5>
                  <div className="tech-tags">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Skills Summary */}
        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3>Professional Skills Summary</h3>
          <div className="skills-summary-grid">
            <motion.div
              className="skill-summary-card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Zap size={32} className="skill-icon" />
              <h4>Technical Leadership</h4>
              <p>Leading development teams and architecting scalable solutions</p>
            </motion.div>

            <motion.div
              className="skill-summary-card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              <Users size={32} className="skill-icon" />
              <h4>Team Collaboration</h4>
              <p>Working effectively in cross-functional teams and mentoring developers</p>
            </motion.div>

            <motion.div
              className="skill-summary-card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <Award size={32} className="skill-icon" />
              <h4>Problem Solving</h4>
              <p>Analyzing complex problems and implementing effective solutions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
