import React from "react";

const About = () => {
  const cards = [
    {
      title: "React Specialist",
      icon: "https://img.icons8.com/officel/80/react.png",
      desc: "Architecting scalable web applications with high-performance React ecosystems."
    },
    {
      title: "Software Foundations",
      icon: "https://img.icons8.com/fluency/80/code-file.png",
      desc: "Strong background in clean code, algorithmic logic, and maintainable systems."
    },
    {
      title: "Quality Engineering",
      icon: "https://img.icons8.com/fluency/80/test-passed.png",
      desc: "Ensuring excellence through robust unit testing and architectural best practices."
    },
    {
      title: "3D Web Enthusiast",
      icon: "https://img.icons8.com/fluency/80/3d-rotate.png",
      desc: "Passionate about creating immersive 3D experiences using Three.js and Vite."
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-16 pt-24">
      <div className="flex flex-col gap-4">
        <span className="text-purple-400 font-medium tracking-widest uppercase text-sm">Introduction</span>
        <h2 className="text-5xl md:text-6xl font-black">About Me<span className="text-purple-500">.</span></h2>
      </div>

      <div className="mt-8 flex flex-col gap-6 text-secondary text-lg max-w-4xl leading-relaxed">
        <p>
          I'm a highly motivated <strong>Frontend Developer</strong> with a deep passion for building modern web applications using <strong>React</strong>. 
          I pride myself on being a <strong>fast learner</strong> with a rock-solid foundation in software engineering principles.
        </p>
        <p>
          I don't just write code; I design systems. Whether it's architecting clean component logic or implementing 
          rigorous <strong>unit testing with Vitest</strong>, I ensure every feature is production-ready and scalable.
        </p>
        <p>
          My focus is on creating <strong>high-performance, interactive</strong> interfaces, with a special interest in <strong>3D web experiences</strong>. 
          I am always open to learning new frameworks and tools, driven by curiosity and a commitment to engineering excellence.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="glass-card group flex flex-col items-center text-center gap-6 p-10">
            <div className="w-20 h-20 bg-black/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">{card.title}</h3>
              <p className="text-secondary text-sm leading-snug">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
