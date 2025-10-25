import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import styles from "@/styles/Home.module.css";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-full p-4 shadow-lg backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 ${styles["animate-pulse-glow"]}`}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-20 right-6 w-[420px] h-[620px] transition-all duration-500 z-40 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl pt-5">
          <iframe
            src="https://aahadaazar-aahad-ai-bot.hf.space/"
            className="w-full h-full border-none rounded-2xl"
            allow="microphone; camera;"
          ></iframe>

          {/* Optional header bar */}
          <div className="absolute top-0 left-0 w-full bg-black/20 text-white text-sm px-4 py-2 backdrop-blur-lg flex justify-between items-center">
            <span className="font-medium tracking-wide">Talk to me!</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
