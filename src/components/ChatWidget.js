import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] z-50 transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] ${
          isOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-rule bg-paper/95 backdrop-blur-xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-paper-2/50 border-b border-rule">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              <span className="text-xs font-mono text-muted uppercase tracking-widest">Aahad AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-ink transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)]"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Iframe */}
          <div className="flex-1 bg-paper">
            <iframe
              src="https://aahadaazar-aahad-ai-bot.hf.space/"
              className="w-full h-full border-none"
              allow="microphone; camera;"
              title="Aahad AI Bot"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-paper-2 text-ink shadow-lg border border-rule hover:border-accent hover:text-accent transition-all duration-[var(--dur-short)] ease-[var(--ease-out)] group"
      >
        <div className="transform group-hover:-translate-y-0.5 transition-transform duration-[var(--dur-micro)] ease-[var(--ease-out)]">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
      </button>
    </>
  );
}
