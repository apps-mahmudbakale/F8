import React, { useState, useEffect } from "react";
import {
  Camera,
  Award,
  Truck,
  Users,
  Instagram,
  Mail,
  ArrowRight,
  Check,
  Star,
  Globe,
  MessageCircle,
  Phone,
} from "lucide-react";
import CollectionsPage from "./components/CollectionsPage";
import ArtworkModal from "./components/ArtworkModal";
import logo from "./logo.png"; // Replace with your logo path
import VeinsOfLight from "./Frames/3 of 3 /Between the Veins of Light.jpg"; // Replace with your mockup image path
import WatchShore from "./Frames/3 of 3 /THE WATCHFUL SHORE.jpg"; // Replace with your mockup image path
import SoloWalker from "./Frames/3 of 3 /SOLO WALKER.jpg"; // Replace with your mockup image path
import Foot from "./Frames/3 of 3 /Foot Print Beneath the Gazebo.jpg"; // Replace with your mockup image path
import BroadStreet from "./Frames/9 of 9/BROAD STREET.jpg"; // Replace with your mockup image path
import LatoriOlumo from "./Frames/9 of 9/LATORI OLUMO- A Land Scape of Endless Possiblilities.jpg"; // Replace with your mockup image path
import LatoriOlumo2 from "./Frames/LATORI OLUMO- A Tapestry Of Culture and Continuity.jpg"; // Replace with your mockup image path
import Glow from "./Frames/9 of 9/THE GLOW THAT GIVES WAY.jpg"; // Replace with your mockup image path
import OceanSpeaks from "./Frames/9 of 9/Ocean Speaks.jpg"; // Replace with your mockup image path
import MockUp89 from "./F8MediaArtsMockUp89.png"; // Replace with your mockup image path
import BG from "./Frames/IMG_1465.png";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "collections">(
    "home"
  );
  interface Artwork {
    image: string;
    title: string;
    editions: string;
    price: string;
    sizes: { size: string; price: string }[];
    category: string;
    description: string;
    story: string;
    technique: string;
    year: string;
    location: string;
    features: string[];
  }

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, number>>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleShowWhatsApp = () => setShowWhatsApp(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleShowWhatsApp);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleShowWhatsApp);
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const whatsappNumber = "+2348130619004"; // Replace with actual WhatsApp number
  const whatsappMessage =
    "Hi! I'm interested in F8 Media Arts limited edition pieces. Can you tell me more about the collection?";

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || whatsappMessage;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const artworks = [
   {
      image: VeinsOfLight,
      title: "Between the Veins of Light",
      editions: "3/3 Available",
      sizes: [
        { size: "18x24 inches", price: "₦250,000" },
        { size: "24x36 inches", price: "₦350,000" },
      ],
      category: "Collector’s Elite",
      description:
        "A captivating exploration of modern city life through the lens of reflection and shadow. This piece captures the essence of urban solitude and the beauty found in everyday architectural moments.",
      story: `At first glance, the lines seem infinite wavering yet deliberate, like a silent river of ink flowing through time. Each curve, each thread, bends toward a shared silence, inviting the viewer to listen with their eyes. But look deeper. There's a story unfolding between those lines.
This is not a digital dream, nor a topographical map. In case you’re wondering, this is a window blind, captured from the narrow space between two layers of its woven fabric.
Shot from within, the fabric transforms. The inner world of the blind becomes a canyon of shadow and light, with patterns drawn like ancient markings on sacred stone. The lines are threads of memory, interlaced in harmony and tension. Some are crisp and clear like recent thoughts. Others fade into the background, blurred by depth, softened by distance. They are the forgotten whispers of time passing.
In the middle, where the two layers almost touch, a darkened vein runs down like a quiet heartbeat, grounding the entire piece. It is both division and connection. A path through uncertainty.
The blurred, fading lines deeper within the frame are like memories you almost recall, familiar but untouchable. They remind us that clarity isn't always found in sharpness. Sometimes, it's in the blur, the suggestion of what was, or what could be.
This image is a meditation. It asks you to slow down. To trace the veins of everyday objects and find the extraordinary in their form. To stand, for a moment, between two layers of something you thought you understood, and discover a new language in its silence.
This is not just fabric. It is structure, it is softness, it is shadow and light.
 And for a moment, it is everything..
`,
      technique: "Digital Photography",
      year: "July 13, 2025",
      location: "Alimosho Lagos State.",
      features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: WatchShore,
      title: "The Watchful Shore",
      editions: "3/3 Available",
      price: "₦260,000",
      sizes: [
        { size: "18x24 inches", price: "₦260,000" },
        { size: "24x36 inches", price: "₦360,000" },
      ],
      category: "Collector’s Elite",
      description:
        "An intimate portrait of nature's delicate balance, showcasing the ethereal beauty of organic forms in their natural habitat.",
      story: `A lone tree leans over the rocky shoreline, as if watching the sea. In the distance, a red cargo ship drifts quietly across the horizon. The scene is simple, yet profound  a quiet moment where land, sea, and sky meet to whisper a deeper message.
This piece was born from a quiet morning at Tarkwa Bay during a location visit for a regular camping event. With only a phone in hand, what was meant to be a routine scouting trip became a moment of unexpected stillness and insight.
The ocean was calm. The rocks stood firm. A red cargo ship slowly crossed the horizon, and beside it, a wind-bent tree remained rooted in place. In that still moment, everything seemed to speak  not loudly, but clearly.
The ship was later named “Ireti”, meaning Hope in Yoruba. Though its real name is unknown, it carries the spirit of what it represents the courage to keep moving, even at a slow pace. The rocks symbolize life’s challenges. The waves remind us of constant change. And the lone tree stands tall as a symbol of endurance.
The Watchful Shore is not just a photograph; it is a quiet message captured in time one that speaks of calm strength, personal reflection, and the steady journey forward.
Now preserved in sleek acrylic glass, this artwork is meant to bring that same spirit into your space a daily reminder to stay rooted, stay hopeful, and keep moving.
Thank you for collecting this piece.
 You haven’t just purchased art you’ve chosen a story that speaks..
`,
      technique: "Fine Art Photography",
      year: " Nov 12, 2023",
      location: "Takwabay, Lagos,State.",
      features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: SoloWalker,
      title: "Solo Walker",
      editions: "3/3 Available",
      price: "₦240,000",
      sizes: [
        { size: "18x24 inches", price: "₦240,000" },
        { size: "24x36 inches", price: "₦340,000" },
      ],
      category: "Collector’s Elite",
      description:
        "A powerful study in human emotion and connection, this piece captures the raw authenticity of a fleeting moment.",
      story: `There’s a certain kind of peace that only solitude can teach. Solo Walker was born from a quiet evening on the shoreline where the ocean whispered, the sky blushed in pastel hues, and the world seemed to slow just for a moment.

The silhouette of the lone figure, headphones on, barefoot in the cool water, isn’t about loneliness, it’s about presence. About walking your own pace in a noisy world. It’s about healing through rhythm, reflection, and reclaiming stillness.
Captured during golden hour, the colours tell their own story:
Soft orange and apricot streak the sky, symbolizing warmth and hope.
Lavender and dusty blue clouds float like unspoken thoughts.
Amber reflections ripple across the water, grounding the soul to the earth.
The silence in the image is not empty it’s full. Full of thought. Full of freedom. Full of the sacred ritual of walking alone without being lost.
This artwork is for the seeker. The grounded dreamer. The person who knows that peace is often found with one step… and then another.
`,
      technique: "Portrait Photography",
      year: "Nov 12, 2023",
      location: "Takwabay, Lagos,State",
      features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
     {
      image: Foot,
      title: "Foot Print Beneath the Gazebo",
      editions: "3/3 Available",
      price: "₦230,000",
      sizes: [
        { size: "18x24 inches", price: "₦230,000" },
        { size: "24x36 inches", price: "₦330,000" },
      ],
      category: "Collector’s Elite",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `There’s a certain kind of peace that only solitude can teach. Solo Walker was born from a quiet evening on the shoreline—where the ocean whispered, the sky blushed in pastel hues, and the world seemed to slow just for a moment.

The silhouette of the lone figure, headphones on, barefoot in the cool water, isn’t about loneliness, it’s about presence. About walking your own pace in a noisy world. It’s about healing through rhythm, reflection, and reclaiming stillness.
Captured during golden hour, the colors tell their own story:
Soft orange and apricot streak the sky, symbolizing warmth and hope.
Lavender and dusty blue clouds float like unspoken thoughts.
Amber reflections ripple across the water, grounding the soul to the earth.
The silence in the image is not empty it’s full. Full of thought. Full of freedom. Full of the sacred ritual of walking alone without being lost.
This artwork is for the seeker. The grounded dreamer. The person who knows that peace is often found with one step… and then another.
`,
      technique: "Landscape Photography",
      year: "July 13, 2025",
      location: "Ibese, Lagos,State.",
      features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: BroadStreet,
      title: "Broad Street",
      editions: "9/9 Available",
      price: "₦145,000",
      sizes: [
        { size: "18x24 inches", price: "₦145,000" },
        { size: "24x36 inches", price: "₦210,000" },
      ],
      category: "Signature Edition",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `Broad Street is one of Lagos’ oldest roads, a place where time has folded generations into its pavements. Along its stretch, colonial grace and modern ambition stand shoulder to shoulder reminders of where we have come from and where we are going.
The tall buildings cast long shadows, but they also reflect the light of possibility. Some of these structures have watched the city change from a sleepy port town into a restless giant; they have seen horses give way to cars, and market stalls grow into towers of glass. They hold stories of traders, artisans, families, and dreamers each adding their voice to the city’s ever-expanding chorus.
Down below, the street itself breathes with commerce. Shops brim with textiles, electronics, books, and everything in between. The sidewalks are lined with signs of human determination, men and women who wake before the sun, who build futures from small stalls and bright smiles. Here, every exchange is more than business; it is a handshake of hope, a nod of trust, a promise of tomorrow.
The architecture tells its own tale: colonial-era buildings with grand facades whisper of Lagos’ past, while sleek modern offices gleam with the city’s hunger for innovation. Together, they teach us that resilience is born not only from holding on to our roots, but also from daring to rise above them.
Standing on Broad Street, you feel it; the quiet invitation to keep going. To believe that every step taken in honest work adds a brick to something bigger than yourself. That success is not always sudden, but built patiently over days and decades.
This is not just a road.
 It is a testament.
 A place where history shakes hands with possibility.
 A reminder that as long as we walk with purpose, the streets we travel can carry us farther than we ever imagined.
This is Broad Street.
 And it belongs to every heart that beats with hope.
`,
      technique: "Landscape Photography",
      year: "Dec. 28, 2022",
      location: "Lagos,State",
      features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
      {
      image: LatoriOlumo,
      title: "Latori Olumo – Landscape of Endless Possibilities",
      editions: "9/9 Available",
      price: "₦145,000",
      sizes: [
        { size: "18x24 inches", price: "₦145,000" },
        { size: "24x36 inches", price: "₦210,000" },
      ],
      category: "Signature Edition",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `TThere are moments when the earth opens her palms and shows you all she has held for centuries. This is one of those moments.
From the ancient height of Olumo Rock, the spirit of the land stretches wide, breathing through red rooftops, winding rivers, and green fields that roll like ancestral cloth across the horizon. This is Latori Olumo, the view from the crown of one of Yoruba land’s most sacred stones. And what a view it is.
Each rooftop tells a story. Each bend in the river holds a prayer. The houses huddle close like family at evening fire, sharing warmth, history, and laughter. It is not chaos. It is rhythm. It is heartbeat. It is home.

Far beyond the homes, the river glides calm but full of wisdom. It has seen kings rise and empires settle, and it still flows, quietly blessing the land as it always has. The green stretches of earth sing softly to the sky above, echoing hope, resilience, and the quiet promise of abundance.

This land does not whisper. It speaks. It speaks in the language of old gods and market women, of drummers and stone carvers, of warriors and children. Every tile, every tree, every path holds the voice of a people who have stood, who have built, who have endured.
Latori Olumo is more than a view. It is a mirror of what is possible when we rise. It is a reminder that our stories are not small. That our lands are not empty. That our futures are not elsewhere they are here, rooted in the soil and soul of who we are.
So stand on Olumo Rock, breathe deeply, and look again. What you see is not just a town.
What you see is legacy.
What you see is promise.
What you see... is us.
`,
      technique: "Landscape Photography",
      year: "Oct 12, 2024",
      location: " Abeokuta, Ogun State",
      features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
     {
      image: LatoriOlumo2,
      title: "Latori Olumo – Tapestry of Culture & Continuity",
      editions: "9/9 Available",
      price: "₦150,000",
      sizes: [
        { size: "18x24 inches", price: "₦150,000" },
        { size: "24x36 inches", price: "₦220,000" },
      ],
      category: "Signature Edition",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `From Above the Beautiful Walls of Olumo Rock  A Tapestry of Culture and Continuity
Captured in Abeokuta, Ogun State
From this sacred height, the heartbeat of a people rises in waves  rooftops pressed close like whispered stories, streets winding through time like old proverbs. This is Latori Olumo, seen again through a different lens. Not the wide embrace of the landscape this time, but the deep, soulful rhythm of a city that remembers.
At the center stands a proud cathedral, painted in bold red and white like royalty wrapped in aso-oke. It anchors the town not just in faith, but in history. Around it, generations of homes, memories, and everyday life unfold like the pages of an old family book. From this view, you see not just architecture, but identity.
These rooftops wear the rust of resilience. They speak of a people who have built with what they had, and held tight to what mattered which is community, craft, and connection. You see it in the closeness of the homes, the quiet strength of the walls, the familiar dance of colour across the cityscape.

Look beyond the buildings and you’ll see the horizon stretch, as if calling this place forward into something even greater. But Abeokuta is not in a hurry. It knows who it is. And from the shoulders of Olumo Rock, you can feel that knowing settle in your chest.
This image is not frozen. It lives. It pulses with life, love, laughter, and legacy. It says, “We are here. We have always been here.” And standing above it all, the rock watches like an elder quiet, steady, and proud.

This, too, is Latori Olumo.
 A view not just of a city, but of a spirit.
 A reminder that every street has a City, and every story deserves to be seen
.
`,
      technique: "Landscape Photography",
      year: "Oct 12, 2024",
      location: " Abeokuta, Ogun St",
     features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Glow,
      title: "Glow That Gives Way",
      editions: "9/9 Available",
      price: "₦120,000",
      sizes: [
        { size: "18x24 inches", price: "₦120,000" },
        { size: "24x36 inches", price: "₦180,000" },
      ],
      category: "Signature Edition",
      description:
        "A warm, inviting landscape that captures the magic of golden hour light.",
      story: `On the evening of November 19, 2024, in Alimosho, Lagos, the sun rested low in the sky, a molten sphere glowing with the warmth of a promise kept. Its light draped over the world like a soft farewell, touching the heaped rooftop below  a dark silhouette rising like the peak of some distant mountain. Above, the clouds drifted in muted tones, as if the day itself was breathing its last sigh before surrendering to night.

But this was no final goodbye. The sun was not retreating in loss; it was stepping aside in grace, making room for the moon to rise. In that quiet exchange, the heavens whispered an ancient truth, that the purpose of shining is not to dominate the sky, but to ensure the world never falls into darkness. Each takes its turn, each trusts the other to keep the light alive.

How often do we guard our own glow too tightly, fearing it will fade if shared? Yet here, the sun teaches a different way, that the truest brilliance lies in knowing when to step back so another can rise. The faded clouds tell of transitions that need no struggle, no bitterness. The rooftop’s peak like a mountain against the horizon reminds us that we, too, can be strong enough to lift others higher.

For in the great turning of day into night, we see the quiet heroism of letting go. And in that surrender, the world remains forever bathed in light..
`,
      technique: "Landscape Photography",
      year: "Nov 19, 2024",
      location: "Alimosho Lagos State",
      features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
      {
      image: OceanSpeaks,
      title: "Ocean Speaks",
      editions: "9/9 Available",
      price: "₦140,000",
      sizes: [
        { size: "18x24 inches", price: "₦140,000" },
        { size: "24x36 inches", price: "₦205,000" },
      ],
      category: "Signature Edition",
      description:
        "",
      story: `Every wave that meets the sand is not just water breaking it is a conversation, ancient and ongoing. The ocean speaks in whispers and roars, pulling forward then retreating, as if telling the land secrets too heavy to hold in one breath. 

The shore listens quietly, patient and unresisting, knowing that each wave, no matter how fleeting, leaves its mark. Together, they compose a language without words rhythm, silence, return. Out in the distance, ships float like quiet witnesses, watching but never interfering. They remind us that not every presence in our lives is meant to touch us directly; some are simply there to frame the horizon, to remind us of scale. There is something both eternal and fragile in this meeting place. 

The sea will always come back. The sand will always yield. And between them, stories of time, of change, of surrender, and of persistence will always be told. We, too, are like this shoreline sometimes the sea, relentless and searching; sometimes the sand, yielding yet enduring. 

Growth is not always about building upward, sometimes it is about learning how to return, how to meet, how to let go, and how to remain. The shore never fears the tide, because it knows: what leaves will always return in another form.
`,
      technique: "Landscape Photography",
      year: "Nov 25, 2023",
      location: "Amuwo-Odofin, Lagos",
     features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
  ];

  const openModal = (artwork: any) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  if (currentPage === "collections") {
    return (
      <CollectionsPage
        onBack={() => setCurrentPage("home")}
        onWhatsAppOrder={openWhatsApp}
      />
    );
  }

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
              <a
                href="#about"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#collection"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                {" "}
                Collection{" "}
              </a>
              <a
                href="#contact"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-200 font-medium"
              >
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
            backgroundImage:
              `url(${BG})`,
            transform: `translateY(${scrollY * 0.5}px)`,
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
            <span className="block text-yellow-400">
              {" "}
              Coming to Your Walls{" "}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            After years of capturing stories through the lens, I'm proud to
            unveil F8 Media Arts — premium digital art and photography offering
            limited - edition framed pieces that transform spaces and stir the
            soul.
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
            <button
              onClick={() => setCurrentPage("collections")}
              className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 font-semibold text-lg"
            >
              View Full Collection
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {" "}
              What Makes F8 Media Arts Special{" "}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every piece tells a story, every frame holds a moment, every
              edition is a treasure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Limited Edition{" "}
                </h3>
                <p className="text-gray-400">
                  {" "}
                  Only 3 framed editions per artwork, ensuring exclusivity and
                  value.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Signed & Certified{" "}
                </h3>
                <p className="text-gray-400">
                  {" "}
                  Each piece is personally signed, certified, and framed with
                  its unique story.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  Global Shipping{" "}
                </h3>
                <p className="text-gray-400">
                  {" "}
                  Available for shipping both in Nigeria and internationally.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2"> Curated Sizes </h3>
                <p className="text-gray-400">
                  {" "}
                  Thoughtfully sized for both home and office spaces.
                </p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {" "}
              Collection Preview{" "}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our curated selection of limited - edition pieces.Each
              artwork tells a unique story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {artworks.slice(0, 9).map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gray-700 p-4 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-lg mb-4 flex-grow">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                        {item.editions.includes("1/3")
                          ? "Last One!"
                          : "Limited Edition"}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-gray-400 text-sm">{item.editions}</p>
                      <div className="text-yellow-400 font-medium">
                          {item.sizes[selectedSizes[index] || 0]?.size}: {item.sizes[selectedSizes[index] || 0]?.price}
                      </div>
                    </div>
                    <div className="mt-auto space-y-2">
                      {item.sizes.map((size, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSizes(prev => ({
                              ...prev,
                              [index]: idx
                            }));
                          }}
                          className={`w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 mb-2 last:mb-0 ${
                            selectedSizes[index] === idx 
                              ? 'bg-yellow-500 text-gray-900' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {size.size}
                        </button>
                      ))}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const selectedSize = item.sizes[selectedSizes[index] || 0];
                          openWhatsApp(
                            `Hi! I'm interested in "${item.title}" (${selectedSize.size}, ${selectedSize.price}). Is this piece still available?`
                          );
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Order via WhatsApp</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item);
                        }}
                        className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage("collections")}
              className="inline-flex items-center px-8 py-3 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition-all duration-200 font-semibold text-lg group"
            >
              View Full Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {" "}
            Stay in the Loop{" "}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Be the first to know about new releases and exclusive offers.Join
            our VIP list for early access and special previews.
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
                {isSubmitted ? "Subscribed!" : "Get Notified"}
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hi! I'd like to know more about F8 Media Arts and how to place an order."
                )
              }
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
            <p>
              & copy; 2025 F8 Media Arts.All rights reserved.Made in Nigeria 🇳🇬
            </p>
            <p className="mt-2 text-sm">
              {" "}
              WhatsApp: +234 812 345 6789 | Email: hello @f8mediaarts.com
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-yellow-400"> #F8MediaArts </span>
              <span className="text-yellow-400"> #WallArtThatSpeaks </span>
              <span className="text-yellow-400"> #MadeInNigeria </span>
              <span className="text-yellow-400"> #LimitedEditionArt </span>
            </div>
          </div>
        </div>
      </footer>

      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={closeModal}
        onWhatsAppOrder={openWhatsApp}
      />
    </div>
  );
}

export default App;
