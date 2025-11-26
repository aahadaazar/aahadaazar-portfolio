import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] z-50"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-mono text-slate-200">Aahad AI Assistant</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              
              {/* Iframe */}
              <div className="flex-1 bg-slate-950">
                <iframe
                  src="https://aahadaazar-aahad-ai-bot.hf.space/"
                  className="w-full h-full border-none"
                  allow="microphone; camera;"
                  title="Aahad AI Bot"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 border border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
