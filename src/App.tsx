import React, { useState, useEffect } from 'react';
import { Camera, Award, Truck, Users, Instagram, Mail, ArrowRight, Check, Star, Globe, MessageCircle, Phone } from 'lucide-react';
import logo from './logo.png'; // Replace with your logo path
import MockUp48 from './F8MediaArtsMockUp48.png'; // Replace with your mockup image path
import MockUp53 from './F8MediaArtsMockUp53.png'; // Replace with your mockup image path
import MockUp50 from './F8MediaArtsMockUp50.png'; // Replace with your mockup image path
import MockUp54 from './F8MediaArtsMockUp54.png'; // Replace with your mockup image path
import MockUp65 from './F8MediaArtsMockUp65.png'; // Replace with your mockup image path
import MockUp80 from './F8MediaArtsMockUp80.png'; // Replace with your mockup image path
import MockUp82 from './F8MediaArtsMockUp82.png'; // Replace with your mockup image path
import MockUp87 from './F8MediaArtsMockUp87.png'; // Replace with your mockup image path
import MockUp89 from './F8MediaArtsMockUp89.png'; // Replace with your mockup image path

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleShowWhatsApp = () => setShowWhatsApp(window.scrollY > 300);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleShowWhatsApp);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleShowWhatsApp);
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const whatsappNumber = "+2348130619004"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hi! I'm interested in F8 Media Arts limited edition pieces. Can you tell me more about the collection?";
  
  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || whatsappMessage;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src={logo} className="h-[6.5rem] w-[6.5rem]" />
              <span className="text-xl font-bold">F8 Media Arts</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-yellow-400 transition-colors duration-200">About</a>
              <a href="#collection" className="hover:text-yellow-400 transition-colors duration-200">Collection</a>
              <a href="#contact" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-200 font-medium">
                Get Notified
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 animate-pulse">
              🎉 OFFICIAL LAUNCH ANNOUNCEMENT
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Something Beautiful is
            <span className="block text-yellow-400">Coming to Your Walls</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            After years of capturing stories through the lens, I'm proud to unveil F8 Media Arts — 
            premium digital art and photography offering limited-edition framed pieces that transform spaces and stir the soul.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.instagram.com/f8mediaarts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition-all duration-200 font-semibold text-lg group"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow @f8mediaarts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a href="#collection" className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              View Collection Preview
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Makes F8 Media Arts Special</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every piece tells a story, every frame holds a moment, every edition is a treasure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Limited Edition</h3>
                <p className="text-gray-400">Only 3 framed editions per artwork, ensuring exclusivity and value.</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Signed & Certified</h3>
                <p className="text-gray-400">Each piece is personally signed, certified, and framed with its unique story.</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Shipping</h3>
                <p className="text-gray-400">Available for shipping both in Nigeria and internationally.</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Curated Sizes</h3>
                <p className="text-gray-400">Thoughtfully sized for both home and office spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed text-justify">
                F8 Media Arts is a premium creative brand that transforms photography into exclusive, high quality framed art for collectors, interior lovers, and art enthusiasts. Born out of a deep love for visual storytelling, we specialize in crafting limited edition art pieces each produced only three times, signed by the artist, and delivered with a Certificate of Authenticity and a unique story.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed text-justify">
                Founded by Shehu Ishola, a visual artist and human duties leader, F8 Media Arts is more than an art studio—it is a journey of perspective, emotion, and artistic truth. From a simple lens to global walls, our mission is to inspire spaces and souls with art that speaks, heals, and beautifies.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed text-justify">
                What makes us different? 98% of our artworks are created from mobile photography, proving that creativity isn’t about the gear—it’s about the eye, the story, and the soul behind the shot. Each piece is thoughtfully curated from real life moments, then reimagined into timeless visuals that reflect nature, serenity, life’s journey, and purposeful design.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed text-justify">
                We do not sell downloadable files. Every artwork is sold only as a framed print, preserving its value and exclusivity.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed text-justify">
                We believe your walls should reflect who you are—not just decorate your space.
              </p>
              <p className="text-lg text-yellow-400 font-semibold leading-relaxed text-justify">
                Are you tired of boring walls?<br />
                Let F8 Media Arts bring meaning and beauty into your world, one frame at a time.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={logo}
                  alt="Art piece preview"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src={MockUp89}
                  alt="Art piece preview"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg">
                Limited to 3 editions each
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section id="collection" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Collection Preview</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our curated selection of limited-edition pieces. Each artwork tells a unique story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                image: MockUp48,
                title: "Urban Reflections",
                editions: "3/3 Available",
                price: "₦85,000",
                size: "16x20 inches"
              },
              {
                image: MockUp53,
                title: "Natural Grace",
                editions: "2/3 Available",
                price: "₦95,000",
                size: "18x24 inches"
              },
              {
                image: MockUp50,
                title: "Timeless Moments",
                editions: "1/3 Available",
                price: "₦120,000",
                size: "20x30 inches"
              },
              {
                image: MockUp54,
                title: "Golden Hour Dreams",
                editions: "3/3 Available",
                price: "₦75,000",
                size: "14x18 inches"
              },
              {
                image: MockUp65,
                title: "Architectural Poetry",
                editions: "3/3 Available",
                price: "₦110,000",
                size: "20x24 inches"
              },
              {
                image: MockUp80,
                title: "Serenity in Motion",
                editions: "2/3 Available",
                price: "₦90,000",
                size: "16x24 inches"
              },
              {
                image: MockUp82,
                title: "Abstract Emotions",
                editions: "3/3 Available",
                price: "₦100,000",
                size: "18x22 inches"
              },
              {
                image: MockUp87,
                title: "Vintage Elegance",
                editions: "1/3 Available",
                price: "₦130,000",
                size: "24x30 inches"
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-700 p-4 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-gray-900/80 text-white px-2 py-1 rounded text-xs font-semibold">
                      {item.size}
                    </div>
                    <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                      {item.editions.includes('1/3') ? 'Last One!' : 'Limited Edition'}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400 text-sm">{item.editions}</p>
                    <p className="text-yellow-400 font-bold text-lg">{item.price}</p>
                  </div>
                  <div className="space-y-2">
                    <button 
                      onClick={() => openWhatsApp(`Hi! I'm interested in "${item.title}" (${item.price}). Is this piece still available?`)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Order via WhatsApp</span>
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      {showWhatsApp && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => openWhatsApp()}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
          <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat with us!
          </div>
        </div>
      )}

      {/* Email Signup */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-gray-400 mb-8">
            Be the first to know about new releases and exclusive offers. Join our VIP list for early access and special previews.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition-colors duration-200 font-semibold whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitted ? 'Subscribed!' : 'Get Notified'}
              </button>
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => openWhatsApp("Hi! I'd like to know more about F8 Media Arts and how to place an order.")}
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200 font-semibold text-lg group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a 
              href="tel:+2348123456789"
              className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 font-semibold text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
          
          {isSubmitted && (
            <p className="mt-4 text-green-400 font-medium">
              Thank you! You'll be the first to know about new releases.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src={logo} className="h-[6.5rem] w-[6.5rem]" />
              <span className="text-xl font-bold">F8 Media Arts</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.instagram.com/f8mediaarts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hello@f8mediaarts.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
              <button
                onClick={() => openWhatsApp()}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <MessageCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 F8 Media Arts. All rights reserved. Made in Nigeria 🇳🇬</p>
            <p className="mt-2 text-sm">WhatsApp: +234 812 345 6789 | Email: hello@f8mediaarts.com</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-yellow-400">#F8MediaArts</span>
              <span className="text-yellow-400">#WallArtThatSpeaks</span>
              <span className="text-yellow-400">#MadeInNigeria</span>
              <span className="text-yellow-400">#LimitedEditionArt</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;