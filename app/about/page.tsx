import { generateMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: "About AllTripp - Your Trusted Travel Partner in India",
  description: "Learn about AllTripp's mission to provide authentic travel experiences across India. Discover our story, values, and commitment to sustainable tourism and cultural preservation.",
  keywords: [
    "about AllTripp",
    "travel company India",
    "authentic travel experiences",
    "sustainable tourism",
    "cultural travel",
    "travel agency story",
    "India travel experts"
  ],
  canonical: "https://alltripp.com/about",
  ogImage: "/logo.png",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About AllTripp",
            "description": "Learn about AllTripp's mission and values in providing authentic travel experiences",
            "url": "https://alltripp.com/about",
            "mainEntity": {
              "@type": "TravelAgency",
              "name": "AllTripp",
              "foundingDate": "2020",
              "description": "Premium travel experiences across India",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            }
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About AllTripp
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              AllTripp is your trusted partner for discovering the incredible diversity and beauty of India. 
              We specialize in creating authentic, immersive travel experiences that go beyond traditional 
              tourism to connect you with the heart and soul of each destination.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To provide transformative travel experiences that celebrate India's rich cultural heritage, 
              natural beauty, and diverse communities while promoting sustainable and responsible tourism 
              practices.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Choose AllTripp?</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Authentic Experiences</h3>
                <p>We curate unique experiences that showcase the real India - from local cultural immersions to off-the-beaten-path destinations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Local Knowledge</h3>
                <p>Our team of travel experts have extensive knowledge of India's diverse regions, ensuring you get insider access to the best experiences.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Tourism</h3>
                <p>We're committed to responsible travel that benefits local communities and preserves cultural and natural heritage.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p>Every journey is tailored to your interests, ensuring a unique and memorable travel experience.</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Values</h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Authenticity:</strong> We showcase the real India with genuine cultural experiences</li>
              <li><strong>Sustainability:</strong> We promote responsible tourism that benefits local communities</li>
              <li><strong>Excellence:</strong> We strive for the highest standards in service and experience quality</li>
              <li><strong>Cultural Respect:</strong> We honor and preserve local traditions and customs</li>
              <li><strong>Innovation:</strong> We continuously evolve to offer unique and memorable experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
