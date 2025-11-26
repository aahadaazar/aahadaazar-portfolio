import React from "react";
import { motion } from "framer-motion";

function Header() {
  const name = "Aahad Aazar";

  return (
    <div className="flex flex-col items-center w-full justify-center mb-10 pt-10 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 pb-2 font-mono tracking-tighter">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-cyan-400 ml-1"
          >
            _
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-4 flex items-center space-x-3 text-slate-400 font-mono text-sm md:text-base"
      >
        <span>Software Engineer</span>
        <span className="text-cyan-500">•</span>
        <span>Full Stack</span>
        <span className="text-violet-500">•</span>
        <span>AI</span>
      </motion.div>
    </div>
  );
}

export default Header;
