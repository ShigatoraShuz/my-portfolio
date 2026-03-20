import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';



function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <section id="skills" className="min-h-screen py-32 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-black bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-8">
              Skills
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Skills section with animated charts coming soon.
            </p>
          </div>
        </section>
        <section id="contact" className="min-h-screen py-32 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-black bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-8">
              Contact
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Contact form and social links coming soon.
            </p>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;

