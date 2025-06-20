
const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
            width: '800px',
            height: '800px',
            top: '10%',
            left: '20%',
            animationDuration: '8s',
          }}
        />
        <div 
          className="absolute rounded-full opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
            width: '600px',
            height: '600px',
            top: '60%',
            right: '10%',
            animationDuration: '12s',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute rounded-full opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            width: '400px',
            height: '400px',
            top: '30%',
            right: '30%',
            animationDuration: '15s',
            animationDelay: '5s',
          }}
        />
      </div>

      {/* Animated Planets */}
      <div className="absolute inset-0">
        {/* Mars - Main focus planet */}
        <div 
          className="absolute rounded-full animate-spin"
          style={{
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle at 30% 30%, #ff6b35, #d84315, #8b2635)',
            top: '20%',
            right: '15%',
            animationDuration: '30s',
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.4), inset -10px -10px 20px rgba(0,0,0,0.3)',
          }}
        >
          {/* Mars surface details */}
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
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle at 30% 30%, #4fc3f7, #2196f3, #1565c0)',
            top: '70%',
            left: '10%',
            animationDuration: '25s',
            boxShadow: '0 0 30px rgba(79, 195, 247, 0.3), inset -8px -8px 15px rgba(0,0,0,0.3)',
          }}
        >
          {/* Earth continents */}
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <div className="w-4 h-3 bg-green-600 rounded-full absolute top-1 left-2 opacity-70"></div>
            <div className="w-2 h-2 bg-green-600 rounded-full absolute bottom-2 right-3 opacity-70"></div>
            <div className="w-3 h-2 bg-green-600 rounded-full absolute top-1/2 right-0 opacity-70"></div>
          </div>
        </div>

        {/* Jupiter */}
        <div 
          className="absolute rounded-full animate-spin"
          style={{
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle at 30% 30%, #ffab40, #ff9800, #f57c00)',
            bottom: '10%',
            right: '5%',
            animationDuration: '45s',
            boxShadow: '0 0 60px rgba(255, 171, 64, 0.3), inset -12px -12px 25px rgba(0,0,0,0.3)',
          }}
        >
          {/* Jupiter bands */}
          <div className="absolute inset-3 rounded-full overflow-hidden">
            <div className="w-full h-1 bg-orange-800 absolute top-2 opacity-60"></div>
            <div className="w-full h-1 bg-orange-900 absolute top-6 opacity-50"></div>
            <div className="w-full h-1 bg-orange-800 absolute bottom-3 opacity-60"></div>
            {/* Great Red Spot */}
            <div className="w-4 h-2 bg-red-600 rounded-full absolute top-1/2 left-1/3 opacity-80"></div>
          </div>
        </div>

        {/* Saturn with rings */}
        <div 
          className="absolute"
          style={{
            top: '40%',
            left: '5%',
            width: '90px',
            height: '90px',
          }}
        >
          {/* Saturn rings */}
          <div 
            className="absolute rounded-full border-2 border-yellow-400 opacity-40 animate-spin"
            style={{
              width: '120px',
              height: '120px',
              top: '-15px',
              left: '-15px',
              animationDuration: '35s',
              borderStyle: 'dashed',
            }}
          ></div>
          <div 
            className="absolute rounded-full border border-yellow-300 opacity-30 animate-spin"
            style={{
              width: '110px',
              height: '110px',
              top: '-10px',
              left: '-10px',
              animationDuration: '35s',
              borderStyle: 'dotted',
            }}
          ></div>
          {/* Saturn planet */}
          <div 
            className="absolute rounded-full animate-spin"
            style={{
              width: '70px',
              height: '70px',
              background: 'radial-gradient(circle at 30% 30%, #fff176, #ffeb3b, #f9a825)',
              top: '10px',
              left: '10px',
              animationDuration: '32s',
              boxShadow: '0 0 40px rgba(255, 241, 118, 0.3), inset -8px -8px 15px rgba(0,0,0,0.3)',
            }}
          >
            {/* Saturn bands */}
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <div className="w-full h-px bg-yellow-800 absolute top-2 opacity-50"></div>
              <div className="w-full h-px bg-yellow-900 absolute top-4 opacity-40"></div>
              <div className="w-full h-px bg-yellow-800 absolute bottom-3 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Small asteroids */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`asteroid-${i}`}
            className="absolute rounded-full bg-gray-500 animate-pulse"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
              boxShadow: '0 0 10px rgba(156, 163, 175, 0.3)',
            }}
          />
        ))}

        {/* Orbital paths (subtle) */}
        <div 
          className="absolute rounded-full border border-white opacity-5 animate-spin"
          style={{
            width: '300px',
            height: '300px',
            top: '30%',
            left: '30%',
            animationDuration: '60s',
            borderStyle: 'dashed',
          }}
        ></div>
        <div 
          className="absolute rounded-full border border-white opacity-3 animate-spin"
          style={{
            width: '500px',
            height: '500px',
            top: '20%',
            left: '20%',
            animationDuration: '80s',
            borderStyle: 'dotted',
            animationDirection: 'reverse',
          }}
        ></div>
      </div>
    </div>
  );
};

export default GalaxyBackground;
