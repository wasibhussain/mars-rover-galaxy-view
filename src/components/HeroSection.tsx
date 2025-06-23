
import { Rocket, Camera, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="text-center py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          RedPlanet
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
            Explorer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
          Journey through the cosmos and explore the Red Planet through NASA's Curiosity rover. 
          Witness breathtaking Martian landscapes captured on Sol 1000 of this historic mission.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <Camera className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Real NASA Photos</div>
            <div className="text-gray-400 text-sm">Direct from Mars rovers</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <Rocket className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Live Mission Data</div>
            <div className="text-gray-400 text-sm">Updated continuously</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Multiple Cameras</div>
            <div className="text-gray-400 text-sm">Different perspectives</div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live NASA API</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span>Mars Mission Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Real-time Data</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
