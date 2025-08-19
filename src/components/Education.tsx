import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Code } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  const educationData = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Cleveland State University",
      location: "Cleveland, OH",
      duration: "2023 - 2025",
      gpa: "3.8/4.0",
      logo: "/images/csu-logo.svg",
      description: "Specialized in advanced analytics, cloud architectures, and data engineering. Completed coursework in database management, machine learning, and enterprise systems.",
      highlights: [
        "Graduate Research Assistant - Developed Python dashboards and Flask microservices",
        "Database Optimization - Reduced query downtime by 15% through caching strategies",
        "Cloud Architecture - AWS, Azure, and Google Cloud Platform implementations",
        "Data Analytics - Advanced statistical analysis and visualization techniques"
      ],
      courses: [
        "Advanced Database Systems",
        "Cloud Computing & Architecture", 
        "Machine Learning & AI",
        "Enterprise Information Systems",
        "Data Mining & Analytics",
        "Software Engineering"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "JNTU Hyderabad",
      location: "Hyderabad, India", 
      duration: "2016 - 2020",
      gpa: "3.7/4.0",
      logo: "/images/jntu-logo.svg",
      description: "Comprehensive foundation in computer science fundamentals, software development, and system design. Active participation in technical clubs and hackathons.",
      highlights: [
        "Technical Lead - Led development team for college project management system",
        "Hackathon Winner - First place in regional coding competition",
        "Student Mentor - Tutored junior students in programming fundamentals",
        "Research Project - Developed IoT-based smart home automation system"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Database Management Systems"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: Award
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2024", 
      icon: Award
    },
    {
      name: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      year: "2023",
      icon: Award
    },
    {
      name: "Python Full Stack Developer",
      issuer: "Professional Certification",
      year: "2023",
      icon: Code
    },
    {
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      year: "2023",
      icon: Users
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="education-section"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ minHeight: '100vh' }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Academic journey and professional development that shaped my expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="education-timeline"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.degree}
              className="education-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            >
              <div className="education-card glass">
                <div className="education-header">
                  <div className="education-icon">
                    {education.logo ? (
                      <img 
                        src={process.env.PUBLIC_URL + education.logo} 
                        alt={`${education.institution} logo`}
                        className="institution-logo"
                        onError={(e) => {
                          // Fallback to icon if logo fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div className="education-icon-fallback" style={{ display: education.logo ? 'none' : 'flex' }}>
                      <GraduationCap size={32} />
                    </div>
                  </div>
                  <div className="education-info">
                    <h3 className="education-degree">{education.degree}</h3>
                    <div className="education-meta">
                      <div className="meta-item">
                        <BookOpen size={16} />
                        <span>{education.institution}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{education.location}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{education.duration}</span>
                      </div>
                      <div className="meta-item">
                        <Award size={16} />
                        <span>GPA: {education.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="education-description">{education.description}</p>

                <div className="education-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {education.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + idx * 0.1 }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="education-courses">
                  <h4>Relevant Coursework:</h4>
                  <div className="course-tags">
                    {education.courses.map((course, idx) => (
                      <motion.span
                        key={idx}
                        className="course-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1 + index * 0.2 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3>Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="certification-card glass"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="certification-icon">
                  <cert.icon size={32} />
                </div>
                <div className="certification-content">
                  <h4 className="certification-name">{cert.name}</h4>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <span className="certification-year">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
