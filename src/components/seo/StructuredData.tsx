import { business } from "@/config/business";

/** Datos estructurados (schema.org) para buscadores. Sólo incluye datos confirmados. */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: business.name,
    alternateName: business.legalName,
    url: business.siteUrl,
    image: `${business.siteUrl}/og-image.jpg`,
    description: business.seo.description,
    telephone: `+${business.whatsapp.number}`,
    sameAs: [business.instagram.url],
    ...(business.location.isPlaceholder
      ? {}
      : {
          address: {
            "@type": "PostalAddress",
            streetAddress: business.location.address,
            addressLocality: business.location.city,
            addressCountry: "AR",
          },
        }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
