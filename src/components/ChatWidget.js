import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ExternalLink,
  MessageCircle,
  RefreshCw,
  X,
} from "lucide-react";

const ASSISTANT_URL = "https://aahadaazar-aahad-ai-bot.hf.space/";
const ASSISTANT_DIALOG_ID = "aahad-ai-assistant-dialog";
const ASSISTANT_TITLE_ID = "aahad-ai-assistant-title";
const LOAD_TIMEOUT_MS = 12000;
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "iframe",
  "[tabindex]:not([tabindex='-1']):not([data-focus-guard])",
].join(",");

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [frameKey, setFrameKey] = useState(0);
  const [frameStatus, setFrameStatus] = useState("loading");
  const [failureMessage, setFailureMessage] = useState("");
  const launcherRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const openAssistant = () => {
    setFailureMessage("");
    setFrameStatus("loading");
    setIsOpen(true);
  };

  const closeAssistant = () => setIsOpen(false);

  const retryAssistant = () => {
    setFailureMessage("");
    setFrameStatus("loading");
    setFrameKey((key) => key + 1);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const launcher = launcherRef.current;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAssistant();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR),
      ).filter((element) => element.getAttribute("tabindex") !== "-1");

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      launcher?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || frameStatus !== "loading") return undefined;

    const timeout = window.setTimeout(() => {
      setFailureMessage(
        "The assistant is taking longer than expected to load. You can retry here or open it directly.",
      );
      setFrameStatus("error");
    }, LOAD_TIMEOUT_MS);

    return () => window.clearTimeout(timeout);
  }, [frameKey, frameStatus, isOpen]);

  const handleFrameError = () => {
    setFailureMessage(
      "The assistant could not be loaded. Check your connection, retry here, or open it directly.",
    );
    setFrameStatus("error");
  };

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={isOpen ? closeAssistant : openAssistant}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
        aria-controls={ASSISTANT_DIALOG_ID}
        aria-hidden={isOpen}
        tabIndex={isOpen ? -1 : 0}
        className={`group fixed z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-rule bg-paper-2 text-ink shadow-lg transition-[color,border-color,box-shadow,opacity] duration-[var(--dur-short)] ease-[var(--ease-out)] hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        style={{
          bottom: "max(1.5rem, env(safe-area-inset-bottom))",
          right: "max(1.5rem, env(safe-area-inset-right))",
        }}
      >
        <span className="transition-transform duration-[var(--dur-micro)] ease-[var(--ease-out)] group-hover:-translate-y-0.5">
          {isOpen ? <X aria-hidden="true" size={24} /> : <MessageCircle aria-hidden="true" size={24} />}
        </span>
      </button>

      {isOpen && (
        <div
          className="pointer-events-none fixed inset-0 z-[70] flex h-[100dvh] items-stretch justify-stretch md:items-end md:justify-end"
          style={{
            paddingTop: "max(0.75rem, env(safe-area-inset-top))",
            paddingRight: "max(0.75rem, env(safe-area-inset-right))",
            paddingBottom: "calc(5.75rem + env(safe-area-inset-bottom))",
            paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-auto absolute inset-0 bg-ink/10"
            onMouseDown={closeAssistant}
          />

          <section
            ref={dialogRef}
            id={ASSISTANT_DIALOG_ID}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ASSISTANT_TITLE_ID}
            tabIndex={-1}
            className="pointer-events-auto relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-rule bg-paper shadow-2xl md:h-[min(600px,calc(100dvh-7.5rem-env(safe-area-inset-bottom)))] md:max-h-full md:w-[400px]"
          >
            <header className="flex shrink-0 items-center justify-between gap-3 border-b border-rule bg-paper-2/50 py-1.5 pl-4 pr-1.5">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    frameStatus === "error" ? "bg-muted" : "bg-accent"
                  } ${
                    frameStatus === "loading"
                      ? "animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                      : ""
                  }`}
                />
                <h2
                  id={ASSISTANT_TITLE_ID}
                  className="truncate font-mono text-xs uppercase tracking-widest text-muted"
                >
                  Aahad AI Assistant
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeAssistant}
                aria-label="Close AI assistant"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-muted transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-paper-3 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-2"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </header>

            <div className="relative min-h-0 flex-1 overflow-y-auto bg-paper">
              {frameStatus !== "error" && (
                <iframe
                  key={frameKey}
                  src={ASSISTANT_URL}
                  className="h-full min-h-[24rem] w-full border-none"
                  allow="microphone;"
                  title="Aahad AI assistant"
                  aria-label="Aahad AI assistant conversation"
                  aria-busy={frameStatus === "loading"}
                  tabIndex={frameStatus === "ready" ? 0 : -1}
                  onLoad={() => setFrameStatus("ready")}
                  onError={handleFrameError}
                />
              )}

              {frameStatus === "loading" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-paper px-6 text-center"
                >
                  <div>
                    <RefreshCw
                      aria-hidden="true"
                      className="mx-auto mb-3 animate-spin text-accent"
                      size={22}
                    />
                    <p className="text-sm font-medium text-ink">Loading the assistant…</p>
                    <p className="mt-1 text-sm text-muted">This may take a moment.</p>
                  </div>
                </div>
              )}

              {frameStatus === "error" && (
                <div
                  role="alert"
                  className="flex min-h-full items-center justify-center px-6 py-8 text-center"
                >
                  <div className="max-w-xs">
                    <AlertCircle
                      aria-hidden="true"
                      className="mx-auto mb-3 text-accent"
                      size={24}
                    />
                    <h3 className="text-base font-semibold text-ink">Assistant unavailable</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{failureMessage}</p>
                    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
                      <button
                        type="button"
                        onClick={retryAssistant}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-accent bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                      >
                        <RefreshCw aria-hidden="true" size={16} />
                        Retry
                      </button>
                      <a
                        href={ASSISTANT_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-rule bg-paper-2 px-4 py-2 text-sm font-medium text-ink transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                      >
                        Open in new tab
                        <ExternalLink aria-hidden="true" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span
              data-focus-guard
              tabIndex={0}
              aria-hidden="true"
              className="sr-only"
              onFocus={() => closeButtonRef.current?.focus()}
            />
          </section>
        </div>
      )}
    </>
  );
}
