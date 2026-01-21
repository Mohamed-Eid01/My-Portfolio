import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen bg-[#050816] selection:bg-purple-500/30 overflow-x-hidden'>
        {/* Animated Background Blob */}
        <div className="fixed top-0 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-float" />
        <div className="fixed bottom-0 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="bg-grid fixed inset-0 pointer-events-none -z-20 opacity-20" />

        <Navbar />
        
        <main className="flex flex-col gap-24 pb-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
