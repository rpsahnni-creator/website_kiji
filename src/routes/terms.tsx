import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/components/site/data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Kiji Technology OPC Private Limited" },
      {
        name: "description",
        content: "Terms governing the use of the Kiji Technology OPC Private Limited website.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    heading: "Acceptance",
    body: [
      `By using ${contact.website} you agree to these terms. If you do not agree, please do not use the website.`,
    ],
  },
  {
    heading: "Website content",
    body: [
      "Content on this website — including descriptions of services, products, features and technologies — is provided for general information. It is not an offer or a binding commitment. The scope, features, timelines and price of any engagement are set out only in a written proposal or agreement signed by both parties.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The website design, text, logo and graphics belong to Kiji Technology OPC Private Limited or its licensors. Third-party names and logos shown (for example technology brands) belong to their respective owners and are used only to identify the technologies we work with.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "You agree not to misuse the website — for example by attempting unauthorised access, disrupting its operation, or using it to send unlawful or harmful content.",
    ],
  },
  {
    heading: "On-site assistant",
    body: [
      "The assistant on this website gives automated answers to common questions. Its answers are general information only; please confirm specifics with our team before relying on them.",
    ],
  },
  {
    heading: "External links",
    body: [
      "The website may link to third-party sites and services such as WhatsApp. We are not responsible for their content or privacy practices.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the extent permitted by law, Kiji Technology is not liable for any indirect or consequential loss arising from the use of this website. Liability for client projects is governed by the relevant project agreement.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India, and courts at Deoghar, Jharkhand shall have jurisdiction.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms: ${contact.email} or ${contact.phoneDisplay}.`],
  },
];

function Terms() {
  return (
    <Layout>
      <LegalPage
        title="Terms of Use"
        intro="The terms that apply when you use this website."
        updated="18 October 2026"
        sections={sections}
      />
    </Layout>
  );
}
