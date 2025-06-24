
import { useState } from 'react';
import { ArrowLeft, Rocket, Globe, Thermometer, Calendar, Zap, Users, Camera, Mountain, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import GalaxyBackground from '@/components/GalaxyBackground';
import Footer from '@/components/Footer';

const MarsInfo = () => {
  const [activeTab, setActiveTab] = useState('facts');

  const marsStats = [
    { icon: Globe, label: 'Distance from Sun', value: '227.9 million km', color: 'text-red-400' },
    { icon: Thermometer, label: 'Average Temperature', value: '-80°F (-62°C)', color: 'text-blue-400' },
    { icon: Calendar, label: 'Day Length', value: '24 hours 37 minutes', color: 'text-green-400' },
    { icon: Zap, label: 'Year Length', value: '687 Earth days', color: 'text-purple-400' },
    { icon: Mountain, label: 'Highest Mountain', value: 'Olympus Mons (21 km)', color: 'text-orange-400' },
    { icon: Wind, label: 'Gravity', value: '38% of Earth', color: 'text-yellow-400' },
  ];

  const missions = [
    {
      name: 'Curiosity Rover',
      year: '2012-Present',
      status: 'Active',
      description: 'Meet the nuclear-powered marvel that has been our eyes and hands on Mars for over a decade! Curiosity is not just another robot - it\'s a mobile laboratory the size of a car, equipped with 17 cameras and a suite of scientific instruments that would make any Earth-based lab jealous. This incredible machine has traveled over 28 kilometers across the Martian landscape, drilling into rocks, analyzing soil samples, and even taking selfies that have captivated millions of people back on Earth. What makes Curiosity truly special is its ability to operate autonomously, making critical decisions about where to go and what to investigate while being 14 minutes away from Earth at light speed. Every day, it sends back breathtaking images and groundbreaking scientific data that continue to rewrite our understanding of Mars and its potential to have harbored life.',
      achievements: ['Confirmed ancient water activity', 'Detected methane in atmosphere', 'Found organic compounds', 'Discovered seasonal methane cycles', 'Identified ancient habitable environments', 'Analyzed Martian weather patterns']
    },
    {
      name: 'Perseverance Rover',
      year: '2021-Present',
      status: 'Active',
      description: 'Perseverance represents humanity\'s boldest attempt yet to answer the ultimate question: "Are we alone?" This cutting-edge rover landed in Jezero Crater, an ancient river delta that scientists believe could hold the key to discovering past microbial life on Mars. But Perseverance isn\'t working alone - it brought along Ingenuity, a helicopter that made history by achieving powered flight on another planet! Together, they\'re not just exploring Mars; they\'re preparing for humanity\'s eventual arrival. Perseverance is actively collecting rock and soil samples in specially designed tubes that will be retrieved by future missions and brought back to Earth - making it the first step in an ambitious multi-mission campaign. The rover can produce oxygen from the Martian atmosphere, proving that future astronauts could literally breathe easier on the Red Planet. Every sol (Martian day), Perseverance pushes the boundaries of what\'s possible in space exploration.',
      achievements: ['First helicopter flight on Mars (Ingenuity)', 'Oxygen production on Mars (MOXIE)', 'Sample collection for future return', 'Advanced autonomous navigation', 'Discovered organic molecules in igneous rock', 'Evidence of ancient microbial life']
    },
    {
      name: 'Viking Program',
      year: '1976-1982',
      status: 'Historic',
      description: 'The Viking missions were humanity\'s first successful attempt to land on Mars and truly see the Red Planet up close. Imagine the excitement and terror of NASA scientists in 1976 as they watched their billion-dollar spacecraft attempt to land on an alien world with no GPS, no real-time communication, and technology less powerful than a modern smartphone! The twin Viking landers and orbiters revolutionized our understanding of Mars, revealing a world of stunning beauty and complex geology. For the first time, humans could see Martian sunrises, dust devils dancing across ancient plains, and the intricate details of polar ice caps. The landers conducted the first experiments specifically designed to search for life on another planet - and while the results were inconclusive, they opened up entirely new fields of astrobiology. The Viking missions proved that Mars wasn\'t just a distant red dot in the sky, but a real world with weather, seasons, and a rich geological history that spans billions of years.',
      achievements: ['First successful US landing on Mars', 'First detailed Mars surface images', 'Atmospheric composition analysis', 'First search for life experiments', 'Detailed geological mapping', 'Long-term weather monitoring']
    },
    {
      name: 'Mars Reconnaissance Orbiter',
      year: '2006-Present',
      status: 'Active',
      description: 'High above the Martian surface, the Mars Reconnaissance Orbiter serves as our eye in the sky, capturing images so detailed you can see individual boulders and even the tracks left by our rovers below! This technological marvel has been orbiting Mars for nearly two decades, serving as both a scientific powerhouse and a crucial communication relay for surface missions. Its HiRISE camera can spot objects as small as a desk from 300 kilometers above the surface - imagine having Google Earth for Mars! The orbiter has discovered flowing water on present-day Mars, mapped underground ice deposits that could supply future human missions, and tracked massive dust storms that can engulf the entire planet. Perhaps most importantly, it serves as a scout for future landing sites, helping mission planners choose the safest and most scientifically interesting locations for rovers and eventually human explorers. Every image it takes brings us closer to understanding Mars as a dynamic, ever-changing world.',
      achievements: ['High-resolution surface mapping', 'Discovery of seasonal water flows', 'Weather and climate monitoring', 'Underground ice detection', 'Communication relay for surface missions', 'Landing site reconnaissance']
    }
  ];

  const facts = [
    {
      title: 'The Crimson Mystery',
      description: 'Mars doesn\'t just look red - it IS red, and the reason is both beautiful and violent! Billions of years ago, iron-rich rocks on Mars reacted with oxygen and water to create iron oxide, literally painting an entire planet the color of rust. This cosmic rust storm created the mesmerizing crimson landscapes we see today. But here\'s the fascinating part: this rusty surface tells us that Mars once had a thick atmosphere and abundant water - conditions that could have supported life! Every grain of red dust is a tiny time capsule, preserving the story of a world that once might have been as blue and alive as Earth. When you look at Mars through a telescope, you\'re not just seeing a planet - you\'re witnessing the aftermath of an epic planetary transformation that took place over millions of years.',
      icon: Globe
    },
    {
      title: 'Dancing with Two Companions',
      description: 'Mars has two tiny, potato-shaped moons that are absolutely nothing like our familiar, round Moon! Phobos and Deimos - named after the Greek gods of fear and panic - are likely captured asteroids that got trapped in Mars\' gravitational embrace millions of years ago. Phobos is so close to Mars that it orbits the planet three times every Martian day, rising in the west and setting in the east! Even more dramatically, Phobos is spiraling inward and will either crash into Mars or be torn apart into rings in about 50 million years. Imagine standing on Mars and watching a moon race across the sky, completing an entire orbit in just 7.5 hours! These quirky moons create eclipses too, but instead of the total solar eclipses we experience on Earth, Martian eclipses look more like a dark potato passing in front of the Sun.',
      icon: Calendar
    },
    {
      title: 'The Solar System\'s Skyscraper',
      description: 'Forget Mount Everest - Mars is home to Olympus Mons, a volcano so massive it defies imagination! This colossal mountain stands 21 kilometers high (that\'s nearly three Mount Everests stacked on top of each other) and is so wide that its base could cover the entire state of Arizona. What makes this even more incredible is that Olympus Mons is a shield volcano, built up over millions of years by countless lava flows. The low gravity on Mars allowed it to grow to these impossible heights - on Earth, such a massive structure would collapse under its own weight! The summit caldera alone is 80 kilometers wide and could easily swallow several major cities. If you could somehow stand at the base of Olympus Mons, the peak would be beyond the horizon, hidden by the curve of the planet itself. It\'s not just the tallest mountain on Mars - it\'s the tallest known mountain in our entire solar system!',
      icon: Mountain
    },
    {
      title: 'Rivers of Ancient Dreams',
      description: 'Billions of years ago, Mars was a water world that might have rivaled Earth in its beauty and habitability! Orbital images reveal an intricate network of ancient riverbeds, deltas, and lake shores that paint a picture of a planet once flowing with liquid water. The Jezero Crater, where Perseverance now roams, was once a pristine lake fed by rivers carrying sediments and possibly even microbial life from across the Martian landscape. Scientists have found evidence of ancient tsunamis that swept across Martian oceans, leaving behind massive deposits of rocks and debris. Some of these ancient water features are so well-preserved that we can literally follow the flow of rivers that dried up over 3 billion years ago! This isn\'t just geological history - it\'s the story of a planet that might have been teeming with life, making Mars our most promising target in the search for answers about whether life is common in the universe.',
      icon: Wind
    },
    {
      title: 'Frozen Treasure Chests',
      description: 'Mars guards vast reserves of frozen water at its poles, creating ice caps that expand and contract with the seasons like a planetary breathing system! But this isn\'t just regular water ice - it\'s mixed with frozen carbon dioxide (dry ice) that sublimates directly from solid to gas, creating spectacular geysers and dark spider-like patterns visible from orbit. The northern ice cap alone contains enough water to cover the entire planet in a layer 35 meters deep! Recent discoveries have revealed that there\'s also substantial amounts of water ice buried just beneath the surface across much of Mars, potentially providing future human explorers with drinking water, oxygen for breathing, and hydrogen for rocket fuel. During Martian winter, temperatures drop so low that carbon dioxide from the atmosphere actually freezes out, temporarily thickening the ice caps and creating a dynamic, ever-changing polar landscape that looks like something from an alien fairy tale.',
      icon: Thermometer
    },
    {
      title: 'Planet-Swallowing Storms',
      description: 'Mars experiences dust storms so massive and powerful they can engulf the entire planet for months, turning day into night and creating an alien apocalypse scenario that makes Earth\'s hurricanes look like gentle breezes! These global dust storms occur roughly every few years when Mars is closest to the Sun, and they can generate winds of up to 200 kilometers per hour while lifting billions of tons of fine dust into the thin Martian atmosphere. The dust particles are so fine they behave almost like smoke, and once a storm begins, it can feed on itself, growing larger and larger until it covers all 144 million square kilometers of the planet\'s surface! During the 2018 global dust storm, NASA lost contact with the Opportunity rover for months as its solar panels were completely blocked by dust. These storms are so powerful they can be seen from Earth through telescopes, temporarily obscuring our view of surface features and reminding us that Mars is still a dynamic, active world.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GalaxyBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                className="flex items-center space-x-3 text-white hover:text-red-400 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
                <span className="text-lg font-semibold">Back to Gallery</span>
              </Link>
              <div className="flex items-center space-x-3">
                <Rocket className="w-8 h-8 text-red-400" />
                <h1 className="text-2xl md:text-3xl font-bold text-white">Mars Explorer</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                Mars
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Journey through the fascinating world of the Red Planet. Explore cutting-edge research, 
              incredible discoveries, and the ongoing quest to understand our neighboring world that might 
              hold the key to answering humanity's greatest question: Are we alone in the universe?
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('facts')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'facts'
                  ? 'bg-red-500/30 text-red-400 border border-red-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Mars Facts
            </button>
            <button
              onClick={() => setActiveTab('missions')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'missions'
                  ? 'bg-red-500/30 text-red-400 border border-red-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Missions & Research
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'stats'
                  ? 'bg-red-500/30 text-red-400 border border-red-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Planet Stats
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <main className="container mx-auto px-4 pb-16">
          {activeTab === 'facts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facts.map((fact, index) => {
                const IconComponent = fact.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <IconComponent className="w-8 h-8 text-red-400" />
                      <h3 className="text-xl font-bold text-white">{fact.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{fact.description}</p>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'missions' && (
            <div className="space-y-8">
              {missions.map((mission, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{mission.name}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-400">{mission.year}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          mission.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                        }`}>
                          {mission.status}
                        </span>
                      </div>
                    </div>
                    <Rocket className="w-12 h-12 text-red-400 mt-4 md:mt-0" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{mission.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {mission.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marsStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MarsInfo;
