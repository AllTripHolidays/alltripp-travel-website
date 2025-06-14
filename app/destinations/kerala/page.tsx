import { generateDestinationMetadata } from '@/lib/seo';

export const metadata = generateDestinationMetadata(
  'Kerala',
  'Experience God\'s Own Country with AllTripp Kerala tours. Explore serene backwaters, hill stations, spice plantations, and pristine beaches. Book your Kerala holiday package for an authentic South Indian experience.',
  ['Alleppey backwaters', 'Munnar hills', 'Kochi tours', 'Kerala houseboats', 'Kumarakom', 'Wayanad wildlife']
);

export default function KeralaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": "Kerala",
            "description": "God's Own Country featuring backwaters, hill stations, spice plantations, and rich cultural heritage",
            "url": "https://alltripp.com/destinations/kerala",
            "image": "https://alltripp.com/destinations/kerala.jpg",
            "containedInPlace": {
              "@type": "Country",
              "name": "India"
            },
            "touristType": ["Cultural", "Nature", "Leisure", "Wellness"],
            "hasMap": "https://maps.google.com/?q=Kerala,India"
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kerala - God's Own Country
          </h1>
          
          <div className="mb-8">
            <img 
              src="/destinations/kerala.jpg" 
              alt="Kerala Backwaters - Serene houseboats and palm trees" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              loading="eager"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Immerse yourself in the tranquil beauty of Kerala with AllTripp's authentic travel experiences. 
              From the serene backwaters of Alleppey to the misty hills of Munnar, Kerala offers a perfect 
              blend of nature, culture, and wellness.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Kerala?</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Unique backwater experiences with traditional houseboats</li>
              <li>Lush hill stations and spice plantations</li>
              <li>Authentic Ayurvedic treatments and wellness retreats</li>
              <li>Rich cultural heritage and classical arts</li>
              <li>Pristine beaches and coastal beauty</li>
            </ul>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Popular Attractions</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Alleppey</h3>
                <p>Venice of the East with serene backwaters and traditional houseboats.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Munnar</h3>
                <p>Hill station paradise with tea plantations and cool climate.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kochi</h3>
                <p>Historic port city blending colonial architecture with modern culture.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kumarakom</h3>
                <p>Bird sanctuary and backwater destination perfect for nature lovers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
