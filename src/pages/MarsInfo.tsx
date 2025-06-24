
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
      description: 'Nuclear-powered rover studying Martian geology and climate. Has traveled over 28 km on Mars surface.',
      achievements: ['Confirmed ancient water activity', 'Detected methane in atmosphere', 'Found organic compounds']
    },
    {
      name: 'Perseverance Rover',
      year: '2021-Present',
      status: 'Active',
      description: 'Advanced rover searching for signs of ancient microbial life and collecting samples.',
      achievements: ['First helicopter flight on Mars (Ingenuity)', 'Oxygen production on Mars', 'Sample collection for future return']
    },
    {
      name: 'Viking Program',
      year: '1976-1982',
      status: 'Complete',
      description: 'First successful US landing on Mars with two orbiters and two landers.',
      achievements: ['First detailed Mars surface images', 'Atmospheric composition analysis', 'Search for life experiments']
    },
    {
      name: 'Mars Reconnaissance Orbiter',
      year: '2006-Present',
      status: 'Active',
      description: 'Orbiter providing detailed reconnaissance of Mars surface and atmosphere.',
      achievements: ['High-resolution surface mapping', 'Weather monitoring', 'Water ice discovery']
    }
  ];

  const facts = [
    {
      title: 'The Red Planet',
      description: 'Mars appears red due to iron oxide (rust) on its surface, giving it the nickname "The Red Planet".',
      icon: Globe
    },
    {
      title: 'Two Moons',
      description: 'Mars has two small moons: Phobos and Deimos, both likely captured asteroids.',
      icon: Calendar
    },
    {
      title: 'Largest Volcano',
      description: 'Olympus Mons on Mars is the largest volcano in the solar system, nearly 3 times taller than Mount Everest.',
      icon: Mountain
    },
    {
      title: 'Ancient Water',
      description: 'Evidence shows Mars once had liquid water on its surface, with ancient river valleys and lake beds.',
      icon: Wind
    },
    {
      title: 'Polar Ice Caps',
      description: 'Mars has polar ice caps made of water ice and frozen carbon dioxide (dry ice).',
      icon: Thermometer
    },
    {
      title: 'Dust Storms',
      description: 'Mars experiences planet-wide dust storms that can last for months and cover the entire planet.',
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
              incredible discoveries, and the ongoing quest to understand our neighboring world.
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
                    <p className="text-gray-300 leading-relaxed">{fact.description}</p>
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
                  <p className="text-gray-300 mb-6 leading-relaxed">{mission.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {mission.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
