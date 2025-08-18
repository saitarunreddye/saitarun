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
    { icon: Code, value: "5+", label: "Years Experience" },
    { icon: Palette, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
  ];

  const skills = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Backend Development", percentage: 90 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Mobile Development", percentage: 80 },
    { name: "DevOps & Cloud", percentage: 75 },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise applications and mentoring junior developers."
    },
    {
      year: "2021",
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      description: "Built scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      year: "2019",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Created responsive and interactive user interfaces for various clients."
    },
    {
      year: "2018",
      title: "Web Development Intern",
      company: "Startup Studio",
      description: "Started my journey in web development with modern technologies."
    },
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
                I'm a passionate full-stack developer with over 5 years of experience 
                creating innovative digital solutions. My journey in technology began 
                with a curiosity about how things work on the web, and it has evolved 
                into a deep passion for building applications that solve real-world problems.
              </p>
              <p>
                I specialize in modern web technologies including React, TypeScript, 
                Node.js, and cloud platforms. My approach combines technical expertise 
                with creative problem-solving, ensuring that every project I work on 
                not only functions flawlessly but also delivers an exceptional user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
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
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>My Expertise</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
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
