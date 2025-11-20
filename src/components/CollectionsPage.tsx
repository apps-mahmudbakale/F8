import React, { useState, useMemo } from 'react';
import { ArrowLeft, MessageCircle, Filter, Grid, List } from 'lucide-react';
import ArtworkModal from './ArtworkModal';
import VeinsOfLight from "../Frames/3 of 3 /Between the Veins of Light.jpg"; // Replace with your mockup image path
import WatchShore from "../Frames/3 of 3 /THE WATCHFUL SHORE.jpg"; // Replace with your mockup image path
import SoloWalker from "../Frames/3 of 3 /SOLO WALKER.jpg"; // Replace with your mockup image path
import Foot from "../Frames/3 of 3 /Foot Print Beneath the Gazebo.jpg"; // Replace with your mockup image path
import BroadStreet from "../Frames/9 of 9/BROAD STREET.jpg"; // Replace with your mockup image path
import LatoriOlumo from "../Frames/9 of 9/LATORI OLUMO- A Land Scape of Endless Possiblilities.jpg";
import LatoriOlumo2 from "../Frames/9 of 9/LATORI OLUMO - A Tapestry Of Culture and Continuity.jpg"; // Replace with your mockup image path
import Glow from "../Frames/9 of 9/THE GLOW THAT GIVES WAY.jpg"; // Replace with your mockup image path
import OceanSpeaks from "../Frames/9 of 9/Ocean Speaks.jpg"; // Replace with your mockup image path
import Ayanfe from "../Frames/3 of 3 /Ayanfe Arajo (Beloved Sojourner).jpg";
import Beyond from "../Frames/9 of 9/Beyond the Dying Light.jpg"; // Replace with your mockup image path
import Companions from "../Frames/9 of 9/Companions by the Sea.jpg"; // Replace with your mockup image path
import BuyMe from "../Frames/9 of 9/Buy me.jpg"; // Replace with your mockup image path
import Wave from "../Frames/3 of 3 /The Wave We Leave Behind.jpg"; // Replace with your mockup image path
import Resting from "../Frames/9 of 9/Resting Between Journeys.jpg"; // Replace with your mockup image path
import Gangan from "../Frames/3 of 3 /GANGAN - The Ancient Messager.jpg"; // Replace with your mockup image path  
import Fisherman from "../Frames/9 of 9/LIFE ON THE SEA 2, Fisherman’s Thought.jpg"; // Replace with your mockup image path 
import Fisherman2 from "../Frames/9 of 9/LIFE ON THE SEA  - Fisherman and the Tides.jpg"; // Replace with your mockup image path 
import Foundation from "../Frames/9 of 9/FOUNDATIONS.jpg"; // Replace with your mockup image path 
import Echos from "../Frames/9 of 9/Echoes of the Dunes.jpg"; // Replace with your mockup image path 
import Clarity from "../Frames/3 of 3 /Clarity in Branches.jpg"; // Replace with your mockup image path 
import Mirror from "../Frames/9 of 9/SAND AND THE BEACH 2.jpg"; // Replace with your mockup image path 
import Petals from "../Frames/9 of 9/Mirrored Petals.jpg"; // Replace with your mockup image path 
import Bombom from "../Frames/9 of 9/The Journey of Bombom.jpg"; // Replace with your mockup image path 
import LifeBalance from "../Frames/9 of 9/Life No Balance- POWER LINE.jpg"; // Replace with your mockup image path 
import WhenTrees from "../Frames/9 of 9/When Trees Meet the Sky.jpg"; // Replace with your mockup image path 
import IYANAPAJA from "../Frames/9 of 9/The Sting and the Shelter.jpg"; // Replace with your mockup image path 
import Breath from "../Frames/3 of 3 /Breath of the Arctic Snow.jpg"; // Replace with your mockup image path 
import Ikare from "../Frames/9 of 9/The Ikare Hills.jpg"; // Replace with your mockup image path 
import Ikoyi from "../Frames/3 of 3 /Ikoyi Link Bridge.jpg";


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

interface CollectionsPageProps {
  onBack: () => void;
  onWhatsAppOrder: (message: string) => void;
}

