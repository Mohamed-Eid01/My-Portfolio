import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full flex items-center py-5 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16'>
        <Link
          to='/'
          className='flex items-center gap-2 group'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform">
            M
          </div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center'>
            Mohamed Eid
            <span className='md:block hidden ml-2 text-secondary font-medium'>| Frontend Developer</span>
          </p>
        </Link>

        {/* Desktop Links */}
        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-purple-400" : "text-secondary"
              } hover:text-white text-[16px] font-bold uppercase tracking-widest cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button 
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 glass rounded-lg flex items-center justify-center"
          >
            {toggle ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-8 glass absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl animate-in fade-in zoom-in duration-300`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-6'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-bold uppercase tracking-widest cursor-pointer text-[14px] ${
                    active === nav.title ? "text-purple-400" : "text-secondary"
                  } hover:text-white transition-colors w-full`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
