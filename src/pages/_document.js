import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
   <Head>
   <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gurinder Khabra",
              "jobTitle": "Marketer",
              "description": "Gurinder Khabra is a passionate GTM & RevOps consultant specializing in building robust systems and pipelines. Currently focused on implementing strategic marketing automations and systems to streamline operations and drive growth.",
              "worksFor": {
                "@type": "Organization",
                "name": "Pacific Automation Group"
              },
              "sameAs": [
                "https://www.linkedin.com/in/khabra0",
                "https://www.youtube.com/channel/UCpIu1p2fo-U6veKeYdnqYoQ"
              ],
              "skills": [
                "HubSpot",
                "ClickUp",
                "Make.com",
                "Zapier",
                "Google Analytics",
                "SQL & Data Integration"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Las Vegas",
                "addressCountry": "Nevada"
              }
            })
          }}
        />
        {/* Add the Poppins font link here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
