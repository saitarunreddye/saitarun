import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Database, Cloud, Smartphone, Palette, 
  Zap, Shield, Globe, Cpu, Layers 
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'devops', label: 'DevOps', icon: Cloud },
  ];

  const skillsData = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
      { name: 'Vue.js', level: 85, icon: '💚' },
      { name: 'Next.js', level: 88, icon: '⚡' },
    ],
    backend: [
      { name: 'Node.js', level: 92, icon: '🟢' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Express.js', level: 90, icon: '🚂' },
      { name: 'PostgreSQL', level: 88, icon: '🐘' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'GraphQL', level: 80, icon: '🔷' },
    ],
    mobile: [
      { name: 'React Native', level: 85, icon: '📱' },
      { name: 'Flutter', level: 80, icon: '🦋' },
      { name: 'iOS Development', level: 75, icon: '🍎' },
      { name: 'Android Development', level: 70, icon: '🤖' },
    ],
    design: [
      { name: 'Figma', level: 90, icon: '🎨' },
      { name: 'Adobe XD', level: 85, icon: '✨' },
      { name: 'Sketch', level: 80, icon: '📐' },
      { name: 'Photoshop', level: 75, icon: '🖼️' },
    ],
    devops: [
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'AWS', level: 80, icon: '☁️' },
      { name: 'CI/CD', level: 85, icon: '🔄' },
      { name: 'Kubernetes', level: 70, icon: '⚓' },
    ],
  };

  const tools = [
    { name: 'Git', icon: '📚', description: 'Version Control' },
    { name: 'VS Code', icon: '💻', description: 'Code Editor' },
    { name: 'Postman', icon: '📮', description: 'API Testing' },
    { name: 'Jira', icon: '📋', description: 'Project Management' },
    { name: 'Figma', icon: '🎨', description: 'Design Tool' },
    { name: 'Docker', icon: '🐳', description: 'Containerization' },
  ];

  return (
    <motion.div
      ref={ref}
      className="skills-section"
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
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Mastering the tools and technologies that power modern web applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="category-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <category.icon size={20} />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-progress-container">
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="tool-card glass"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="tool-icon">{tool.icon}</div>
                <h4 className="tool-name">{tool.name}</h4>
                <p className="tool-description">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3>Additional Expertise</h3>
          <div className="expertise-grid">
            <motion.div
              className="expertise-card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Zap size={32} className="expertise-icon" />
              <h4>Performance Optimization</h4>
              <p>Optimizing applications for speed and efficiency</p>
            </motion.div>

            <motion.div
              className="expertise-card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Shield size={32} className="expertise-icon" />
              <h4>Security Best Practices</h4>
              <p>Implementing secure coding practices and protocols</p>
            </motion.div>

            <motion.div
              className="expertise-card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              <Globe size={32} className="expertise-icon" />
              <h4>Internationalization</h4>
              <p>Building applications for global audiences</p>
            </motion.div>

            <motion.div
              className="expertise-card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <Cpu size={32} className="expertise-icon" />
              <h4>System Architecture</h4>
              <p>Designing scalable and maintainable systems</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

</motion.div>
  );
};

export default Skills;
