import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Award, Users, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of enterprise applications and mentoring junior developers. Responsible for architecting scalable solutions and implementing best practices.",
      achievements: [
        "Led development of 3 major enterprise applications",
        "Mentored 5 junior developers",
        "Improved application performance by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"],
      type: "Full-time",
      logo: "🏢"
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Built scalable web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Developed 8 client-facing applications",
        "Reduced bug reports by 50%",
        "Optimized database queries improving load times by 35%",
        "Implemented automated testing increasing coverage to 85%"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Jest"],
      type: "Full-time",
      logo: "💼"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      period: "2018 - 2020",
      description: "Created responsive and interactive user interfaces for various clients. Focused on delivering exceptional user experiences.",
      achievements: [
        "Designed and developed 15+ client websites",
        "Achieved 95% client satisfaction rate",
        "Reduced page load times by 45%",
        "Implemented accessibility features for all projects"
      ],
      technologies: ["React", "Vue.js", "JavaScript", "CSS3", "HTML5", "GSAP"],
      type: "Full-time",
      logo: "🎨"
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Startup Studio",
      location: "Austin, TX",
      period: "2017 - 2018",
      description: "Started my journey in web development with modern technologies. Learned best practices and industry standards.",
      achievements: [
        "Built 5 small-scale applications",
        "Learned modern development workflows",
        "Contributed to open-source projects",
        "Gained experience with agile methodologies"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Git", "Bootstrap", "jQuery"],
      type: "Internship",
      logo: "🚀"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      logo: "☁️"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      logo: "⚛️"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2021",
      logo: "🌐"
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

        {/* Certifications Section */}
        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3>Certifications & Awards</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="certification-card glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="cert-logo">
                  <span className="cert-emoji">{cert.logo}</span>
                </div>
                <div className="cert-content">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
