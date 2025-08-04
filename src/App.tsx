import React, { useState, useEffect } from 'react';
import { Camera, Award, Truck, Users, Instagram, Mail, ArrowRight, Check, Star, Globe } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-yellow-400" />
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
            <button className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
              View Collection Preview
            </button>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Wall Art That Speaks</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Whether you're an art lover, a collector, or someone who simply wants to bring beauty and meaning into your space — this drop is for you.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Each piece in the F8 Media Arts collection represents years of storytelling through photography, now transformed into premium wall art that transforms any space into a gallery of emotion and beauty.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Premium Quality</h4>
                    <p className="text-gray-400 text-sm">Museum-grade materials and professional framing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Original Stories</h4>
                    <p className="text-gray-400 text-sm">Each piece comes with its unique narrative</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1760900/pexels-photo-1760900.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Art piece preview"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
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
              Get a glimpse of what's coming. Official collection goes live soon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
                title: "Urban Reflections",
                editions: "3/3 Available"
              },
              {
                image: "https://images.pexels.com/photos/1070346/pexels-photo-1070346.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
                title: "Natural Grace",
                editions: "3/3 Available"
              },
              {
                image: "https://images.pexels.com/photos/1693100/pexels-photo-1693100.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
                title: "Timeless Moments",
                editions: "3/3 Available"
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
                    <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                      Limited Edition
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.editions}</p>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm text-gray-300">Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-gray-400 mb-8">
            Be the first to know when the official collection goes live. Join our exclusive list for early access and special previews.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
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
          
          {isSubmitted && (
            <p className="mt-4 text-green-400 font-medium">
              Thank you! You'll be the first to know when we launch.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Camera className="h-8 w-8 text-yellow-400" />
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
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 F8 Media Arts. All rights reserved. Made in Nigeria 🇳🇬</p>
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