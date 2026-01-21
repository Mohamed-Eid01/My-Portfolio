import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 sm:px-16">
      <div className="flex flex-col gap-4 mb-16 text-center md:text-left">
        <span className="text-purple-400 font-medium tracking-widest uppercase text-sm">Tech Stack</span>
        <h2 className="text-5xl md:text-6xl font-black">Expertise<span className="text-gradient">.</span></h2>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-3 group">
            <div className="w-24 h-24 glass rounded-[2rem] flex items-center justify-center group-hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest group-hover:text-purple-400 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
