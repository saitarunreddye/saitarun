import React, { useEffect, useState, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

// Lazy-loaded components for better performance
const Navigation = React.lazy(() => import('./components/Navigation'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const LoadingScreen = React.lazy(() => import('./components/LoadingScreen'));
const CalendlyModal = React.lazy(() => import('./components/CalendlyModal'));

// Types
interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

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
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoadingScreen />
      </Suspense>
    );
  }

  return (
    <>
      <Helmet>
        <title>E. Sai Tarun Reddy | Full Stack Developer · Backend · Cloud</title>
        <meta name="description" content="Full Stack Developer specializing in secure REST APIs, cloud-native systems, CI/CD automation, and data pipelines. MS in Information Systems (CSU)." />
        <meta name="keywords" content="portfolio, web developer, full-stack, React, TypeScript, UI/UX, frontend, backend, JavaScript, Node.js" />
        <meta name="author" content="E. Sai Tarun Reddy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="E. Sai Tarun Reddy | Portfolio" />
        <meta property="og:description" content="Full Stack Developer · Backend Engineer · Cloud Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E. Sai Tarun Reddy" />
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
            "name": "E. Sai Tarun Reddy",
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
        <Suspense fallback={<div>Loading Navigation...</div>}>
          <Navigation currentSection={currentSection} />
        </Suspense>

        <main>
          <Suspense fallback={<div>Loading Hero...</div>}>
            <section id="home">
              <Hero onHireMeClick={() => setIsCalendlyOpen(true)} />
            </section>
          </Suspense>

          <Suspense fallback={<div>Loading About...</div>}>
            <section id="about">
              <About />
            </section>
          </Suspense>

          <Suspense fallback={<div>Loading Skills...</div>}>
            <section id="skills">
              <Skills />
            </section>
          </Suspense>

          <Suspense fallback={<div>Loading Projects...</div>}>
            <section id="projects">
              <Projects />
            </section>
          </Suspense>

          <Suspense fallback={<div>Loading Experience...</div>}>
            <section id="experience">
              <Experience />
            </section>
          </Suspense>

          <Suspense fallback={<div>Loading Contact...</div>}>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </main>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>

        {/* Calendly Modal */}
        <Suspense fallback={<div>Loading Modal...</div>}>
          <CalendlyModal
            isOpen={isCalendlyOpen}
            onClose={() => setIsCalendlyOpen(false)}
            calendlyUrl="https://calendly.com/your-calendly-link"
          />
        </Suspense>
      </div>
    </>
  );
};

export default App;
