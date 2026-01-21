import React from "react";
import { Mail, Github, Linkedin, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const socials = [
    { 
      name: "Email", 
      icon: Mail, 
      value: "mohamedaid8331@gmail.com", 
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=mohamedaid8331@gmail.com",
      label: "Send an Email"
    },
    { 
      name: "WhatsApp", 
      icon: MessageSquare, 
      value: "+20 100 859 3335", 
      link: "https://wa.me/201008593335",
      label: "Chat on WhatsApp"
    },
    { 
      name: "GitHub", 
      icon: Github, 
      value: "Mohamed-Eid01", 
      link: "https://github.com/Mohamed-Eid01",
      label: "Follow on GitHub"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      value: "mohamed-eid01", 
      link: "https://www.linkedin.com/in/mohamed-eid01",
      label: "Connect on LinkedIn"
    }
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-16 pt-24">
      <div className="glass-card rounded-[40px] p-8 sm:p-12 md:p-20 relative overflow-hidden border-purple-500/10 shadow-2xl">
        {/* Ambient background light */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-purple-400 font-bold tracking-widest uppercase text-sm block">Let's Connect</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight italic">
                Let's build <br /> <span className="text-gradient not-italic">something great.</span>
              </h2>
            </div>
            <p className="text-secondary text-lg sm:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
              I'm ready to bring my <strong>React</strong> expertise and software foundation to your next big idea. 
              Let's talk about how I can contribute to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className="glass-card flex flex-col justify-between min-h-[160px] p-8 group hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-purple-600/10 text-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-purple-400">{social.label}</div>
                </div>
                
                <div className="space-y-1">
                   <h4 className="text-xs font-black uppercase text-secondary/50 tracking-widest">{social.name}</h4>
                   <p className="font-bold text-white text-sm sm:text-base break-words tracking-tight">{social.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
