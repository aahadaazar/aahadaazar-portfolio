import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, FileText, Mail } from "lucide-react";

const links = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aahad-aazar-b83b77197/",
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
  {
    title: "Github",
    link: "https://github.com/aahadaazar",
    icon: Github,
    color: "hover:text-slate-100",
  },
  {
    title: "Medium",
    link: "https://medium.com/@abdulaahadaazar",
    icon: FileText,
    color: "hover:text-green-500",
  },
  {
    title: "Email",
    link: "mailto:aahadaazar@hotmail.com",
    icon: Mail,
    color: "hover:text-cyan-400",
  },
];

function Subheader() {
  return (
    <div className="flex items-center justify-center mb-12 z-10 relative">
      <div className="flex space-x-6 p-4 rounded-full glass-panel">
        {links.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 transition-colors duration-300 ${item.color}`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <Icon size={24} strokeWidth={1.5} />
              <span className="sr-only">{item.title}</span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default Subheader;
