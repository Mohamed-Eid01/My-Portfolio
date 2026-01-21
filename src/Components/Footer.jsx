import React from "react";

const Footer = () => {
  return (
    <footer className='bg-primary py-8 sm:px-16 px-6 border-t border-white/5'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
        <p className='text-secondary text-sm'>
          © {new Date().getFullYear()} Mohamed Eid. All rights reserved.
        </p>
        <div className='flex gap-6'>
          <a href="https://github.com/Mohamed-Eid01" target="_blank" className="text-secondary hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/mohamed-eid01" target="_blank" className="text-secondary hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
