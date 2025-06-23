
import { Mail, MapPin, Code, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-black/30 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              RedPlanet <span className="text-red-400">Explorer</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Journey through the cosmos and explore the Red Planet through NASA's Mars rover missions. 
              Discover breathtaking Martian landscapes captured by Curiosity rover.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Live NASA Data</span>
            </div>
          </div>

          {/* Mission Stats */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Mission Stats</h4>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-red-400 font-bold text-xl">Sol 1000</div>
                <div className="text-gray-400 text-sm">Martian Day</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-blue-400 font-bold text-xl">Curiosity</div>
                <div className="text-gray-400 text-sm">Active Rover</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-purple-400 font-bold text-xl">2012</div>
                <div className="text-gray-400 text-sm">Landing Year</div>
              </div>
            </div>
          </div>

          {/* Developer Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center md:justify-end">
              <Code className="w-5 h-5 mr-2" />
              Developed With <Heart className="w-4 h-4 mx-1 text-red-400" />
            </h4>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="font-semibold text-white text-lg">Wasib Zameer</div>
                <div className="flex items-center justify-center md:justify-end text-gray-300 mt-2">
                  <Mail className="w-4 h-4 mr-2" />
                  <a 
                    href="mailto:wasibhussain3@gmail.com" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    wasibhussain3@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-end text-gray-300 mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>2025 RedPlanet Explorer. Powered by NASA Open Data API.</p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://api.nasa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors"
              >
                NASA API <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span>Mars Rover Photos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute rounded-full opacity-5 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
            width: '300px',
            height: '300px',
            bottom: '-150px',
            right: '-150px',
            animationDuration: '10s',
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
