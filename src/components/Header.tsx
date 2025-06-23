
import { useState } from 'react';
import { Rocket, Camera, Calendar, Globe } from 'lucide-react';

interface HeaderProps {
  onCameraFilter: (camera: string | null) => void;
  currentCamera: string | null;
}

const Header = ({ onCameraFilter, currentCamera }: HeaderProps) => {
  const cameras = [
    { id: null, name: 'All Cameras', icon: Globe },
    { id: 'fhaz', name: 'Front Hazard', icon: Camera },
    { id: 'rhaz', name: 'Rear Hazard', icon: Camera },
    { id: 'mast', name: 'Mast Camera', icon: Camera },
    { id: 'chemcam', name: 'ChemCam', icon: Camera },
  ];

  return (
    <header className="relative overflow-hidden">
      {/* Animated Planets Section */}
      <div className="relative h-32 md:h-40 overflow-hidden">
        {/* Mars - Main focus planet */}
        <div 
          className="absolute rounded-full animate-spin z-10"
          style={{
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle at 30% 30%, #ff6b35, #d84315, #8b2635)',
            top: '20%',
            right: '15%',
            animationDuration: '30s',
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.6), inset -10px -10px 20px rgba(0,0,0,0.3)',
          }}
        >
          <div className="absolute inset-2 rounded-full opacity-60">
            <div className="w-2 h-2 bg-red-900 rounded-full absolute top-2 left-3"></div>
            <div className="w-1 h-1 bg-red-800 rounded-full absolute bottom-3 right-2"></div>
            <div className="w-3 h-1 bg-red-800 rounded-full absolute top-1/2 left-1"></div>
          </div>
        </div>

        {/* Earth */}
        <div 
          className="absolute rounded-full animate-spin"
          style={{
            width: '45px',
            height: '45px',
            background: 'radial-gradient(circle at 30% 30%, #4fc3f7, #2196f3, #1565c0)',
            top: '60%',
            left: '20%',
            animationDuration: '25s',
            boxShadow: '0 0 30px rgba(79, 195, 247, 0.4)',
          }}
        >
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <div className="w-3 h-2 bg-green-600 rounded-full absolute top-1 left-2 opacity-70"></div>
            <div className="w-2 h-1 bg-green-600 rounded-full absolute bottom-2 right-2 opacity-70"></div>
          </div>
        </div>

        {/* Jupiter */}
        <div 
          className="absolute rounded-full animate-spin"
          style={{
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle at 30% 30%, #ffab40, #ff9800, #f57c00)',
            bottom: '10%',
            right: '5%',
            animationDuration: '45s',
            boxShadow: '0 0 50px rgba(255, 171, 64, 0.4)',
          }}
        >
          <div className="absolute inset-3 rounded-full overflow-hidden">
            <div className="w-full h-px bg-orange-800 absolute top-2 opacity-60"></div>
            <div className="w-full h-px bg-orange-900 absolute top-4 opacity-50"></div>
            <div className="w-3 h-1 bg-red-600 rounded-full absolute top-1/2 left-1/3 opacity-80"></div>
          </div>
        </div>

        {/* Orbital paths */}
        <div 
          className="absolute rounded-full border border-white opacity-10 animate-spin"
          style={{
            width: '200px',
            height: '200px',
            top: '10%',
            left: '40%',
            animationDuration: '60s',
            borderStyle: 'dashed',
          }}
        ></div>
      </div>

      {/* Navigation */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {cameras.map((camera) => {
              const IconComponent = camera.icon;
              return (
                <button
                  key={camera.id || 'all'}
                  onClick={() => onCameraFilter(camera.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentCamera === camera.id
                      ? 'bg-red-500/30 text-red-400 border border-red-400/50'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{camera.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
