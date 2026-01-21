import React from "react";
import { projects } from "../constants";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-16 pt-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
        <div className="flex flex-col gap-4">
          <span className="text-purple-400 font-medium tracking-widest uppercase text-sm">Portfolio Showcase</span>
          <h2 className="text-5xl md:text-6xl font-black">Latest Projects<span className="text-purple-500">.</span></h2>
          <p className="text-secondary max-w-xl text-lg">
            A selection of my recent works, ranging from complex dashboards to interactive travel apps. 
            All built with a focus on performance and clean architecture.
          </p>
        </div>

        <a 
          href="https://github.com/Mohamed-Eid01" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center gap-3 glass-card py-4 px-8 border-purple-500/20 hover:border-purple-500/50"
        >
          <Github className="w-6 h-6" />
          <span className="font-bold">More on GitHub</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="glass-card group h-full flex flex-col md:flex-row overflow-hidden p-0 rounded-[32px] border-white/10 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500">
            {/* Image Overlay */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-[#151030]">
               <img 
                 src={project.image} 
                 alt={project.name} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:from-transparent to-transparent" />
            </div>
            
            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest text-purple-400/80">
                  {project.tags.map(tag => <span key={tag.name} className="px-2 py-1 glass rounded-md">#{tag.name}</span>)}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{project.name}</h3>
                <p className="text-secondary text-base leading-relaxed line-clamp-3">{project.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href={project.live_demo_link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 sm:flex-none glass py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-white text-secondary hover:text-black font-bold transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a 
                  href={project.source_code_link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full sm:w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-purple-600 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
