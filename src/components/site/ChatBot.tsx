import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { contact, faqs, services, products } from "@/components/site/data";
import { sendLeadNotification } from "@/lib/notify";

type Action = { label: string; href: string };
type Message = { from: "bot" | "user"; text: string; actions?: Action[] };
type TopicKey = "services" | "products" | "hire" | "quote" | "contact";

const quickTopics: { label: string; key: TopicKey }[] = [
  { label: "Our services", key: "services" },
  { label: "Our products", key: "products" },
  { label: "Hire a developer", key: "hire" },
  { label: "Get a free quote", key: "quote" },
  { label: "Contact details", key: "contact" },
];

function whatsappLink(text: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function answerForTopic(key: TopicKey): Message {
  switch (key) {
    case "services":
      return {
        from: "bot",
        text: `We offer ${services.length} core services, including ${services
          .slice(0, 5)
          .map((s) => s.title)
          .join(", ")} and more.`,
        actions: [{ label: "View all services", href: "/services" }],
      };
    case "products":
      return {
        from: "bot",
        text: `We offer ${products.length} ready-to-deploy products — including StudyMate (AI learning for Class 1–5), an Online Test Platform, School/College/University Management Systems, Flat/Society, Hospital, Hotel and HR systems.`,
        actions: [
          { label: "Explore StudyMate", href: "/products/studymate" },
          { label: "View all products", href: "/products" },
        ],
      };
    case "hire":
      return {
        from: "bot",
        text: "You can hire dedicated Python/Django, PHP/Laravel, Node.js, Next.js, full-stack, AI/ML, DevOps or mobile developers — hourly, part-time, full-time or for a fixed-price project. Share your name and number below and our team will call you, or see the roles first.",
        actions: [
          { label: "See developer roles", href: "/hire-developers" },
          {
            label: "Discuss on WhatsApp",
            href: whatsappLink("Hi Kiji Technology, I'd like to hire a developer."),
          },
        ],
      };
    case "quote":
      return {
        from: "bot",
        text: "Happy to help! Share your name and number below and our team will call you back, or message us directly on WhatsApp.",
        actions: [
          {
            label: "Chat on WhatsApp",
            href: whatsappLink("Hi Kiji Technology, I'd like a free quote for my project."),
          },
        ],
      };
    case "contact":
      return {
        from: "bot",
        text: `You can reach us at ${contact.phoneDisplay} or ${contact.email}. Our office: ${contact.addressLine1}, ${contact.addressLine2}.`,
      };
  }
}

const STOPWORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "do",
  "does",
  "did",
  "can",
  "could",
  "will",
  "would",
  "you",
  "your",
  "yours",
  "we",
  "our",
  "us",
  "i",
  "my",
  "me",
  "to",
  "of",
  "in",
  "on",
  "for",
  "with",
  "and",
  "or",
  "it",
  "this",
  "that",
  "these",
  "those",
  "what",
  "which",
  "how",
  "who",
  "whom",
  "be",
  "been",
  "have",
  "has",
  "had",
  "not",
  "no",
  "yes",
  "please",
  "about",
  "into",
  "if",
  "so",
  "as",
  "at",
]);

