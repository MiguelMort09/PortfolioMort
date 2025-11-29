import React from "react";

const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Miguel E. Uicab Canabal",
        url: "https://miguelmort.tech",
        jobTitle: "Ingeniero en Tecnologías de Software",
        sameAs: [
          "https://github.com/MiguelMort09",
          "https://www.linkedin.com/in/miguel-uicab-canabal-3b1b3b1b3", // Placeholder, needs verification
        ],
      },
      {
        "@type": "WebSite",
        name: "MiguelMort.tech",
        url: "https://miguelmort.tech",
        description:
          "Portfolio de Miguel E. Uicab Canabal - Ingeniero de Software especializado en Laravel y desarrollo web.",
        author: {
          "@type": "Person",
          name: "Miguel E. Uicab Canabal",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;
