import { generateDestinationMetadata } from '@/lib/seo';

export const metadata = generateDestinationMetadata(
  'Kashmir',
  'Discover the paradise on earth with AllTripp Kashmir tours. Experience snow-capped mountains, pristine lakes, Mughal gardens, and authentic Kashmiri culture. Book your Kashmir holiday package today.',
  ['Srinagar tours', 'Gulmarg skiing', 'Pahalgam valley', 'Dal Lake houseboat', 'Kashmir valley', 'Sonamarg glacier']
);

export default function KashmirPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": "Kashmir",
            "description": "Paradise on earth with snow-capped mountains, pristine lakes, and rich cultural heritage",
            "url": "https://alltripp.com/destinations/kashmir",
            "image": "https://alltripp.com/destinations/kashmir.jpg",
            "containedInPlace": {
              "@type": "Country",
              "name": "India"
            },
            "touristType": ["Cultural", "Adventure", "Nature", "Leisure"],
            "hasMap": "https://maps.google.com/?q=Kashmir,India"
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kashmir - Paradise on Earth
          </h1>
          
          <div className="mb-8">
            <img 
              src="/destinations/kashmir.jpg" 
              alt="Kashmir Valley - Beautiful mountains and lakes" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              loading="eager"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Discover the breathtaking beauty of Kashmir with AllTripp's curated travel experiences. 
              From the serene Dal Lake to the snow-capped peaks of Gulmarg, Kashmir offers an 
              unforgettable journey through paradise on earth.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Kashmir?</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Stunning Himalayan landscapes and pristine lakes</li>
              <li>Rich Mughal heritage and beautiful gardens</li>
              <li>Adventure activities like skiing, trekking, and river rafting</li>
              <li>Authentic Kashmiri cuisine and warm hospitality</li>
              <li>Peaceful houseboats on Dal Lake</li>
            </ul>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Popular Attractions</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Srinagar</h3>
                <p>The summer capital featuring Dal Lake, Mughal Gardens, and traditional houseboats.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Gulmarg</h3>
                <p>A premier ski resort and golf destination with the highest cable car in the world.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pahalgam</h3>
                <p>Valley of shepherds offering scenic beauty and adventure activities.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sonamarg</h3>
                <p>Gateway to Ladakh featuring glaciers, alpine lakes, and trekking opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
