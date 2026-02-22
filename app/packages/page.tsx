"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star } from 'lucide-react';

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  const packages = [
    {
      name: "Kashmir Paradise",
      destination: "Kashmir",
      duration: "7 Days / 6 Nights",
      price: "₹35,000",
      priceValue: 35000,
      durationValue: 7,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Sonamarg"],
      description: "Experience the paradise on earth with our comprehensive Kashmir tour package."
    },
    {
      name: "Kerala Backwaters",
      destination: "Kerala",
      duration: "6 Days / 5 Nights",
      price: "₹28,000",
      priceValue: 28000,
      durationValue: 6,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop&crop=center",
      highlights: ["Alleppey", "Munnar", "Kochi", "Kumarakom"],
      description: "Discover God's Own Country with serene backwaters and lush greenery."
    },
    {
      name: "Royal Rajasthan",
      destination: "Rajasthan",
      duration: "8 Days / 7 Nights",
      price: "₹42,000",
      priceValue: 42000,
      durationValue: 8,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop&crop=center",
      highlights: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      description: "Explore the royal heritage and majestic palaces of Rajasthan."
    },
    {
      name: "Himachal Adventure",
      destination: "Himachal Pradesh",
      duration: "5 Days / 4 Nights",
      price: "₹22,000",
      priceValue: 22000,
      durationValue: 5,
      rating: 4.6,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      highlights: ["Manali", "Solang Valley", "Rohtang Pass", "Kullu"],
      description: "Thrilling adventures amidst stunning Himalayan landscapes."
    }
  ];

  const filteredPackages = useMemo(() => {
    return packages.filter(pkg => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesPrice = priceFilter === 'all' ||
                          (priceFilter === 'under25k' && pkg.priceValue < 25000) ||
                          (priceFilter === '25k-40k' && pkg.priceValue >= 25000 && pkg.priceValue <= 40000) ||
                          (priceFilter === 'above40k' && pkg.priceValue > 40000);

      const matchesDuration = durationFilter === 'all' ||
                             (durationFilter === 'short' && pkg.durationValue <= 5) ||
                             (durationFilter === 'medium' && pkg.durationValue >= 6 && pkg.durationValue <= 7) ||
                             (durationFilter === 'long' && pkg.durationValue >= 8);

      return matchesSearch && matchesPrice && matchesDuration;
    });
  }, [searchTerm, priceFilter, durationFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AllTripp Tour Packages",
            "description": "Curated travel packages for authentic India experiences",
            "url": "https://alltripp.com/packages",
            "numberOfItems": packages.length,
            "itemListElement": packages.map((pkg, index) => ({
              "@type": "TouristTrip",
              "position": index + 1,
              "name": pkg.name,
              "description": `${pkg.duration} package to ${pkg.destination}`,
              "url": `https://alltripp.com/packages/${pkg.name.toLowerCase().replace(/\s+/g, '-')}`,
              "image": pkg.image,
              "offers": {
                "@type": "Offer",
                "price": pkg.price.replace('₹', ''),
                "priceCurrency": "INR"
              }
            }))
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              India Tour Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover India's incredible diversity with our curated travel packages. 
              From snow-capped mountains to tropical beaches, from royal palaces to 
              serene backwaters - find your perfect Indian adventure.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search packages, destinations, or highlights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-4">
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under25k">Under ₹25,000</SelectItem>
                    <SelectItem value="25k-40k">₹25,000 - ₹40,000</SelectItem>
                    <SelectItem value="above40k">Above ₹40,000</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={durationFilter} onValueChange={setDurationFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="short">Short (≤5 days)</SelectItem>
                    <SelectItem value="medium">Medium (6-7 days)</SelectItem>
                    <SelectItem value="long">Long (≥8 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredPackages.length} of {packages.length} packages
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {filteredPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} - ${pkg.destination} tour package`}
                    className="w-full h-full object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-gray-500">({pkg.reviews})</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-2">{pkg.destination} • {pkg.duration}</p>
                  <p className="text-gray-700 mb-4 text-sm">{pkg.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(pkg.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({pkg.reviews} reviews)</span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Looking for Something Custom?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Our travel experts can create a personalized itinerary based on your preferences, 
              budget, and travel dates. Get a custom quote today!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Get Custom Quote
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Curation</h3>
              <p className="text-gray-600">Hand-picked experiences by local travel experts</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive pricing with no hidden costs</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance during your journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
