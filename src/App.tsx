import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <CustomCursor />
      <Background3D />
      
      <Navbar />
      <ScrollProgress />

      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <ResumeModal />
    </>
  );
}

export default App;
