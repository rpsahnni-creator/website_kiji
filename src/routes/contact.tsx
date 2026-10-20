import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { contact, services, products } from "@/components/site/data";
import { sendLeadNotification } from "@/lib/notify";
import img from "@/assets/contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kiji Technology OPC Pvt. Ltd." },
      {
        name: "description",
        content:
          "Get a free quote from Kiji Technology for your website, app, management system or AI automation project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Contact Kiji Technology" },
      { property: "og:description", content: "Get a free quote for your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "", message: "" });
  const [sending, setSending] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const interest = form.interest ? ` I'm interested in: ${form.interest}.` : "";
    const text = `Hi Kiji Technology, I'm ${form.name} (${form.phone}).${interest} ${form.message}`;
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSending(true);
    try {
      await sendLeadNotification({
        data: {
          name: form.name,
          phone: form.phone,
          interest: form.interest || undefined,
          message: form.message || undefined,
          source: "contact-form",
        },
      });
    } catch (error) {
      console.error("Lead notification failed", error);
    } finally {
      setSending(false);
    }
  };
  const input =
    "w-full rounded-xl border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        text="Tell us about your goals, project scope and existing systems so we can discuss the right next steps."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2">
        <div>
          <img
            src={img}
            alt="Meeting with a client"
            loading="lazy"
            width={1408}
            height={1008}
            className="rounded-3xl shadow-soft"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={contact.phoneHref}
              className="rounded-2xl bg-secondary p-5 transition-colors hover:bg-secondary/70"
            >
              <Phone className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">{contact.phoneDisplay}</p>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-2xl bg-secondary p-5 transition-colors hover:bg-secondary/70"
            >
              <Mail className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">{contact.email}</p>
            </a>
            <div className="rounded-2xl bg-secondary p-5">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">
                {contact.addressLine1}, {contact.addressLine2}
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-3xl border bg-card p-8 shadow-soft">
          <h2 className="text-3xl font-bold">Get a free quote</h2>
          <div className="mt-6 space-y-4">
            <input
              required
              placeholder="Your name *"
              className={input}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              placeholder="Mobile number *"
              className={input}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              aria-label="I'm interested in"
              className={input}
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
            >
              <option value="">I'm interested in… (optional)</option>
              <optgroup label="Services">
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Products">
                {products.map((p) => (
                  <option key={p.slug} value={p.title}>
                    {p.title}
                  </option>
                ))}
              </optgroup>
            </select>
            <textarea
              rows={5}
              placeholder="Tell us about your project"
              className={input}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 font-bold text-accent-foreground shadow-sun transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              Send on WhatsApp <Send className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Opens WhatsApp with your message ready to send, and notifies our team by email.
            </p>
          </div>
        </form>
      </section>
    </Layout>
  );
}
