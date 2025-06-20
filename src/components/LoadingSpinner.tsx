
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Spinning galaxy effect */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-400"></div>
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-blue-500/30 rounded-full animate-spin border-t-blue-400 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-8 h-8 border-4 border-pink-500/30 rounded-full animate-spin border-t-pink-400" style={{animationDirection: 'reverse'}}></div>
      </div>
      
      {/* Loading text */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Connecting to Mars...
        </h3>
        <p className="text-gray-300 animate-pulse">
          Fetching rover photos from the Red Planet
        </p>
      </div>
      
      {/* Animated dots */}
      <div className="flex space-x-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
