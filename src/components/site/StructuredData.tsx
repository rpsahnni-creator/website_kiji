import { contact, products, services } from "@/components/site/data";
import { allTech } from "@/components/site/tech-stack";

const siteUrl = `https://${contact.website}`;

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kiji Technology OPC Private Limited",
  alternateName: "Kiji Technology",
  url: siteUrl,
  logo: `${siteUrl}/kiji-logo.png`,
  image: `${siteUrl}/kiji-logo.png`,
  telephone: contact.phoneDisplay,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLine1,
    addressLocality: "Deoghar",
    addressRegion: "Jharkhand",
    postalCode: "814112",
    addressCountry: "IN",
  },
  areaServed: "IN",
  priceRange: "$$",
  sameAs: [],
  knowsAbout: allTech.map((t) => t.name),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services and products",
    itemListElement: [...services, ...products].map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.title, description: item.text },
    })),
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
