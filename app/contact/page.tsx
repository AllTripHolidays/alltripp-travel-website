import { generateMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: "Contact AllTripp - Plan Your Perfect India Trip Today",
  description: "Get in touch with AllTripp for personalized travel planning. Contact our travel experts for custom India tour packages, group bookings, and travel consultation. Start your journey today!",
  keywords: [
    "contact AllTripp",
    "travel consultation India",
    "custom tour packages",
    "travel planning India",
    "book India tour",
    "travel agency contact",
    "India travel experts"
  ],
  canonical: "https://alltripp.com/contact",
  ogImage: "/logo.png",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact AllTripp",
            "description": "Get in touch with AllTripp for travel planning and consultation",
            "url": "https://alltripp.com/contact",
            "mainEntity": {
              "@type": "TravelAgency",
              "name": "AllTripp",
              "telephone": "+91-XXXXXXXXXX",
              "email": "info@alltripp.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Contact AllTripp
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12">
            Ready to explore India? Get in touch with our travel experts for personalized 
            trip planning and unforgettable experiences.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@alltripp.com</p>
                    <p className="text-gray-600">bookings@alltripp.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91-XXXXXXXXXX</p>
                    <p className="text-gray-600">Available 9 AM - 7 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    🌐
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                      <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                      <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Contact Us?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Personalized travel consultation</li>
                  <li>Custom itinerary planning</li>
                  <li>Group booking assistance</li>
                  <li>24/7 travel support</li>
                  <li>Best price guarantees</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a destination</option>
                    <option value="kashmir">Kashmir</option>
                    <option value="kerala">Kerala</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="himachal">Himachal Pradesh</option>
                    <option value="goa">Goa</option>
                    <option value="ladakh">Ladakh</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your travel plans, preferences, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
