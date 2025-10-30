import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Star, Award, Truck, Shield, Maximize2, Minimize2 } from 'lucide-react';

interface ArtworkModalProps {
  artwork: {
    image: string;
    title: string;
    editions: string;
    price: string;
    size: string;
    description: string;
    story: string;
    technique: string;
    year: string;
    location: string;
    features: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppOrder: (message: string) => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, isOpen, onClose, onWhatsAppOrder }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);
  
  // Early return after all hooks
  if (!isOpen || !artwork) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isFullscreen ? 'p-0' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`${isFullscreen ? 'w-full h-full' : 'bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh]'} overflow-y-auto`}>
        <div className={`sticky top-0 ${isFullscreen ? 'bg-black/90' : 'bg-gray-800'} p-6 border-b border-gray-700 flex justify-between items-center`}>
          <h2 className="text-2xl font-bold text-white">{artwork.title}</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullscreen}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="h-5 w-5" />
              ) : (
                <Maximize2 className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className={isFullscreen ? 'h-[calc(100vh-100px)] flex items-center justify-center' : 'space-y-4'}>
              <div className={`relative ${isFullscreen ? 'w-full h-full flex items-center justify-center' : ''}`}>
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className={`${isFullscreen ? 'max-w-full max-h-full object-contain' : 'w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg'}`}
                />
                {!isFullscreen && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold">
                    {artwork.editions.includes('1/3') ? 'Last Edition!' : 'Limited Edition'}
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <p className="text-gray-400">Year Created</p>
                  <p className="text-white font-semibold">{artwork.year}</p>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg">
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-semibold">{artwork.location}</p>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg">
                  <p className="text-gray-400">Technique</p>
                  <p className="text-white font-semibold">{artwork.technique}</p>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg">
                  <p className="text-gray-400">Availability</p>
                  <p className="text-white font-semibold">{artwork.editions}</p>
                </div>
              </div>
            </div>
            
            {/* Details Section */}
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  The Story Behind
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  {artwork.story}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What's Included</h3>
                <div className="space-y-2">
                  {artwork.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="flex items-center text-gray-300">
                  <Award className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm">Signed & Certified</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm">Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Truck className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm">Global Shipping</span>
                </div>
              </div>
              
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => onWhatsAppOrder(`Hi! I'm interested in "${artwork.title}" (${artwork.price}). Is this piece still available? I'd like to know more about the framing and shipping details.`)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Order via WhatsApp</span>
                </button>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;