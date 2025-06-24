
import { useState } from 'react';
import { ArrowLeft, Rocket, Globe, Thermometer, Calendar, Zap, Users, Camera, Mountain, Wind, Telescope, Satellite, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import GalaxyBackground from '@/components/GalaxyBackground';
import Footer from '@/components/Footer';

const MarsInfo = () => {
  const [activeTab, setActiveTab] = useState('mars');

  const marsStats = [
    { icon: Globe, label: 'Distance from Sun', value: '227.9 million km', color: 'text-red-400' },
    { icon: Thermometer, label: 'Average Temperature', value: '-80°F (-62°C)', color: 'text-blue-400' },
    { icon: Calendar, label: 'Day Length', value: '24 hours 37 minutes', color: 'text-green-400' },
    { icon: Zap, label: 'Year Length', value: '687 Earth days', color: 'text-purple-400' },
    { icon: Mountain, label: 'Highest Mountain', value: 'Olympus Mons (21 km)', color: 'text-orange-400' },
    { icon: Wind, label: 'Gravity', value: '38% of Earth', color: 'text-yellow-400' },
  ];

  const planets = [
    {
      name: 'Venus',
      subtitle: 'Earth\'s Hellish Twin',
      description: 'Venus is the hottest planet in our solar system despite not being closest to the Sun! With surface temperatures reaching 900°F (475°C) - hot enough to melt lead - Venus showcases the extreme greenhouse effect. Its thick atmosphere of carbon dioxide traps heat so efficiently that it\'s hotter than Mercury. The planet rotates backwards compared to most planets, and a day on Venus is longer than its year! Recent discoveries include possible signs of phosphine in its atmosphere, which could indicate microbial life floating in the cooler cloud layers. NASA\'s upcoming VERITAS and DAVINCI missions will revolutionize our understanding of this mysterious world.',
      stats: ['Surface temp: 900°F', 'Pressure: 90x Earth', 'Day: 243 Earth days', 'Year: 225 Earth days'],
      color: 'text-yellow-400'
    },
    {
      name: 'Jupiter',
      subtitle: 'The Solar System\'s Giant Guardian',
      description: 'Jupiter is a colossal gas giant that acts as our solar system\'s vacuum cleaner, protecting Earth by capturing asteroids and comets with its immense gravity! This massive planet has over 80 moons, including the four Galilean moons that are worlds unto themselves. Europa hides a subsurface ocean that may contain twice as much water as all Earth\'s oceans combined! Io is the most volcanically active body in the solar system, while Ganymede is larger than Mercury. Jupiter\'s Great Red Spot is a storm larger than Earth that has been raging for centuries. The Juno mission has revealed that Jupiter\'s core is more complex than expected, with a "fuzzy" or dilute core rather than a solid one.',
      stats: ['Mass: 2.5x all other planets', 'Moons: 80+', 'Day: 10 hours', 'Great Red Spot: 350+ years old'],
      color: 'text-orange-400'
    },
    {
      name: 'Saturn',
      subtitle: 'The Jewel of the Solar System',
      description: 'Saturn\'s magnificent ring system makes it the most visually stunning planet in our solar system! These rings are made of countless ice particles ranging from tiny grains to house-sized chunks, all orbiting in perfect harmony. Saturn is so light it would float in water if you could find an ocean big enough! Its moon Titan has lakes of liquid methane and ethane, making it the only other world in our solar system with stable bodies of surface liquid. Enceladus shoots geysers of water ice from its south pole, suggesting a subsurface ocean that might harbor life. The Cassini mission revolutionized our understanding of Saturn, revealing the hexagonal storm at its north pole and the complex dynamics of its ring system.',
      stats: ['Density: 0.69 g/cm³', 'Rings: Thousands', 'Moons: 80+', 'Hexagonal storm at north pole'],
      color: 'text-amber-400'
    }
  ];

  const blackHoles = [
    {
      title: 'Sagittarius A* - Our Galaxy\'s Heart',
      description: 'At the center of our Milky Way galaxy lurks a supermassive black hole called Sagittarius A* (Sgr A*), containing 4 million times the mass of our Sun! In 2022, the Event Horizon Telescope captured the first direct image of this cosmic monster, showing the glowing ring of superheated matter spiraling into oblivion. Stars near Sgr A* orbit at incredible speeds - some complete an orbit in just 16 years, reaching 7,650 kilometers per second! These observations proved Einstein\'s theory of general relativity in the most extreme gravitational environment possible. The black hole occasionally "feeds" on nearby material, causing dramatic flares visible to our telescopes.',
      discoveries: ['First image captured (2022)', 'Confirms Einstein\'s relativity', 'Stars orbit in 16 years', 'Mass: 4 million suns']
    },
    {
      title: 'M87* - The Photography Pioneer',
      description: 'M87* made history as the first black hole ever photographed by humanity! Located 55 million light-years away in the galaxy M87, this supermassive black hole contains 6.5 billion solar masses and powers a jet of particles that extends 5,000 light-years into space. The iconic 2019 image showed the "shadow" of the black hole against the bright accretion disk, confirming decades of theoretical predictions. The jet from M87* is so powerful it can be seen across the electromagnetic spectrum, from radio waves to gamma rays. This cosmic lighthouse helps us understand how black holes can influence entire galaxies.',
      discoveries: ['First black hole photo (2019)', 'Mass: 6.5 billion suns', '5,000 light-year jet', 'Confirms theoretical models']
    }
  ];

  const ongoingMissions = [
    {
      name: 'James Webb Space Telescope',
      year: '2021-Present',
      description: 'The most powerful space telescope ever built is revolutionizing our understanding of the universe! JWST peers deeper into space and further back in time than ever before, capturing light from the first galaxies that formed after the Big Bang. It has already discovered galaxies that are larger and more mature than expected for their age, forcing astronomers to revise theories about early cosmic evolution. The telescope\'s infrared vision allows it to see through cosmic dust, revealing star formation in unprecedented detail and analyzing the atmospheres of exoplanets for signs of water vapor and other potentially life-supporting molecules.',
      achievements: ['Deepest space images ever', 'First galaxies after Big Bang', 'Exoplanet atmosphere analysis', 'Star formation through dust clouds']
    },
    {
      name: 'Artemis Program',
      year: '2019-2030s',
      description: 'NASA\'s Artemis program aims to return humans to the Moon and establish a sustainable lunar presence, serving as a stepping stone to Mars! Artemis I successfully tested the Orion spacecraft in 2022, while Artemis II will carry astronauts around the Moon. The program plans to land the first woman and the first person of color on the lunar surface, establish a lunar base camp, and build the Gateway space station in lunar orbit. This ambitious program involves international partnerships and commercial companies, representing humanity\'s next giant leap in space exploration.',
      achievements: ['Artemis I success (2022)', 'International partnerships', 'Lunar Gateway station', 'Pathway to Mars missions']
    },
    {
      name: 'Parker Solar Probe',
      year: '2018-2025',
      description: 'The Parker Solar Probe is humanity\'s first mission to "touch" the Sun, diving closer to our star than any spacecraft in history! Protected by a revolutionary heat shield, it endures temperatures of 2,500°F while traveling at speeds of up to 430,000 mph - making it the fastest human-made object ever. The probe has already made groundbreaking discoveries about solar wind, magnetic fields, and the Sun\'s corona. It has revealed that the solar wind doesn\'t flow smoothly but comes in powerful bursts, and discovered "switchbacks" - mysterious S-shaped kinks in the solar magnetic field.',
      achievements: ['Closest approach to Sun', 'Fastest human-made object', 'Solar wind discoveries', 'Magnetic field mysteries solved']
    }
  ];

  const futureDiscoveries = [
    {
      title: 'Europa Clipper Mission (2024)',
      description: 'This groundbreaking mission will explore Jupiter\'s moon Europa, which harbors a subsurface ocean containing twice as much water as all Earth\'s oceans! Europa Clipper will perform nearly 50 flybys of Europa, using ice-penetrating radar to confirm the ocean\'s existence and study its depth, salinity, and interaction with the rocky seafloor. The mission will search for plumes of water vapor erupting from the surface and analyze their composition for organic compounds. If microbial life exists in Europa\'s hidden ocean, this mission could provide the first evidence of life beyond Earth!'
    },
    {
      title: 'Nancy Grace Roman Space Telescope (2027)',
      description: 'Often called the "Mother of Hubble," this next-generation space telescope will have a field of view 100 times larger than Hubble while maintaining the same image quality! The Roman telescope will conduct the largest survey of exoplanets ever attempted, potentially discovering thousands of new worlds including Earth-like planets in habitable zones. It will also investigate dark energy and dark matter - the mysterious components that make up 95% of our universe. The telescope could finally answer whether we are alone in the galaxy by detecting biosignatures in exoplanet atmospheres.'
    },
    {
      title: 'Mars Sample Return (2030s)',
      description: 'The holy grail of planetary science! This ambitious multi-mission campaign will bring Martian rocks and soil collected by the Perseverance rover back to Earth for detailed laboratory analysis. These samples could contain fossilized evidence of ancient Martian life, revolutionizing our understanding of biology in the universe. The mission involves unprecedented international cooperation and cutting-edge technology, including the first rocket launch from another planet\'s surface. Success would mark humanity\'s first round-trip journey to another planet and could rewrite the story of life in our solar system.'
    },
    {
      title: 'Breakthrough Starshot (2030s-2040s)',
      description: 'This visionary project aims to send tiny spacecraft to Proxima Centauri, our nearest stellar neighbor, using powerful laser propulsion! These gram-scale "StarChips" would travel at 20% the speed of light, reaching the closest potentially habitable exoplanet in just 20 years rather than tens of thousands. The project faces enormous technical challenges but could provide humanity\'s first close-up images of another star system and potentially discover signs of life on Proxima b. This mission represents the first step toward becoming an interstellar civilization.'
    }
  ];

  const marsFacts = [
    {
      title: 'The Crimson Mystery',
      description: 'Mars doesn\'t just look red - it IS red, and the reason is both beautiful and violent! Billions of years ago, iron-rich rocks on Mars reacted with oxygen and water to create iron oxide, literally painting an entire planet the color of rust. This cosmic rust storm created the mesmerizing crimson landscapes we see today. But here\'s the fascinating part: this rusty surface tells us that Mars once had a thick atmosphere and abundant water - conditions that could have supported life! Every grain of red dust is a tiny time capsule, preserving the story of a world that once might have been as blue and alive as Earth.',
      icon: Globe
    },
    {
      title: 'Rivers of Ancient Dreams',
      description: 'Billions of years ago, Mars was a water world that might have rivaled Earth in its beauty and habitability! Orbital images reveal an intricate network of ancient riverbeds, deltas, and lake shores that paint a picture of a planet once flowing with liquid water. The Jezero Crater, where Perseverance now roams, was once a pristine lake fed by rivers carrying sediments and possibly even microbial life from across the Martian landscape. Scientists have found evidence of ancient tsunamis that swept across Martian oceans, leaving behind massive deposits of rocks and debris.',
      icon: Wind
    },
    {
      title: 'The Solar System\'s Skyscraper',
      description: 'Forget Mount Everest - Mars is home to Olympus Mons, a volcano so massive it defies imagination! This colossal mountain stands 21 kilometers high and is so wide that its base could cover the entire state of Arizona. What makes this even more incredible is that Olympus Mons is a shield volcano, built up over millions of years by countless lava flows. The low gravity on Mars allowed it to grow to these impossible heights - on Earth, such a massive structure would collapse under its own weight!',
      icon: Mountain
    }
  ];

  const marsMissions = [
    {
      name: 'Perseverance Rover',
      year: '2021-Present',
      status: 'Active',
      description: 'Perseverance represents humanity\'s boldest attempt yet to answer the ultimate question: "Are we alone?" This cutting-edge rover landed in Jezero Crater, an ancient river delta that scientists believe could hold the key to discovering past microbial life on Mars. Perseverance is actively collecting rock and soil samples in specially designed tubes that will be retrieved by future missions and brought back to Earth. The rover can produce oxygen from the Martian atmosphere, proving that future astronauts could literally breathe easier on the Red Planet.',
      achievements: ['First helicopter flight on Mars (Ingenuity)', 'Oxygen production on Mars', 'Sample collection for future return', 'Evidence of ancient microbial life']
    },
    {
      name: 'Curiosity Rover',
      year: '2012-Present',
      status: 'Active',
      description: 'Meet the nuclear-powered marvel that has been our eyes and hands on Mars for over a decade! Curiosity is a mobile laboratory the size of a car, equipped with 17 cameras and scientific instruments. This incredible machine has traveled over 28 kilometers across the Martian landscape, drilling into rocks, analyzing soil samples, and making critical decisions autonomously while being 14 minutes away from Earth at light speed.',
      achievements: ['Confirmed ancient water activity', 'Detected methane in atmosphere', 'Found organic compounds', 'Identified ancient habitable environments']
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
                <Telescope className="w-8 h-8 text-blue-400" />
                <h1 className="text-2xl md:text-3xl font-bold text-white">Space Explorer</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Explore
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                The Universe
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Journey through the cosmos and discover the wonders of space exploration. From Mars missions to black holes, 
              from distant planets to cutting-edge research - explore humanity's greatest adventure into the unknown.
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('mars')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'mars'
                  ? 'bg-red-500/30 text-red-400 border border-red-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Mars Research
            </button>
            <button
              onClick={() => setActiveTab('planets')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'planets'
                  ? 'bg-blue-500/30 text-blue-400 border border-blue-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Other Planets
            </button>
            <button
              onClick={() => setActiveTab('blackholes')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'blackholes'
                  ? 'bg-purple-500/30 text-purple-400 border border-purple-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Black Holes
            </button>
            <button
              onClick={() => setActiveTab('missions')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'missions'
                  ? 'bg-green-500/30 text-green-400 border border-green-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Current Missions
            </button>
            <button
              onClick={() => setActiveTab('future')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'future'
                  ? 'bg-yellow-500/30 text-yellow-400 border border-yellow-400/50'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Future Discoveries
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <main className="container mx-auto px-4 pb-16">
          {activeTab === 'mars' && (
            <div className="space-y-12">
              {/* Mars Facts */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Mars Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {marsFacts.map((fact, index) => {
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
              </div>

              {/* Mars Missions */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Mars Missions</h2>
                <div className="space-y-8">
                  {marsMissions.map((mission, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{mission.name}</h3>
                          <div className="flex items-center space-x-4">
                            <span className="text-gray-400">{mission.year}</span>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-400/30">
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
              </div>

              {/* Mars Stats */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Mars Statistics</h2>
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
              </div>
            </div>
          )}

          {activeTab === 'planets' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Planetary Exploration</h2>
              {planets.map((planet, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{planet.name}</h3>
                      <p className={`text-xl font-medium ${planet.color} mb-4`}>{planet.subtitle}</p>
                    </div>
                    <Globe className={`w-16 h-16 ${planet.color} mt-4 md:mt-0`} />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{planet.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Quick Facts:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {planet.stats.map((stat, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                          <span className="text-gray-300 text-sm">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'blackholes' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Black Hole Discoveries</h2>
              {blackHoles.map((blackHole, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-black rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{blackHole.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{blackHole.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Discoveries:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {blackHole.discoveries.map((discovery, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{discovery}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'missions' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Ongoing NASA Missions</h2>
              {ongoingMissions.map((mission, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{mission.name}</h3>
                      <span className="text-gray-400">{mission.year}</span>
                    </div>
                    <Satellite className="w-12 h-12 text-green-400 mt-4 md:mt-0" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{mission.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Major Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {mission.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'future' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Future Space Discoveries</h2>
              {futureDiscoveries.map((discovery, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <Target className="w-12 h-12 text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">{discovery.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{discovery.description}</p>
                </div>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MarsInfo;