function keywords(text: string) {
  return (text.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter(
    (w) => w.length > 2 && !STOPWORDS.has(w),
  );
}

function matchFaq(input: string) {
  const words = keywords(input);
  if (words.length === 0) return null;
  let best: (typeof faqs)[number] | null = null;
  let bestScore = 0;
  for (const f of faqs) {
    const qWords = keywords(f.q);
    const score = words.filter((w) => qWords.includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }
  return bestScore > 0 ? best : null;
}

// Topics where showing the lead-capture card alongside the answer makes sense —
// the visitor has signalled real buying/hiring intent, not just a FAQ lookup.
const LEAD_TOPICS: ReadonlySet<TopicKey> = new Set(["quote", "hire"]);

type LeadState = {
  open: boolean;
  context: string;
  name: string;
  phone: string;
  submitting: boolean;
  sent: boolean;
  error: boolean;
};

const initialLead: LeadState = {
  open: false,
  context: "",
  name: "",
  phone: "",
  submitting: false,
  sent: false,
  error: false,
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! I'm the Kiji Technology assistant. Ask me about our services, products, pricing or anything else — or pick an option below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [lead, setLead] = useState<LeadState>(initialLead);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, typing, lead.open, lead.sent]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function pushBot(msg: Message) {
    setTyping(false);
    setMessages((m) => [...m, msg]);
  }

  function openLeadCapture(context: string) {
    setLead({ ...initialLead, open: true, context });
  }

  function handleTopic(key: TopicKey) {
    const label = quickTopics.find((t) => t.key === key)!.label;
    setMessages((m) => [...m, { from: "user", text: label }]);
    setTyping(true);
    setTimeout(() => {
      pushBot(answerForTopic(key));
      if (LEAD_TOPICS.has(key)) openLeadCapture(label);
    }, 500);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const match = matchFaq(text);
      if (match) {
        pushBot({ from: "bot", text: match.a });
      } else {
        pushBot({
          from: "bot",
          text: "I don't have an exact answer for that yet. Share your name and number and our team will get back to you, or continue on WhatsApp.",
          actions: [
            { label: "Continue on WhatsApp", href: whatsappLink(`Hi Kiji Technology, ${text}`) },
          ],
        });
        openLeadCapture(text);
      }
    }, 500);
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (!lead.name.trim() || !lead.phone.trim()) return;
    setLead((l) => ({ ...l, submitting: true, error: false }));
    try {
      // The request reaching the server without throwing is what the visitor
      // needs to know succeeded. Whether the notification email itself went out
      // (result.sent) is an operational detail for us to check server-side
      // (e.g. RESEND_API_KEY not configured yet) — not a visitor-facing failure.
      await sendLeadNotification({
        data: {
          name: lead.name,
          phone: lead.phone,
          message: lead.context,
          source: "chat-assistant",
        },
      });
      setLead((l) => ({ ...l, submitting: false, sent: true }));
      pushBot({
        from: "bot",
        text: `Thanks, ${lead.name}! Our team will call you on ${lead.phone} shortly.`,
      });
    } catch (error) {
      console.error("Lead capture failed", error);
      setLead((l) => ({ ...l, submitting: false, error: true }));
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[34rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border bg-card shadow-soft">
          <div className="flex items-center justify-between gap-2 bg-forest-gradient px-5 py-4 text-forest-foreground">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                <Bot className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-bold">Kiji Assistant</p>
                <p className="truncate text-[11px] opacity-75">Instant FAQ answers</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-secondary text-foreground"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.actions && (
                    <div className="mt-2 flex flex-col items-start gap-1.5">
                      {m.actions.map((a) => (
                        <a
                          key={a.label}
                          href={a.href}
                          target={a.href.startsWith("http") ? "_blank" : undefined}
                          rel={a.href.startsWith("http") ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary underline-offset-2 hover:underline"
                        >
                          {a.label} <ArrowRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-secondary px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                      style={{ animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {lead.open && !lead.sent && (
              <form
                onSubmit={submitLead}
                className="space-y-2 rounded-2xl border border-primary/30 bg-secondary/60 p-3.5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-primary">Get a callback</p>
                  <button
                    type="button"
                    onClick={() => setLead(initialLead)}
                    aria-label="Dismiss"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
                <input
                  required
                  placeholder="Your name"
                  value={lead.name}
                  onChange={(e) => setLead((l) => ({ ...l, name: e.target.value }))}
                  className="w-full rounded-full border bg-background px-3.5 py-2 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                <input
                  required
                  placeholder="Mobile number"
                  value={lead.phone}
                  onChange={(e) => setLead((l) => ({ ...l, phone: e.target.value }))}
                  className="w-full rounded-full border bg-background px-3.5 py-2 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                <button
                  type="submit"
                  disabled={lead.submitting}
                  className="w-full rounded-full bg-primary py-2 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {lead.submitting ? "Sending…" : "Request a callback"}
                </button>
                {lead.error && (
                  <p className="text-[11px] text-destructive">
                    Couldn't send that — please use WhatsApp above instead.
                  </p>
                )}
              </form>
            )}
            {lead.sent && (
              <div className="flex items-center gap-2 rounded-2xl border border-primary/30 bg-secondary/60 px-3.5 py-2.5 text-xs font-semibold text-primary">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> Request sent — we'll call you shortly.
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 border-t px-4 py-3">
            {quickTopics.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => handleTopic(t.key)}
                className="rounded-full border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 rounded-full border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-110"
      >
        {open ? <X /> : <MessageCircle />}
      </button>
    </>
  );
}
