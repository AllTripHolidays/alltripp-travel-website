import { generateMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: "Travel Blog - India Travel Tips, Guides & Stories | AllTripp",
  description: "Discover India through our travel blog. Get expert travel tips, destination guides, cultural insights, and inspiring stories from across incredible India. Plan your perfect trip with AllTripp's travel blog.",
  keywords: [
    "India travel blog",
    "travel tips India",
    "India destination guides",
    "travel stories India",
    "cultural travel India",
    "India travel advice",
    "travel experiences India",
    "India tourism blog"
  ],
  canonical: "https://alltripp.com/blog",
  ogImage: "/himalayas.jpg",
});

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Hidden Gems in Kashmir You Must Visit",
      excerpt: "Discover the lesser-known treasures of Kashmir beyond the popular tourist spots. From hidden valleys to secret lakes, explore Kashmir's best-kept secrets.",
      image: "/destinations/kashmir.jpg",
      category: "Destinations",
      readTime: "5 min read",
      date: "June 10, 2025",
      slug: "hidden-gems-kashmir"
    },
    {
      title: "Kerala Backwaters: Complete Travel Guide",
      excerpt: "Everything you need to know about exploring Kerala's backwaters. From houseboat stays to local cuisine, plan your perfect backwater experience.",
      image: "/destinations/kerala.jpg", 
      category: "Travel Guides",
      readTime: "8 min read",
      date: "June 8, 2025",
      slug: "kerala-backwaters-guide"
    },
    {
      title: "Best Time to Visit Rajasthan: Season-wise Guide",
      excerpt: "Plan your Rajasthan trip with our comprehensive guide to weather, festivals, and the best times to visit different cities in the royal state.",
      image: "/destinations/rajasthan.jpg",
      category: "Travel Tips", 
      readTime: "6 min read",
      date: "June 5, 2025",
      slug: "best-time-visit-rajasthan"
    },
    {
      title: "Cultural Etiquette: Traveling Respectfully in India",
      excerpt: "Learn important cultural customs and etiquette tips for traveling in India. Respect local traditions while enjoying authentic experiences.",
      image: "/featured/delhi.jpg",
      category: "Culture",
      readTime: "7 min read", 
      date: "June 3, 2025",
      slug: "cultural-etiquette-india"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AllTripp Travel Blog",
            "description": "Travel tips, guides, and stories about India",
            "url": "https://alltripp.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "AllTripp",
              "logo": "https://alltripp.com/logo.png"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://alltripp.com/blog/${post.slug}`,
              "image": `https://alltripp.com${post.image}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "AllTripp"
              }
            }))
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Travel Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover India through our expert insights, travel tips, and inspiring stories. 
              Get insider knowledge to make your Indian adventure unforgettable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Load More Posts
            </button>
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Categories
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <a href="/blog/category/destinations" className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors">
                <div className="text-2xl mb-2">🏔️</div>
                <h3 className="font-semibold">Destinations</h3>
              </a>
              <a href="/blog/category/travel-tips" className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-semibold">Travel Tips</h3>
              </a>
              <a href="/blog/category/culture" className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors">
                <div className="text-2xl mb-2">🎭</div>
                <h3 className="font-semibold">Culture</h3>
              </a>
              <a href="/blog/category/adventure" className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors">
                <div className="text-2xl mb-2">🏕️</div>
                <h3 className="font-semibold">Adventure</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
