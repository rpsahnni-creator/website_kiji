import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/components/site/data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kiji Technology OPC Private Limited" },
      {
        name: "description",
        content:
          "How Kiji Technology OPC Private Limited collects, uses and protects personal data.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    heading: "Who we are",
    body: [
      `This website (${contact.website}) is operated by Kiji Technology OPC Private Limited, ${contact.addressLine1}, ${contact.addressLine2} ("Kiji Technology", "we", "us").`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Information you give us: when you contact us by phone, email or WhatsApp, or fill in the enquiry form, we receive the details you choose to share — such as your name, mobile number, the service you are interested in and your message.",
      "The enquiry form and the on-site assistant run in your browser. The enquiry form opens WhatsApp with your message pre-filled; nothing is sent until you press send in WhatsApp. The assistant's conversation is not stored on our servers.",
      "Usage information: if website analytics are enabled, we collect anonymous usage data such as pages visited, device type and approximate location, to understand how the site is used and improve it.",
    ],
  },
  {
    heading: "How we use information",
    body: [
      "To respond to your enquiry, prepare proposals and quotes, deliver the services you engage us for, and send service-related communication.",
      "We do not sell your personal data, and we do not use it for unrelated marketing without your consent.",
    ],
  },
  {
    heading: "Sharing",
    body: [
      "We share information only with service providers needed to run our business — such as hosting, email, messaging (WhatsApp/SMS), payment and analytics providers — and only to the extent required, or where required by law.",
    ],
  },
  {
    heading: "Client project data",
    body: [
      "When we build or operate software for a client, data inside that software (for example student, patient or employee records) belongs to the client. We process it only on the client's instructions and under the confidentiality terms of our agreement.",
    ],
  },
  {
    heading: "Children's data",
    body: [
      "This website is intended for adults. Our learning products for children, such as StudyMate, are designed to collect the minimum data required and to obtain verifiable consent from a parent or guardian before processing a child's personal data, in line with the Digital Personal Data Protection Act, 2023.",
    ],
  },
  {
    heading: "Security and retention",
    body: [
      "We use reasonable technical and organisational safeguards, including encrypted connections (HTTPS), access controls and backups. We keep personal data only as long as needed for the purposes above or as required by law.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you may request access to, correction of, or erasure of your personal data, and you may withdraw consent at any time.",
    ],
  },
  {
    heading: "Contact & grievances",
    body: [
      `For privacy questions, requests or complaints, contact us at ${contact.email} or ${contact.phoneDisplay}. We will respond within a reasonable time.`,
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The latest version will always be available on this page with its last-updated date.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <Layout>
      <LegalPage
        title="Privacy Policy"
        intro="How we collect, use and protect your information."
        updated="18 October 2026"
        sections={sections}
      />
    </Layout>
  );
}
