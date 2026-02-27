import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/site.json";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { integrations } = siteConfig;
  
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://sakurapremium.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        
        {/* Google Tag Manager */}
        {integrations.gtmId && (
          <>
            <Script id="gtm-script" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${integrations.gtmId}');
              `}
            </Script>
            <noscript>
              <iframe 
                src={`https://www.googletagmanager.com/ns.html?id=${integrations.gtmId}`}
                height="0" 
                width="0" 
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
        
        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": siteConfig.restaurant.name,
            "image": siteConfig.seo.ogImage,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": siteConfig.restaurant.address.street,
              "addressLocality": siteConfig.restaurant.address.city,
              "addressRegion": siteConfig.restaurant.address.state,
              "postalCode": siteConfig.restaurant.address.zipCode,
              "addressCountry": siteConfig.restaurant.address.country
            },
            "telephone": siteConfig.restaurant.phone,
            "priceRange": siteConfig.restaurant.priceRange,
            "servesCuisine": "Japanese",
            "openingHoursSpecification": siteConfig.restaurant.openingHours.map(hours => ({
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": hours.dayOfWeek,
              "opens": hours.opens,
              "closes": hours.closes
            }))
          })}
        </Script>
      </body>
    </html>
  );
}
