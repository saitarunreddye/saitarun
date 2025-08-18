import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Types
interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  // Initialize particles
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  // Handle scroll to update current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Innovative Developer Portfolio | Full-Stack Web Developer</title>
        <meta name="description" content="Cutting-edge portfolio showcasing modern web development, creative design, and technical expertise. Full-stack developer specializing in React, TypeScript, and innovative UI/UX solutions." />
        <meta name="keywords" content="portfolio, web developer, full-stack, React, TypeScript, UI/UX, frontend, backend, JavaScript, Node.js" />
        <meta name="author" content="Your Name" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Innovative Developer Portfolio" />
        <meta property="og:description" content="Cutting-edge portfolio showcasing modern web development and creative design solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovative Developer Portfolio" />
        <meta name="twitter:description" content="Cutting-edge portfolio showcasing modern web development and creative design solutions." />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Helmet>

      {/* Particles Background */}
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="app">
        <Navigation currentSection={currentSection} />
        
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <main>
              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="experience">
                <Experience />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </main>
          </motion.div>
        </AnimatePresence>

        <Footer />
      </div>


    </>
  );
};

export default App;
