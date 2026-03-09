import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-chocolate-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
            <Cpu className="text-chocolate-50 w-6 h-6" />
          </div>
          <span className="font-display italic text-2xl tracking-tight text-chocolate-100">CocoaTech</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Innovation', 'Solutions', 'Ecosystem', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-chocolate-200/70 hover:text-chocolate-100 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-chocolate-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="px-6 py-2 rounded-full bg-chocolate-100 text-chocolate-950 text-sm font-semibold hover:bg-white transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-chocolate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass p-6 flex flex-col gap-4 md:hidden"
        >
          {['Innovation', 'Solutions', 'Ecosystem', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-chocolate-100"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-3 rounded-xl bg-chocolate-100 text-chocolate-950 font-semibold">
            Get Started
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};
