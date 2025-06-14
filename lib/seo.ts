import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description = "Discover India's hidden gems with AllTripp - your premium travel partner. Authentic travel experiences, cultural tours, and adventure trips across incredible India.",
  keywords = [],
  canonical,
  ogImage = "/logo.png",
  ogType = "website",
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
}: SEOProps): Metadata {
  const defaultKeywords = [
    "travel agency India",
    "India tour packages",
    "travel experiences India",
    "cultural tours India",
    "adventure travel India",
    "holiday packages India",
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  const metadata: Metadata = {
    title: title ? `${title} | AllTripp` : "AllTripp - One Solution For All Your Travel Needs",
    description,
    keywords: allKeywords,
    authors: author ? [{ name: author }] : [{ name: "AllTripp Travel" }],
    openGraph: {
      type: ogType,
      locale: "en_IN",
      url: canonical || "https://alltripp.com",
      title: title || "AllTripp - Premium Travel Experiences Across India",
      description,
      siteName: "AllTripp",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || "AllTripp - Travel Agency India",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: title || "AllTripp - Premium Travel Experiences Across India",
      description,
      images: [ogImage],
      creator: "@AllTripp",
    },
    alternates: canonical ? { canonical } : undefined,
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          nocache: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };

  return metadata;
}

export function generateDestinationMetadata(
  destination: string,
  description?: string,
  customKeywords?: string[]
): Metadata {
  const destinationKeywords = [
    `${destination} tours`,
    `${destination} packages`,
    `${destination} travel`,
    `visit ${destination}`,
    `${destination} holiday`,
    `${destination} tourism`,
    ...(customKeywords || []),
  ];

  return generateMetadata({
    title: `${destination} Tours & Packages - Discover ${destination} with AllTripp`,
    description: description || `Explore the beauty of ${destination} with AllTripp's curated travel packages. Authentic experiences, local culture, and unforgettable memories await in ${destination}.`,
    keywords: destinationKeywords,
    canonical: `https://alltripp.com/destinations/${destination.toLowerCase().replace(/\s+/g, '-')}`,
    ogImage: `/destinations/${destination.toLowerCase().replace(/\s+/g, '-')}.jpg`,
  });
}

export function generatePackageMetadata(
  packageName: string,
  destination: string,
  duration: string,
  price?: string
): Metadata {
  const packageKeywords = [
    `${destination} ${duration} package`,
    `${packageName}`,
    `${destination} tour package`,
    `${destination} holiday package`,
    ...(price ? [`${destination} package ${price}`] : []),
  ];

  return generateMetadata({
    title: `${packageName} - ${duration} ${destination} Package`,
    description: `Book ${packageName} with AllTripp. ${duration} of authentic ${destination} experiences including local culture, sightseeing, and memorable adventures. ${price ? `Starting from ${price}.` : ''}`,
    keywords: packageKeywords,
    canonical: `https://alltripp.com/packages/${packageName.toLowerCase().replace(/\s+/g, '-')}`,
    ogImage: `/featured/${destination.toLowerCase().replace(/\s+/g, '-')}.jpg`,
  });
}

// Generate structured data for different content types
export function generateTravelAgencyStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "AllTripp",
    "description": "Premium travel experiences across India",
    "url": "https://alltripp.com",
    "logo": "https://alltripp.com/logo.png",
    "sameAs": [
      "https://facebook.com/alltripp",
      "https://instagram.com/alltripp",
      "https://twitter.com/alltripp"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "Travel Planning",
      "Tour Packages",
      "Cultural Tours",
      "Adventure Travel",
      "Holiday Packages"
    ]
  };
}

export function generateTourPackageStructuredData(
  name: string,
  description: string,
  destination: string,
  duration: string,
  price?: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": name,
    "description": description,
    "touristType": "Cultural, Adventure, Leisure",
    "url": `https://alltripp.com/packages/${name.toLowerCase().replace(/\s+/g, '-')}`,
    "image": image || `/featured/${destination.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    "provider": {
      "@type": "TravelAgency",
      "name": "AllTripp",
      "url": "https://alltripp.com"
    },
    "itinerary": {
      "@type": "ItemList",
      "name": `${destination} Itinerary`,
      "description": `${duration} itinerary for ${destination}`
    },
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    })
  };
}

export function generateDestinationStructuredData(
  name: string,
  description: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": name,
    "description": description,
    "url": `https://alltripp.com/destinations/${name.toLowerCase().replace(/\s+/g, '-')}`,
    "image": image || `/destinations/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    "containedInPlace": {
      "@type": "Country",
      "name": "India"
    },
    "touristType": ["Cultural", "Adventure", "Leisure", "Nature"]
  };
}
