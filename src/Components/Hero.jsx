import React from "react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-24 md:pt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* Left Side: Text Content */}
        <div className="flex-[1.5] space-y-8 text-center lg:text-left z-10 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium">
              Available for React Projects
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.1]">
              Hello,I'm <br />
              <span className="text-gradient">Mohamed Eid</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Frontend Developer specializing in **React.js**. Designing
              seamless, high-performance web experiences with clean code and
              robust architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Get in Touch
            </a>
            <a
              href="/Mohamed-Eid-CV.pdf"
              download="Mohamed-Eid-CV.pdf"
              className="glass py-2 px-5 rounded-xl flex items-center gap-2 text-secondary hover:text-white border border-purple-500/20 hover:border-purple-500/50 transition-all font-bold text-sm"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </div>
        </div>

        {/* Right Side: Creative Visual */}
        <div className="flex-1 w-full flex justify-center items-center relative py-10 lg:py-0">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[120px] absolute -z-10 animate-float" />

          <div className="relative glass-card p-6 sm:p-8 rounded-[40px] transform hover:scale-105 transition-all duration-700 w-full max-w-sm sm:max-w-md border-white/10 shadow-2xl">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#151030] to-black rounded-[32px] border border-white/5 flex flex-col items-center justify-center p-8 space-y-6 relative overflow-hidden group">
              <div className="text-6xl sm:text-8xl mb-4 group-hover:rotate-12 transition-transform duration-500">
                ⚛️
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Frontend React
                </h3>
                <p className="text-sm sm:text-base text-secondary">
                  Strong Software Foundations & Vitest Testing
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>

              {/* Decorative light effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -ml-16 -mb-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
