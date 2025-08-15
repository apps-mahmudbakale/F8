import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Filter, Grid, List } from 'lucide-react';
import ArtworkModal from './ArtworkModal';
import VeinsOfLight from "../Between the Veins of Light.png"; // Replace with your mockup image path
import WatchShore from "../The Watchful Shore.png"; // Replace with your mockup image path
import SoloWalker from "../Solo Walker.png"; // Replace with your mockup image path
import Foot from "../Foot Steps Beneath The Gazebo.jpg"; // Replace with your mockup image path
import BroadStreet from "../Broad Street.png"; // Replace with your mockup image path
import LatoriOlumo from "../LATORI OLUMO- A Land Scape of Endless Possiblilities .png"; // Replace with your mockup image path
import LatoriOlumo2 from "../LATORI OLUMO- A Tapestry Of Culture and Continuity.png"; // Replace with your mockup image path
import Glow from "../WHEN THE LIGHTS LET'S GO.png"; // Replace with your mockup image path


interface CollectionsPageProps {
  onBack: () => void;
  onWhatsAppOrder: (message: string) => void;
}

const CollectionsPage: React.FC<CollectionsPageProps> = ({ onBack, onWhatsAppOrder }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState('all');

  const artworks = [
    {
      image: VeinsOfLight,
      title: "Between the Veins of Light",
      editions: "3/3 Available",
      price: "₦85,000",
      size: "16x20 inches",
      category: "urban",
      description:
        "A captivating exploration of modern city life through the lens of reflection and shadow. This piece captures the essence of urban solitude and the beauty found in everyday architectural moments.",
      story: `At first glance, the lines seem infinite wavering yet deliberate, like a silent river of ink flowing through time. Each curve, each thread, bends toward a shared silence, inviting the viewer to listen with their eyes. But look deeper. There's a story unfolding between those lines.
This is not a digital dream, nor a topographical map. In case you’re wondering—this is a window blind, captured from the narrow space between two layers of its woven fabric.
Shot from within, the fabric transforms. The inner world of the blind becomes a canyon of shadow and light, with patterns drawn like ancient markings on sacred stone. The lines are threads of memory, interlaced in harmony and tension. Some are crisp and clear like recent thoughts. Others fade into the background, blurred by depth, softened by distance. They are the forgotten whispers of time passing.
In the middle, where the two layers almost touch, a darkened vein runs down like a quiet heartbeat, grounding the entire piece. It is both division and connection. A path through uncertainty.
The blurred, fading lines deeper within the frame are like memories you almost recall, familiar but untouchable. They remind us that clarity isn't always found in sharpness. Sometimes, it's in the blur, the suggestion of what was, or what could be.
This image is a meditation. It asks you to slow down. To trace the veins of everyday objects and find the extraordinary in their form. To stand, for a moment, between two layers of something you thought you understood, and discover a new language in its silence.
This is not just fabric. It is structure, it is softness, it is shadow and light.
 And for a moment, it is everything.
`,
      technique: "Digital Photography",
      year: "July 13, 2025",
      location: "Alimosho Lagos State.",
      features: [
        "Museum-quality archival print",
        "Premium wooden frame with matting",
        "Certificate of authenticity",
        "Artist signature and edition number",
        "Professional packaging for shipping",
        "Care instructions included",
      ],
    },
    {
      image: WatchShore,
      title: "The Watchful Shore",
      editions: "2/3 Available",
      price: "₦95,000",
      size: "18x24 inches",
      category: "Adventurer By the Sea",
      description:
        "An intimate portrait of nature's delicate balance, showcasing the ethereal beauty of organic forms in their natural habitat.",
      story: `A lone tree leans over the rocky shoreline, as if watching the sea. In the distance, a red cargo ship drifts quietly across the horizon. The scene is simple, yet profound—a quiet moment where land, sea, and sky meet to whisper a deeper message.
The Story Behind the Art
This piece was born from a quiet morning at Tarkwa Bay during a location visit for a regular camping event. With only a phone in hand, what was meant to be a routine scouting trip became a moment of unexpected stillness and insight.
The ocean was calm. The rocks stood firm. A red cargo ship slowly crossed the horizon, and beside it, a wind-bent tree remained rooted in place. In that still moment, everything seemed to speak—not loudly, but clearly.
The ship was later named “Ireti”, meaning Hope in Yoruba. Though its real name is unknown, it carries the spirit of what it represents—the courage to keep moving, even at a slow pace. The rocks symbolize life’s challenges. The waves remind us of constant change. And the lone tree stands tall as a symbol of endurance.
The Watchful Shore is not just a photograph; it is a quiet message captured in time—one that speaks of calm strength, personal reflection, and the steady journey forward.
Now preserved in sleek acrylic glass, this artwork is meant to bring that same spirit into your space—a daily reminder to stay rooted, stay hopeful, and keep moving.
`,
      technique: "Fine Art Photography",
      year: "July 13, 2025",
      location: "Ibese, Lagos, State",
      features: [
        "Giclée print on premium paper",
        "Hand-selected frame with conservation matting",
        "UV-protective glass",
        "Signed certificate of authenticity",
        "Archival quality guaranteed for 100+ years",
        "Custom packaging with care instructions",
      ],
    },
    {
      image: SoloWalker,
      title: "Solo Walker",
      editions: "1/3 Available",
      price: "₦120,000",
      size: "20x30 inches",
      category: "Adeventurer By the Sea",
      description:
        "A powerful study in human emotion and connection, this piece captures the raw authenticity of a fleeting moment.",
      story: `There’s a certain kind of peace that only solitude can teach. Solo Walker was born from a quiet evening on the shoreline—where the ocean whispered, the sky blushed in pastel hues, and the world seemed to slow just for a moment.
The silhouette of the lone figure, headphones on, barefoot in the cool water, isn’t about loneliness, it’s about presence. About walking your own pace in a noisy world. It’s about healing through rhythm, reflection, and reclaiming stillness.
Captured during golden hour, the colors tell their own story:
Soft orange and apricot streak the sky, symbolizing warmth and hope.
Lavender and dusty blue clouds float like unspoken thoughts.
"Amber reflections ripple across the water, grounding the soul to the earth."
The silence in the image is not empty it’s full. Full of thought. Full of freedom. Full of the sacred ritual of walking alone without being lost.
This artwork is for the seeker. The grounded dreamer. The person who knows that peace is often found with one step… and then another.
`,
      technique: "Portrait Photography",
      year: "July 13, 2025",
      location: "Takwabay, Lagos,State",
      features: [
        "Large format museum print",
        "Premium hardwood frame with gold accents",
        "Museum-grade matting",
        "Certificate with detailed provenance",
        "Artist's personal note about the piece",
        "White-glove delivery service available",
      ],
    },
    {
      image: Foot,
      title: "Foot Print Beneath the Gazebo",
      editions: "3/3 Available",
      price: "₦75,000",
      size: "14x18 inches",
      category: "Beneath the Gazebo",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `As the sun began to rise on a quiet coastal morning, the beach still wore the memory of last night’s gathering; its surface a tapestry of footprints and shimmering specks of golden light.
The footprints, some deep and confident, others light and hesitant, told stories of wanderers who had danced, strolled, and stood still under the wooden frame of an old gazebo. Above them, a lattice of light cast through the slatted roof—fell in dotted patterns, as though the stars themselves had visited and left their traces behind.
This wasn’t just sand. It was a journal.
Every indentation was a moment:
 A child chasing waves, her small feet bouncing with joy.
 Two lovers walking barefoot side by side, the space between their steps whispering secrets.
 A man who stood still for a while perhaps reflecting, perhaps simply breathing.
The light added magic. Golden orbs scattered across the scene, creating an almost musical rhythm to the silence. They didn’t just illuminate the footprints; they elevated them, turning ordinary impressions into sacred marks of presence.
This art, caught in a fleeting moment, captures more than just where people walked. It captures why they walked. Under the soft embrace of morning light, the sand beneath the gazebo became a canvas of souls - a brief memory of existence before the tide comes to wash it all away.
`,
      technique: "Landscape Photography",
      year: "July 13, 2025",
      location: "Ibese, Lagos,State",
      features: [
        "High-quality photographic print",
        "Classic wooden frame with natural finish",
        "Acid-free matting",
        "Signed and numbered by artist",
        "Protective packaging",
        "Digital certificate of authenticity",
      ],
    },
    {
      image: BroadStreet,
      title: "Broad Street",
      editions: "3/3 Available",
      price: "₦75,000",
      size: "14x18 inches",
      category: "Beneath the Gazebo",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `As the sun began to rise on a quiet coastal morning, the beach still wore the memory of last night’s gathering; its surface a tapestry of footprints and shimmering specks of golden light.
The footprints, some deep and confident, others light and hesitant, told stories of wanderers who had danced, strolled, and stood still under the wooden frame of an old gazebo. Above them, a lattice of light cast through the slatted roof—fell in dotted patterns, as though the stars themselves had visited and left their traces behind.
This wasn’t just sand. It was a journal.
Every indentation was a moment:
 A child chasing waves, her small feet bouncing with joy.
 Two lovers walking barefoot side by side, the space between their steps whispering secrets.
 A man who stood still for a while perhaps reflecting, perhaps simply breathing.
The light added magic. Golden orbs scattered across the scene, creating an almost musical rhythm to the silence. They didn’t just illuminate the footprints; they elevated them, turning ordinary impressions into sacred marks of presence.
This art, caught in a fleeting moment, captures more than just where people walked. It captures why they walked. Under the soft embrace of morning light, the sand beneath the gazebo became a canvas of souls - a brief memory of existence before the tide comes to wash it all away.
`,
      technique: "Landscape Photography",
      year: "July 13, 2025",
      location: "Ibese, Lagos,State",
      features: [
        "High-quality photographic print",
        "Classic wooden frame with natural finish",
        "Acid-free matting",
        "Signed and numbered by artist",
        "Protective packaging",
        "Digital certificate of authenticity",
      ],
    },
    {
      image: LatoriOlumo,
      title: "Latori Olumo",
      editions: "3/3 Available",
      price: "₦75,000",
      size: "14x18 inches",
      category: "Latori Olumo",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `There are moments when the earth opens her palms and shows you all she has held for centuries. This is one of those moments.
From the ancient height of Olumo Rock, the spirit of the land stretches wide, breathing through red rooftops, winding rivers, and green fields that roll like ancestral cloth across the horizon. This is Latori Olumo, the view from the crown of one of Yoruba land’s most sacred stones. And what a view it is.
Each rooftop tells a story. Each bend in the river holds a prayer. The houses huddle close like family at evening fire, sharing warmth, history, and laughter. It is not chaos. It is rhythm. It is heartbeat. It is home.
Far beyond the homes, the river glides — calm but full of wisdom. It has seen kings rise and empires settle, and it still flows, quietly blessing the land as it always has. The green stretches of earth sing softly to the sky above, echoing hope, resilience, and the quiet promise of abundance.
This land does not whisper. It speaks. It speaks in the language of old gods and market women, of drummers and stone carvers, of warriors and children. Every tile, every tree, every path holds the voice of a people who have stood, who have built, who have endured.
Latori Olumo is more than a view. It is a mirror of what is possible when we rise. It is a reminder that our stories are not small. That our lands are not empty. That our futures are not elsewhere — they are here, rooted in the soil and soul of who we are.
So stand on Olumo Rock, breathe deeply, and look again. What you see is not just a town.
 What you see is legacy.
 What you see is promise.
 What you see... is us.
`,
      technique: "Landscape Photography",
      year: "Oct 12, 2024",
      location: " Abeokuta, Ogun St",
      features: [
        "High-quality photographic print",
        "Classic wooden frame with natural finish",
        "Acid-free matting",
        "Signed and numbered by artist",
        "Protective packaging",
        "Digital certificate of authenticity",
      ],
    },
    {
      image: LatoriOlumo2,
      title: "Latori Olumo",
      editions: "3/3 Available",
      price: "₦75,000",
      size: "14x18 inches",
      category: "Latori Olumo",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `From Above the Beautiful Walls of Olumo Rock  A Tapestry of Culture and Continuity
Captured in Abeokuta, Ogun State
From this sacred height, the heartbeat of a people rises in waves  rooftops pressed close like whispered stories, streets winding through time like old proverbs. This is Latori Olumo, seen again through a different lens. Not the wide embrace of the landscape this time, but the deep, soulful rhythm of a city that remembers.
At the center stands a proud cathedral, painted in bold red and white like royalty wrapped in aso-oke. It anchors the town not just in faith, but in history. Around it, generations of homes, memories, and everyday life unfold like the pages of an old family book. From this view, you see not just architecture, but identity.
These rooftops wear the rust of resilience. They speak of a people who have built with what they had, and held tight to what mattered  community, craft, and connection. You see it in the closeness of the homes, the quiet strength of the walls, the familiar dance of color across the cityscape.
Look beyond the buildings and you’ll see the horizon stretch, as if calling this place forward into something even greater. But Abeokuta is not in a hurry. It knows who it is. And from the shoulders of Olumo Rock, you can feel that knowing settle in your chest.
This image is not frozen. It lives. It pulses with life, love, laughter, and legacy. It says, “We are here. We have always been here.” And standing above it all, the rock watches like an elder quiet, steady, and proud.
This, too, is Latori Olumo.
 A view not just of a city, but of a spirit.
 A reminder that every street has a story, and every story deserves to be seen.
.
`,
      technique: "Landscape Photography",
      year: "Oct 12, 2024",
      location: " Abeokuta, Ogun St",
      features: [
        "High-quality photographic print",
        "Classic wooden frame with natural finish",
        "Acid-free matting",
        "Signed and numbered by artist",
        "Protective packaging",
        "Digital certificate of authenticity",
      ],
    },
     {
      image: Glow,
      title: "The Glow That Gives Way",
      editions: "3/3 Available",
      price: "₦75,000",
      size: "14x18 inches",
      category: "Sunset In My Pent",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `From Above the Beautiful Walls of Olumo Rock  A Tapestry of Culture and Continuity
Captured in Abeokuta, Ogun State
From this sacred height, the heartbeat of a people rises in waves  rooftops pressed close like whispered stories, streets winding through time like old proverbs. This is Latori Olumo, seen again through a different lens. Not the wide embrace of the landscape this time, but the deep, soulful rhythm of a city that remembers.
At the center stands a proud cathedral, painted in bold red and white like royalty wrapped in aso-oke. It anchors the town not just in faith, but in history. Around it, generations of homes, memories, and everyday life unfold like the pages of an old family book. From this view, you see not just architecture, but identity.
These rooftops wear the rust of resilience. They speak of a people who have built with what they had, and held tight to what mattered  community, craft, and connection. You see it in the closeness of the homes, the quiet strength of the walls, the familiar dance of color across the cityscape.
Look beyond the buildings and you’ll see the horizon stretch, as if calling this place forward into something even greater. But Abeokuta is not in a hurry. It knows who it is. And from the shoulders of Olumo Rock, you can feel that knowing settle in your chest.
This image is not frozen. It lives. It pulses with life, love, laughter, and legacy. It says, “We are here. We have always been here.” And standing above it all, the rock watches like an elder quiet, steady, and proud.
This, too, is Latori Olumo.
 A view not just of a city, but of a spirit.
 A reminder that every street has a story, and every story deserves to be seen.
.
`,
      technique: "Landscape Photography",
      year: "Nov 13, 2024",
      location: "Alimosho Lagos State",
      features: [
        "High-quality photographic print",
        "Classic wooden frame with natural finish",
        "Acid-free matting",
        "Signed and numbered by artist",
        "Protective packaging",
        "Digital certificate of authenticity",
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'urban', name: 'Urban' },
    { id: 'nature', name: 'Nature' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'vintage', name: 'Vintage' }
  ];

  const filteredArtworks = filterCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filterCategory);

  const openModal = (artwork: any) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </button>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-2xl font-bold">F8 Media Arts Collection</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Filter className="h-5 w-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  filterCategory === category.id
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Collection Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
        </div>

        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredArtworks.map((artwork, index) => (
            <div key={index} className={`group cursor-pointer ${
              viewMode === 'list' ? 'flex space-x-6' : ''
            }`}>
              <div className={`bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 ${
                viewMode === 'list' ? 'flex space-x-6 w-full' : ''
              }`}>
                <div className={`relative overflow-hidden rounded-lg ${
                  viewMode === 'list' ? 'w-64 flex-shrink-0' : 'mb-4'
                }`}>
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-48' : 'w-full h-80'
                    }`}
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {artwork.size}
                  </div>
                  <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                    {artwork.editions.includes('1/3') ? 'Last One!' : 'Limited Edition'}
                  </div>
                </div>
                
                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                  {viewMode === 'list' && (
                    <p className="text-gray-400 mb-4 line-clamp-3">{artwork.description}</p>
                  )}
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400 text-sm">{artwork.editions}</p>
                  </div>
                  <div className="space-y-2">
                    <button 
                      onClick={() => onWhatsAppOrder(`Hi! I'm interested in "${artwork.title}" (${artwork.price}). Is this piece still available?`)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Order via WhatsApp</span>
                    </button>
                    <button 
                      onClick={() => openModal(artwork)}
                      className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={closeModal}
        onWhatsAppOrder={onWhatsAppOrder}
      />
    </div>
  );
};

export default CollectionsPage;