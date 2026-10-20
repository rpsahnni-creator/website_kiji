import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { contact } from "@/components/site/data";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  phone: z.string().trim().min(5, "A valid phone number is required").max(30),
  interest: z.string().trim().max(200).optional(),
  message: z.string().trim().max(2000).optional(),
  source: z.enum(["contact-form", "chat-assistant"]),
});

export type LeadInput = z.infer<typeof leadSchema>;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Notifies the Kiji Technology team by email when a visitor submits the contact
// form or the chat assistant's lead-capture card. Silently no-ops until
// RESEND_API_KEY is configured (see .env.example) — the visitor-facing flow
// never depends on this succeeding.
export const sendLeadNotification = createServerFn({ method: "POST" })
  .validator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.warn("[notify] RESEND_API_KEY not set — lead email not sent");
      return { sent: false as const };
    }

    const from =
      process.env["RESEND_FROM_EMAIL"] || "Kiji Technology Website <onboarding@resend.dev>";
    const to = process.env["LEAD_NOTIFY_EMAIL"] || contact.email;
    const sourceLabel = data.source === "chat-assistant" ? "Kiji Assistant (chat)" : "Contact form";

    const rows: [string, string][] = [
      ["Source", sourceLabel],
      ["Name", data.name],
      ["Phone", data.phone],
      ...(data.interest ? ([["Interested in", data.interest]] as [string, string][]) : []),
      ...(data.message ? ([["Message", data.message]] as [string, string][]) : []),
    ];
    const html = `<div style="font-family:sans-serif;font-size:14px;color:#1a1a1a">
      <h2 style="margin:0 0 12px">New enquiry from ${escapeHtml(sourceLabel)}</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
    </div>`;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [to],
          subject: `New enquiry: ${data.name} — ${sourceLabel}`,
          html,
        }),
      });
      if (!res.ok) {
        console.error("[notify] Resend API error", res.status, await res.text());
        return { sent: false as const };
      }
      return { sent: true as const };
    } catch (error) {
      console.error("[notify] Failed to send lead notification email", error);
      return { sent: false as const };
    }
  });
