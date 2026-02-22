import { Geist, Geist_Mono, Onest } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import 'react-loading-skeleton/dist/skeleton.css';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata = {
  title: "Dr Chaithra SK | IVF & Fertility Specialist in Bangalore",
  description: "Dr Chaithra SK | IVF & Fertility Specialist in Bangalore",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.drchaithra.com/#physician",
      "name": "Dr Chaithra S K",
      "url": "https://www.drchaithra.com/",
      "image": "https://www.drchaithra.com/path-to-doctor-photo.jpg", // Remember to update this!
      "medicalSpecialty": "Reproductive Medicine",
      "description": "Dr. Chaithra S K (MBBS, MS-OBG, FRM, DRM) is an IVF and Reproductive Medicine Specialist at Ovum Fertility, Bangalore.",
      "hasCredential": ["MBBS", "MS-OBG", "FRM", "DRM"],
      "alumniOf": [
        { "@type": "EducationalOrganization", "name": "Rajiv Gandhi University of Health Sciences, Bangalore" },
        { "@type": "EducationalOrganization", "name": "Sri Siddhartha Medical College & Research" },
        { "@type": "EducationalOrganization", "name": "Kiel University, Germany" }
      ],
      "award": ["IFS Appreciation Award 2025", "South ISAR Youth Icon Award 2024"],
      "availableService": [
        { "@type": "MedicalService", "name": "In Vitro Fertilization (IVF)" },
        { "@type": "MedicalService", "name": "ICSI (Intracytoplasmic Sperm Injection)" },
        { "@type": "MedicalService", "name": "IUI (Intrauterine Insemination)" },
        { "@type": "MedicalService", "name": "Fertility Assessment" },
        { "@type": "MedicalService", "name": "Egg Freezing" },
        { "@type": "MedicalService", "name": "Embryo Freezing" },
        { "@type": "MedicalService", "name": "PGT-A Genetic Testing" },
        { "@type": "MedicalService", "name": "Reproductive Surgery" }
      ],
      "worksFor": [
        { "@id": "https://www.drchaithra.com/#kalyannagar" },
        { "@id": "https://www.drchaithra.com/#bhattarahalli" },
        { "@id": "https://www.drchaithra.com/#hennur" },
        { "@id": "https://www.drchaithra.com/#hoskote" }
      ]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drchaithra.com/#kalyannagar",
      "name": "Ovum Fertility - Kalyan Nagar",
      "telephone": "+918045309999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ground floor, 906, Raj Arcade, 5th A Cross, Outer Ring Rd, HRBR Layout",
        "addressLocality": "Kalyan Nagar",
        "addressRegion": "Karnataka",
        "postalCode": "560043",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "19:00"
      }
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drchaithra.com/#bhattarahalli",
      "name": "Ovum Fertility - Bhattarahalli",
      "telephone": "+918045309999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "29P & 32, National Highway 4, Opposite HDFC Bank, Sannatammanahalli",
        "addressLocality": "Battarahalli",
        "addressRegion": "Karnataka",
        "postalCode": "560049",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "19:00"
      }
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drchaithra.com/#hennur",
      "name": "Ovum Clinic & Fertility Centre - Hennur",
      "telephone": "+918045309999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gubbi Cross, 49/2, Hennur Bagalur Main Rd, Kothanur Post, Narayanapura",
        "addressLocality": "Hennur",
        "addressRegion": "Karnataka",
        "postalCode": "560077",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drchaithra.com/#hoskote",
      "name": "Ovum Fertility - Hoskote",
      "telephone": "+918045309999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, HIG Extension Road, Swamy Vivekananda Nagar, KHB Colony",
        "addressLocality": "Hoskote",
        "addressRegion": "Karnataka",
        "postalCode": "562114",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-WTL69B8Z" />
      {/* <GoogleAnalytics gaId="G-BLE2R0VPP6" />    */}
      <body
        className={`${onest.variable} font-sans antialiased`} suppressHydrationWarning
        >
        {children}
      </body>
    </html>
  );
}