const CollectionsPage: React.FC<CollectionsPageProps> = ({ onBack, onWhatsAppOrder }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // 9 items per page for a 3x3 grid

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
        { size: "18x24 inches", price: "₦185,000" },
        { size: "24x36 inches", price: "₦260,000" },
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
        { size: "18x24 inches", price: "₦185,000" },
        { size: "24x36 inches", price: "₦260,000" },
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
        { size: "18x24 inches", price: "₦190,000" },
        { size: "24x36 inches", price: "₦270,000" },
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
        { size: "18x24 inches", price: "₦160,000" },
        { size: "24x36 inches", price: "₦230,000" },
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
        { size: "18x24 inches", price: "₦180,000" },
        { size: "24x36 inches", price: "₦255,000" },
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
    {
      image: Ayanfe,
      title: "Ayànfẹ́ Aràjọ́ (Beloved Sojourner)",
      editions: "3/3 Available",
      price: "₦230,000",
      sizes: [
        { size: "18x24 inches", price: "₦230,000" },
        { size: "24x36 inches", price: "₦330,000" }
      ],
      category: "Collector's Elite",
      description:
        "",
      story: `On the rough earth, where stones glisten with grains of sand and fragments of color, a small traveler makes its steady journey. It is a caterpillar its body dark and striped with pale green, its head and tail crowned in fiery orange, its sides armed with fine bristles like a shield.

To the casual eye, it is only an insect, fragile and slow. But within Ayanfe Arájò lies a hidden promise, the story of change. After days of crawling, feeding, and enduring, it will surrender to stillness. From that silence, it will rise again with wings, a reminder that patience births transformation.

I fell in love with the beauty of the caterpillar but dared not touch it, knowing its bristles could raise a rash on the skin. Instead

The sojourner teaches quietly. Just as rivers carve their paths with time, so too does this caterpillar move with persistence toward an unseen destiny. Its journey is a mirror of life where progress may be slow, yet each step is meaningful.
Thus, Ayanfe Arájò is more than a crawler on the earth, it is a metaphor of existence, of patience, of love from afar. A reminder that in every journey, no matter how small, lies the promise of becoming something greater.
`,
      technique: "Landscape Photography",
      year: "Apr 25, 2019",
      location: "Osun State",
       features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: Beyond,
      title: "Beyond the Dying Light",
      editions: "9/9 Available",
      price: "₦140,000",
      sizes: [
        { size: "18x24 inches", price: "₦180,000" },
        { size: "24x36 inches", price: "₦255,000" },
      ],
      category: "Signature Edition",
      description:
        "",
      story: `The day had labored long, its warmth lingering even as the sun began its slow descent. The sky turned into a canvas of fading fire gold melting into amber, crimson dissolving into the quiet embrace of night. Birds traced their way across the horizon, returning home as if guided by the fading glow.

I stood still, watching. There is something about a sunset that feels both like an ending and a promise. The clouds stretched wide like brushstrokes of memory, carrying whispers of laughter, struggles, and fleeting moments the sun had witnessed that day.

What struck me most was the calmness of the surrender. The sun did not resist its setting; it bowed with grace, knowing it would rise again. In that gentle retreat, I heard a lesson: not every ending is loss, and not every darkness is final. Some things must fade so that others may shine.

As shadows deepened, I realized the sunset was more than beauty it was a mirror. A reminder that when chapters close and light grows dim, it is never truly the end. For beyond the dying light, somewhere past the horizon, dawn is already waiting.
`,
      technique: "Landscape Photography",
      year: "Oct 03, 2023",
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
      image: Companions,
      title: "Companions by the Sea",
      editions: "9/9 Available",
      price: "₦145,000",
      sizes: [
        { size: "18x24 inches", price: "₦185,000" },
        { size: "24x36 inches", price: "₦260,000" },
      ],
      category: "Sunset In My Pent",
      description:
        "",
      story: `The sea has always been a place where stories breathe. Its waves roll in and out like unspoken promises, whispering to those who pause long enough to listen. On this shore, as the day gently bowed into evening, two figures walked side by side, their silhouettes etched softly against the pastel sky.

They did not need words. The sea spoke for them. Every crash of the wave carried the weight of shared dreams, every retreat of the tide reminded them of the times they had held on to each other when the world felt unsteady.

Companionship, they knew, was not always loud or grand. Sometimes, it was the quiet rhythm of footsteps in sand, the comfort of another’s presence, the way laughter could echo against the wind and linger like the salt in the air.

The ocean stretched endlessly before them, vast and untamed, yet here, together, it felt intimate like a secret only they understood. Love did not need to conquer the horizon; it only needed to hold steady, like two hearts anchored in the same tide.

Behind them, footprints marked where they had come from, and ahead, the waves erased the path, as if reminding them that the journey was not about the destination but about walking together, hand in hand, against the eternal music of the sea.

For in companionship, as in the sea, there was a truth unshaken: life is lighter, sweeter, and infinitely more beautiful when it is shared.

`,
      technique: "Landscape Photography",
      year: "Nov 10, 2024",
      location: " Ibeju Lekki",
      features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: BuyMe,
      title: "Buy Me",
      editions: "9/9 Available",
      price: "₦125,000",
      sizes: [
        { size: "18x24 inches", price: "₦165,000" },
        { size: "24x36 inches", price: "₦230,000" },
      ],
      category: "Signature Edition",
      description:
        "",
      story: `Some will see it as ridicule. Others will see it as creativity. But the truth is, art often exists in that gray space where interpretation divides us.

This image was never staged. It was born out of a pure, unplanned moment a product of my continuous urge to take photos of significant and beautiful things that come my way. A creation shaped by chance, and a little twist of fate.

I was riding with a friend who was about to sell his car. A simple “BUY ME” paper was resting on the dashboard, meant for potential buyers. Yet, as the sun shifted, the windshield caught it, reflecting the words onto the façade of a towering church building ahead.

And there it was the holy silhouette of a cross-crowned steeple, quietly carrying the echo of two words: Buy Me.

To some, the image feels controversial, maybe even offensive. To others, it is a powerful metaphor, a commentary on faith, materialism, and the transactions of life. To me, it was a reminder that art doesn’t always come from deliberate effort. Sometimes, life itself paints its own irony, and we are just fortunate enough to capture it.

A fleeting reflection. A frozen moment. A metaphor that might never happen the same way again.

BUY ME`,
      technique: "Landscape Photography",
      year: "Jan 10, 2025",
      location: "Oke-Bola Ibadan",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Wave,
      title: "The WaVe We Leave Behind",
      editions: "3/3 Available",
      price: "₦230,000",
      sizes: [
        { size: "18x24 inches", price: "₦230,000" },
        { size: "24x36 inches", price: "₦330,000" },
      ],
      category: "Collector’s Elite",
      description: "A vibrant exploration of city life through layered architectural elements and dynamic compositions.",
      story: `The boat cut across the Lagos waters, leaving behind a trail of foam that danced and dissolved in moments. Ahead, the horizon opened into an expanse of sky, a blue so vast it made the tiny clouds drift like whispers, scattered and weightless.

Far in the distance, the city faded into soft outlines, its buildings standing like memories half-remembered. Their forms were muted by the light, humbled by the stretch of water in between. Closer to shore, bits of rubble clung to the edges, quiet reminders of what the sea has claimed and what time has worn down.

Here, the waves tell a quiet truth: every journey leaves its mark, but nothing stays unchanged. The froth behind us curled like a fleeting signature, proof of where we had been, yet never heavy enough to hold us back. In the language of the sea, even the past is surrendered to the deep, so that the waters ahead can remain open.

And just as quickly, those waves fade, turning back into the water they came from. It is the boat that cuts through, shaping their form, carrying the message that no wave is ever the same. Each ripple, each surge depends on the speed at which we move a reminder that our journeys, though similar in passage, are never identical in experience.

We move, we leave, we arrive and still, the tide carries us forward.
`,
      technique: "Digital Composite",
      year: "November 23, 2023",
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
      image: Ikoyi,
      title: "Ikoyi Link Bridge",
      editions: "3/3 Available",
      price: "₦260,000",
      sizes: [
        { size: "18x24 inches", price: "₦260,000" },
        { size: "24x36 inches", price: "₦360,000" },
      ],
      category: "Collector’s Elite",
      description: "The Ikoyi Link Bridge, completed in 2013, stands as one of Lagos’ most iconic landmarks.",
      story: `The Ikoyi Link Bridge, completed in 2013, stands as one of Lagos’ most iconic landmarks. Stretching over the Five Cowrie Creek, it connects the upscale district of Ikoyi to the bustling neighborhoods of Lekki, creating a vital artery in the daily movement of the city.

More than a structure of steel and cables, the bridge eases traffic, shortens commutes, and provides a reliable link between two of Lagos’ most significant hubs. Every day, it carries cars, motorcycles, cyclists, and pedestrians, each with their own stories; from professionals heading to work, to families moving between homes, to visitors simply admiring the city’s skyline.

At night, its lights reflect across the waters, giving Lagos a modern glow, while by day, it remains a busy passage where thousands cross with purpose. For many, the Ikoyi Link Bridge is a convenience; for Lagos as a whole, it is a reminder of progress, connection, and the city’s never-ending rhythm.

Beyond its daily function, the Ikoyi Link Bridge also stands as a symbol of Lagos’ growth; a reminder of the city’s push toward greater connectivity and the promise of a future where its people and places are even more closely linked.
.
`,
      technique: "Digital Composite",
      year: "November 10, 2024",
      location: "Ikoyi Link Bridge, Eti- Osa Lagos State",
      features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: Foundation,
      title: "Foundations",
      editions: "9/9 Available",
      price: "₦135,000",
      sizes: [
        { size: "18x24 inches", price: "₦175,000" },
        { size: "24x36 inches", price: "₦250,000" },
      ],
      category: "Signature Edition",
      description: "A serene coastal scene where sky meets sea in perfect harmony, capturing a moment of quiet reflection.",
      story: `Growth is never an accident it is built, stone by stone, choice by choice.
In this frame, the rocks sit firm, weathered and unmoving, forming a barrier where land meets restless sea. The waves crash and curl between them, reminding us that no foundation exists without resistance. Water will always seek a way through, and life will always test the walls we build. Yet, it is in this tension between force and firmness that true strength is born.

Beyond the rocks rises a building, unfinished yet ambitious. Its bare concrete floors and open windows speak of a dream still taking shape. It stands not as a ruin, but as a promise proof that growth is a process, not a moment. What begins as rubble can one day stretch into the sky.

Together, the rocks, the sea, and the rising building form a single lesson: development requires both grounding and vision. The rocks show us that strength begins deep, with roots that can withstand storms. The waves remind us that challenges will come, reshaping us in ways we cannot control. And the unfinished building teaches patience  that becoming is a journey, and scaffolds are as important as the final form.

So too is life. We are all foundations under construction some days rock, some days wave, some days concrete walls climbing upward. Growth does not arrive fully formed; it is carved, tested, and layered until the structure stands tall.
And when it finally does, every stone, every storm, and every pause in progress will be part of its strength.`,
      technique: "Long Exposure Photography",
      year: "Aug 12, 2023",
      location: "Eti-Osa Lagos State",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Clarity,
      title: "Clarity in Branches",
      editions: "3/3 Available",
     sizes: [
        { size: "18x24 inches", price: "₦240,000" },
        { size: "24x36 inches", price: "₦340,000" },
      ],
      category: "Collector’s Elite",
      description: "A lone figure navigates the urban expanse, a study in scale and solitude.",
      story: `The tree in this image is the Flamboyant tree graceful, wide-armed, with feathery leaves and long seed pods swaying from its branches. In full bloom, it explodes in fiery reds and oranges, but even bare, it carries a quiet presence, a reminder of how beauty lives in many forms.

Looking up at its branches, there’s a lesson in perspective. At first glance, the tree seems tangled branches crossing, seed pods hanging, leaves overlapping in a web of patterns. It looks chaotic. But the more you observe, the more you see its quiet order: each branch reaching with purpose, each leaf playing its part in a larger design.

So often, our minds feel the same. Thoughts loop, worries pile, decisions knot themselves together until everything feels messy. But like the flamboyant tree, clarity does not come by forcing the branches apart it comes by stepping back, breathing, and seeing how it all fits together.

Clarity is not the absence of complexity; it is the recognition that even tangled lines can form a beautiful whole. The flamboyant tree reminds us that what looks like confusion from within may be harmony from above.

And in that moment, you realize: the knots of your thoughts are not barriers, they are branches, still growing, still reaching toward light.
`,
      technique: "Street Photography",
      year: "Jan 2, 2023",
      location: "Idimu -Ikotun Road Lagos",
      features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: Mirror,
      title: "Mirror on Sand",
      editions: "9/9 Available",
     sizes: [
        { size: "18x24 inches", price: "₦170,000" },
        { size: "40x30 inches", price: "₦240,000" },
      ],
      category: "Signature Edition",
      description: "An abstract exploration of texture and form, where light and shadow create depth and movement.",
      story: `When the tide retreats, it leaves behind more than wet sand. It leaves a canvas. A thin film of water lingers, holding the sky in its embrace. Clouds drift across the ground, soft light rests where footprints once pressed, and the horizon suddenly bends both ways.

It is a quiet reminder: reflection does not always need glass. Sometimes the earth itself pauses, and in its pause, it shows us how the world can exist twice above and below, real and imagined.

Standing before this scene, you realize that the most powerful mirrors are not the ones that reveal our faces but the ones that remind us of perspective. The sand does not hold the sky forever; it only offers a glimpse, fleeting yet profound.

For in that fleetingness lies its truth. Nothing is meant to stay, yet every moment carries eternity within it. The clouds will shift, the water will dry, the sand will smooth, but the vision sky resting upon earth lingers in memory like a quiet revelation.

Clarity often arrives in these small, passing moments, when stillness turns the ordinary into something eternal. And in this meeting of sea, sand, and sky, there is harmony not because they remain, but because they embrace change together.

The ocean will return, the sand will shift, the sky will change. But for a breath of time, they all meet here as one, whispering to us that beauty is not always in permanence; sometimes, it is in the reflection that vanishes with the next wave`,
      technique: "Experimental Photography",
      year: "Nov 12, 2023",
      location: "Amuwo-Odofin Lagos",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ]
    },
    {
      image: Echos,
      title: "Echos of Dunes",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦165,000" },
        { size: "24x36 inches", price: "₦235,000" },
      ],
      category: "Signature Edition",
      description: "The vibrant energy of the city at night, captured in a symphony of light and color.",
      story: `In the fading light of Sokoto, a camel walks with its herder slow, deliberate, each step pressing into the earth as if writing its own verse. 
The weight of the day rests on both: for the camel, the burden of load; for the herder, the burden of life. Yet together, they move forward, not in opposition but in rhythm.

There is struggle, yes, the dry air, the endless distances, the silence that can swallow thought. But in that silence also lies tranquility: the gentle sway of the camel’s gait, the patience of a man who knows that every journey is walked twice once by the body, and once by the spirit.

The desert does not rush them, nor do they rush each other. Instead, there is a shared endurance, a quiet understanding: survival is not found in isolation but in companionship.
 
The camel yields its strength; the herder offers his guidance. One without the other would falter, but together, they become a moving testament to resilience.

In their path is written a truth: tranquility is not the absence of struggle, but the harmony found within it.
`,
      technique: "Night Photography",
      year: "March 11, 2023",
      location: "Rumjin Sambo Federal Housing Estate, Sokoto",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Bombom,
      title: "The Journey of Bombom",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦170,000" },
        { size: "24x36 inches", price: "₦240,000" },
      ],
      category: "Signature Edition",
      description: "A powerful exploration of cultural heritage and identity through symbolic imagery.",
      story: `From childhood in Lagos, I knew the Ewe Bombom. Its balloon-like pods fascinated us we pressed them until they burst with

To me, it belonged to the South, swaying along coastal roadsides, scattered across open fields in the Lagos breeze. It was part of my youth, so familiar I never imagined it elsewhere.

But years later, in Sokoto under harsher sun, drier air, cracked earth I found it again. Against all odds, the same plant thrived, leaves green, flowers alive.

That moment struck me: the Bombom had crossed climates, adapting to every soil. It reminded me that resilience is not just strength, but flexibility bending without breaking, drawing life even in struggle.

Like the Nigerian spirit, it endures across regions, weathered yet unbroken, always blooming.

 The Ewe Bombom is more than a plant; it is a story of survival, adaptability, and quiet strength whispering that wherever life plants you, you can still rise, still flourish, still bloom.`,
      technique: "Digital Art",
      year: "March 14, 2019",
      location: "Rumjin Sambo Federal Housing Estate, Sokoto",
        features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: LifeBalance,
      title: "Life No Balance",
      editions: "9/9 Available",
     sizes: [
        { size: "18x24 inches", price: "₦170,000" },
        { size: "24x36 inches", price: "₦240,000" },
      ],
      category: "Signature Edition",
      description: "A dynamic composition capturing the pulse of urban life through movement and color.",
      story: `High tension wires stretch across the sky, carrying power from one point to another. Some tap from Band A, where light almost never blinks. Others are on Band B or Band C, where the current comes and goes. The feeders spread electricity to every household, yet some homes shine bright while others sit in darkness. 

That is how life works. It was never balanced. Some people get more, not because others are lazy, not because they don’t work hard, but simply because opportunities flow differently. Life distributes unevenly, some have direct lines to abundance, others get only a trickle.

But the truth is this: no matter your “band,” what matters is how you spot and tap into the opportunities within your reach. Power will always flow, but the light that shines in your home depends on the wisdom with which you connect.

In the end, the lines in the sky remind us that everyone is wired differently. What truly counts is not comparing your supply with another’s but learning to make the most of the current that finds its way to you.`,
      technique: "Long Exposure",
      year: "April 11, 2022",
      location: "Tomi Williams Str. Alimosho Lagos",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: WhenTrees,
      title: "When Trees Meet the Sky",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦135,000" },
        { size: "24x36 inches", price: "₦200,000" },
      ],
      category: "Signature Edition",
      description: "A study in light and form, where subtle gradients create a sense of depth and movement.",
      story: `In this picture, the tree stretches its branches upward, and the clouds drift gently across the blue sky. At first glance, they are different worlds one rooted in the earth, the other floating above. Yet in this moment, they connect.

This meeting between tree and cloud is a quiet lesson about diversity and bonds. We may be different in form, in background, in path, yet we can still cross each other’s lives and create something beautiful together. Connections do not always last forever clouds will move, branches will sway, but during the time they meet, they leave a mark.

So it is with human connections. Every encounter, whether brief or lasting, leaves a part of us in others, and a part of them in us. Some bonds will grow into lifelong friendships, others may fade into memories. But what matters most is the quality of the imprint we leave behind.

My only advice is this: when you connect, leave a good pact in the lives of those you meet. An acquaintance today may become one of the greatest blessings of your life or one of its deepest regrets. The choice of what story your connection tells will always rest with you.
`,
      technique: "Digital Art",
      year: "Apr 15, 2022",
      location: "Lead City Uni Ibadan",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: IYANAPAJA,
      title: "IYANAPAJA - The Sting and  Shelter",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦170,000" },
        { size: "24x36 inches", price: "₦245,000" },
      ],
      category: "Signature Edition",
      description: "The eternal dance of water and land, captured in a moment of perfect balance.",
      story: `They call it Iyanapaja in the Southwest, a leaf both feared and cherished. In science, it bears the name Jatropha tanjorensis, and in English, it is often known as hospital-too-far. Touch it raw and your skin will prickle with an uninvited itch, a reminder that beauty sometimes guards itself with barbs. But introduce it to fire and water, and it transforms yielding a nourishing green that graces many pots and keeps many bellies full.

It is nature’s riddle: how one thing can wound and heal, repel and nourish. Like certain people we meet in life those whose edges scrape at first touch, yet who, when understood, reveal a richness impossible to find elsewhere.
In this photograph, the leaf rises against the sky, its veins lit by the sun like quiet rivers of life. Behind it, clouds drift soft, white, and slow-moving. Together they mirror one another: the leaf, a green continent; the clouds, white islands adrift in blue. Nature seems to play its own simulation, letting earth and sky mimic each other’s designs.

Perhaps this is the deeper secret the Iyanapaja keeps: that nothing is entirely one thing. The gentle can conceal strength, the harsh can carry nourishment, and even the sky can echo the ground.
The leaf doesn’t apologize for its sting, and neither should we for our complexities. For in every life, as in every leaf, the good and the grit grow from the same root.
`,
      technique: "Long Exposure Photography",
      year: "May 19, 2021",
      location: "Graceland Estate Alimosho Lagos",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Breath,
      title: "Breath of the Arctic Snow",
      editions: "3/3 Available",
      sizes: [
        { size: "18x24 inches", price: "₦260,000" },
        { size: "40x30 inches", price: "₦360,000" },
      ],
      category: "Collectors' Elite",
      description: "A harmonious composition exploring the beauty of geometric forms and their spiritual significance.",
      story: `At the heart of the green where light plays with shadow, and rain still lingers on tender leaves a single white blossom dares to bloom. This is the Arctic Snow, known in gardens and forests alike for its quiet elegance. Not loud. Not proud. Just present. Just beautiful.

The petals, soft and full like a whispered prayer, rest among buds waiting for their own moment. Each raindrop on the waxy green leaves tells of an early morning, a recent blessing, or a sky that had wept and moved on.

There is peace here. Not in stillness, but in becoming.
Around the flower, the world fades into blur. The shadows behind draw no attention to themselves and yet, they frame the bloom like reverent hands holding something sacred. The background softens. The noise disappears. All that remains is the subject.

The flower. The now. The moment.

The Arctic Snow is not the loudest in the garden, but it teaches presence. It reminds us that the world will always be filled with movement, but focus, true focus can make even a whisper feel like a song.

This image doesn’t shout. It breathes.
 And in that breath, something sacred awakens.`,
      technique: "Digital Art",
      year: "Jun 09, 2021",
      location: "Yaba Lagos",
       features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: Petals,
      title: "Mirrored Petals",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦180,000" },
        { size: "24x36 inches", price: "₦255,000" },
      ],
      category: "landscape",
      description: "A breathtaking vista where sky and land meet in perfect harmony.",
      story: `On the surface, they are nothing more than artificial decorative petals, fragile in their construction, arranged in colors chosen by design. Yet placed on a mirror, they transform. The reflection beneath them does not simply repeat; it extends, suggesting that even the simplest objects hold worlds within them.

The orange glows with warmth, a color of fire and renewal. The blue, dipped by hand into paint, carries a quiet rebellion, a choice to stand apart, to be marked differently. Between them rests the white, still and unassuming, like silence balancing sound. Together, they form a chorus, not loud, but steady reminding us that harmony is often born out of contrast.

In their mirrored selves, the petals reveal something we easily forget: our outer forms may be shaped by circumstance, by what we are dipped into, by what surrounds us. But beneath it all, there is always another version, another layer a reflection that waits for us to notice.

We are like these petals: some parts chosen, some accidental, some altered by our own decisions. Yet in the reflection, the story deepens. What appears fragile holds strength; what seems artificial carries meaning; what feels ordinary becomes extraordinary when we allow ourselves to see twice once with the eyes, and again with the soul.
The mirror does not lie, but it does not shout either. It whispers: look again`,
      technique: "Landscape Photography",
      year: "Sep 1, 2021",
      location: "Graceland Estate Alimosho Lagos",
      features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Fisherman,
      title: "Fisherman’s Thought",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦165,000" },
        { size: "24x36 inches", price: "₦230,000" },
      ],
      category: "Signature Edition",
      description: "A poetic exploration of connection and distance between forms.",
      story: `He sits at the edge of the boat, toes brushing the spray, eyes fixed on a horizon that seems endless. The sea moves beneath him, restless and alive, but his stillness tells another story, a story of thought, of waiting, of quiet dialogue between man and water.

What runs through his mind as the waves rise and fall? Perhaps the weight of yesterday’s nets, heavy or empty. Perhaps the hope of tomorrow’s catch, the prayer that the sea will not turn away. Or perhaps it is something simpler, the memory of home, of faces waiting on shore, of hunger softened only by faith.

The boat pushes forward, its wooden body worn but unbroken, carrying him and his companions into uncertainty. Around them, larger ships pass, towers stand tall against the sky, yet none of those things anchor his thoughts. His world, in this moment, is narrowed to the pull of the tide and the patience of a man who must believe in the unseen.

The fisherman’s thought is not despair, but resilience. It is the quiet courage of one who knows the sea does not always reward, yet still casts his net. It is the knowledge that life, like the ocean, is both giver and taker and that survival lies in returning, again and again, to its depths.
In his silence, there is strength. In his gaze, there is hope. The fisherman thinks, and the sea listens.
`,
      technique: "Digital Sculpture",
      year: "Nov 23, 2023",
      location: "Ajara River Lagos",
      features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Fisherman2,
      title: "Fisherman and the Tides",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦170,000" },
        { size: "24x36 inches", price: "₦240,000" },
      ],
      category: "Signature Edition",
      description: "A vibrant slice of market life, bursting with color and energy.",
      story: `The sea stretches wide, endless and untamed, its surface glittering under the embrace of the sun. To some, it is just water; to these men, it is a living field their farm, their hope, their inheritance.
The boat, carved with time and weathered by countless journeys, carries more than bodies; it carries stories, laughter, weariness, and faith. Its wooden frame creaks like an elder whispering prayers, steadying itself against the waves.
Onboard, men sit in quiet rhythm with the water. One leans into the journey, legs dangling free, as though balancing trust and surrender. Another raises an arm, mid-gesture perhaps in greeting, perhaps in emphasis, as if the sea itself is listening. Buckets and nets lie scattered, waiting to hold the day’s reward, waiting to turn salt and sweat into sustenance.
Behind them, the city rises buildings of glass and steel watching over the small wooden vessel. Two worlds in one frame: one built on concrete certainty, the other on liquid faith. The fisherman does not know if today’s cast will bring plenty or little, but he goes out all the same, guided not by guarantees but by belief.
The sea gives nothing easily. Yet in the dance of tide and toil, there is a grace the boat carries: the resilience of those who trust in unseen harvests, who row into uncertainty with courage. For the fisherman’s story is not only about fish; it is about faith, about returning home with dignity, about the unspoken promise that effort itself is never empty.
Every wave that pushes the boat forward is a hymn, and every man aboard is a verse. Together, they tell a story as old as time: that life on the sea is never just about survival it is about hope afloat on fragile wood, believing the waters will provide.
`,
      technique: "Street Photography",
      year: "Nov 23, 2023",
      location: "Ajara River Lagos",
     features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Ikare,
      title: "The Ikare Hills",
      editions: "9/9 Available",
      sizes: [
        { size: "18x24 inches", price: "₦175,000" },
        { size: "24x36 inches", price: "₦2405,000" },
      ],
      category: "Signature Edition",
      description: "A continuation of the urban exploration series, focusing on architectural patterns.",
      story: `The hills of Ikare rise like timeless guardians, their rugged backs carved by centuries of memory. More than stone, they are the soul of the town silent watchers that shape its weather, its rhythm, and its stories. Each morning, mist rolls down their slopes, carrying a cool breath into the streets, a reminder that life here flows in harmony with the land.

At their feet, houses with yellow walls and red roofs stand firmly, modest yet enduring. Stalls lean into the streets, forming lively markets where trade and conversation never rest. The hum of motorcycles, the bargaining of traders, and the laughter of children create a chorus that fills the town, echoing between the hills and the sky.

The people bring warmth to the rugged landscape. Women in patterned cloths balance baskets with practiced grace, children run barefoot with laughter in their wake, and traders brighten the streets with peppers, yams, and roasted corn. Every sound and color weaves into a tapestry of resilience and life.
Yet above it all, the hills remain ever-present. They hold the whispers of ancestors who once sought refuge in their caves, and the secrets of farmers and storytellers who still live in their shadows. For the people of Ikare, the hills are not just a backdropnthey are a presence, a teacher, and a keeper of memory.

And though the cold air descends from their slopes, it only draws the town closer together. Families gather around hot meals, neighbors share warmth, and the community thrives with a spirit that pushes back against the chill. This is Ikare a place where stone and spirit, history and present, cold winds and warm people become one enduring story beneath the Ikare Hills`,
      technique: "Digital Composite",
      year: "Aug 5, 2023",
      location: "Ikare Akoko, Ondo State",
       features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
    {
      image: Gangan,
      title: "Gángan – The Ancient Messenger",
      editions: "3/3 Available",
     sizes: [
        { size: "18x24 inches", price: "₦250,000" },
        { size: "24x36 inches", price: "₦350,000" },
      ],
      category: "Collector’s Elite",
      description: "A serene seascape that invites quiet reflection and inner peace.",
      story: `It stands in quiet dignity, yet its voice has moved nations.
This is Gángan, the talking drum, more than an instrument, it is a messenger, a storyteller, and a keeper of memory.

Carved from sacred wood and wrapped in leather, its hourglass body holds a secret power: the ability to speak in tones, just as the Yoruba language does. With every squeeze of its cords, Gángan bends its pitch, carrying words, proverbs, and praises across time and space.

Long before microphones and loudspeakers, Gángan was the voice of the village. It summoned kings, announced battles, celebrated unions, and consoled mourners. It was the bridge between the palace and the people, between the living and the ancestors.

The elders call it Ìlù Olórò - the drum that talks. To the lineage of drummers, descendants of Àyàn, it is not merely wood and skin but a living spirit that breathes wisdom and remembrance.

Today, even in museums and on stages far from its birthplace, the Gángan still speaks. Its rhythms echo centuries of history, resilience, and creativity a reminder that sound itself can be language, and language can be music.

Gángan is not just a drum.
It is The Ancient Messenger.
`,
      technique: "Long Exposure Photography",
      year: "Jan 26, 2025",
      location: "J-Randle Lagos Island",
       features: [
        "Limited Edition of 3 (Master Collector's Release) - Only three prints will ever exist, making this the rarest and most exclusive tier.",
        "Individually Hand-Signed & Numbered by the artist.",
        "Includes Certificate of Authenticity & Story Card detailing the inspiration and meaning behind the artwork.",
        "Delivered in Premium Frame with Elite Packaging — featuring custom wrapping and authenticity seal.",
        "Worldwide Shipping with priority handling for collectors"
      ],
    },
    {
      image: Resting,
      title: "Resting Between Journeys",
      editions: "9/9 Available",
       sizes: [
        { size: "18x24 inches", price: "₦175,000" },
        { size: "24x36 inches", price: "₦250,000" },
      ],
      category: "Signature Edition",
      description: "A dreamlike interpretation of urban solitude and connection.",
      story: `The little red boat waits patiently at the dock, its engine silent, its ropes holding it steady against the soft push of the tide. Around it, the water stretches wide, reflecting the weight of the clouds above and the quiet pulse of the community across the shore.

Though still, the boat carries the memory of motion, of mornings spent cutting through the waves, of laughter echoing over the water, of journeys that stitched the land to the sea. Now, tied to the dock, it rests like a traveler catching its breath before the next call.

And in many ways, this mirrors life itself. There are moments when we must pause not only because we are weary, but because rest gives space to rethink, to re-strategize, and to prepare for the voyage ahead. These pauses are not endings; they are sacred interludes, helping us clear our minds and start afresh with renewed strength and clarity.

In this pause, there is a story: one of work and respite, of movement and stillness. The red paint may be chipped, the wood may be weathered, but the spirit of the boat endures. For here, at the meeting of sky, water, and land, it waits not for an end, only for the beginning of another voyage.
`,
      technique: "Digital Art",
      year: "Jul 25, 2023",
      location: "Ajara River Lagos",
     features: [
       "Limited Edition of 9 (Signature Series) — A curated collection offering wider access while preserving exclusivity.",
	     "Hand-Signed & Certified by the artist.",
	     "Includes Certificate of Authenticity & Story Card that shares the story and inspiration behind the art.",
	     "Delivered in Premium Frame, Ready for Display — secured with custom wrapping and authenticity seal.",
	     "Worldwide Shipping with careful packaging for safe delivery.",
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'Collector’s Elite', name: 'Collector’s Elite' },
    { id: 'Signature Edition', name: 'Signature Edition' },
  ];

  const filteredArtworks = (filterCategory === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category === filterCategory));

  // Get current artworks
  const indexOfLastArtwork = currentPage * itemsPerPage;
  const indexOfFirstArtwork = indexOfLastArtwork - itemsPerPage;
  const currentArtworks = filteredArtworks.slice(indexOfFirstArtwork, indexOfLastArtwork);
  const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openModal = (artwork: Artwork) => {
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
          {currentArtworks.map((artwork, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer ${viewMode === 'list' ? 'flex space-x-6' : ''}`}
            >
              <div className={`
                bg-gray-800 p-4 rounded-xl hover:bg-gray-700 
                transition-all duration-300 transform hover:-translate-y-2 
                ${viewMode === 'list' ? 'flex space-x-6 w-full' : ''}
              `}>
                <div className="relative w-full">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {artwork.sizes[0].size}
                  </div>
                  <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                    {artwork.editions.includes('1/3') ? 'Last One!' : 'Limited Edition'}
                  </div>
                </div>

                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                  {viewMode === 'list' && (
                    <p className="text-gray-400 mb-4 line-clamp-3">{artwork.description}</p>
                  )}
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400 text-sm">{artwork.editions}</p>
                    <div className="text-yellow-400 font-medium">
                      {artwork.sizes.map((sizeOption, idx) => (
                        <p key={idx}>{sizeOption.size}: {sizeOption.price}</p>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {artwork.sizes.map((sizeOption, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          onWhatsAppOrder(
                            `Hi! I'm interested in "${artwork.title}" (${sizeOption.size}, ${sizeOption.price}). Is this piece still available?`
                          )
                        }
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Order {sizeOption.size} via WhatsApp</span>
                      </button>
                    ))}
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
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center space-x-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${currentPage === 1 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show first page, last page, current page, and pages around current
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                if (i === 3 && currentPage < totalPages - 3 && totalPages > 5) {
                  return <span key="ellipsis" className="px-2">...</span>;
                }
                if (i === 1 && currentPage > 4 && totalPages > 5) {
                  return <span key="ellipsis-start" className="px-2">...</span>;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      currentPage === pageNum
                        ? 'bg-yellow-400 text-gray-900 font-semibold'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${currentPage === totalPages 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'}`}
              >
                Next
              </button>
            </div>
          )}
          
          <div className="mt-4 text-center text-sm text-gray-400">
            Showing {indexOfFirstArtwork + 1}-{Math.min(indexOfLastArtwork, filteredArtworks.length)} of {filteredArtworks.length} artworks
          </div>
        </div>

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          isOpen={isModalOpen}
          onClose={closeModal}
          onWhatsAppOrder={onWhatsAppOrder}
        />
      )}
    </div>
  );
};

export default CollectionsPage;