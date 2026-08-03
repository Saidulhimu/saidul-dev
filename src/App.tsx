import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTheme } from '@/hooks/useTheme';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';

function App() {
  useScrollReveal();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
