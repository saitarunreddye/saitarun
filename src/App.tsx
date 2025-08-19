import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

// Import components directly instead of lazy loading to avoid loading messages
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';

// Types
interface AppProps {}

const App: React.FC<AppProps> = () => {

  const [currentSection, setCurrentSection] = useState('home');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Initialize particles
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  // Handle scroll to update current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
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

  return (
    <>
      <Helmet>
        <title>Sai Tarun | Full Stack Developer · Backend · Cloud</title>
        <meta name="description" content="Full Stack Developer specializing in secure REST APIs, cloud-native systems, CI/CD automation, and data pipelines. MS in Information Systems (CSU)." />
        <meta name="keywords" content="portfolio, web developer, full-stack, React, TypeScript, UI/UX, frontend, backend, JavaScript, Node.js" />
        <meta name="author" content="Sai Tarun" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sai Tarun | Portfolio" />
        <meta property="og:description" content="Full Stack Developer · Backend Engineer · Cloud Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sai Tarun" />
        <meta name="twitter:description" content="Full Stack Developer · Backend Engineer · Cloud Engineer" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://your-website.com" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sai Tarun",
            "jobTitle": "Full Stack Developer · Backend Engineer · Cloud Engineer",
            "description": "Secure REST APIs, cloud-native architectures, CI/CD, and data pipelines at scale.",
            "url": "https://your-website.com",
            "sameAs": [
              "https://github.com/saitarunreddye",
              "https://linkedin.com/in/esaitarun",
              "https://twitter.com/yourusername"
            ],
            "knowsAbout": [
              "Python",
              "Flask",
              "FastAPI",
              "AWS",
              "CI/CD",
              "React",
              "Angular",
              "PostgreSQL",
              "MongoDB",
              "PySpark",
              "Airflow"
            ]
          })}
        </script>
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
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
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
                value: "#6366f1",
              },
              links: {
                color: "#6366f1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
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
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="app">
        <Navigation currentSection={currentSection} />

        <main>
          <section id="home">
            <Hero onHireMeClick={() => setIsCalendlyOpen(true)} />
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

          <section id="education">
            <Education />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />

        {/* Calendly Modal */}
        <CalendlyModal
          isOpen={isCalendlyOpen}
          onClose={() => setIsCalendlyOpen(false)}
          calendlyUrl="https://calendly.com/your-calendly-link"
        />
      </div>
    </>
  );
};

export default App;
