
import { useState } from 'react';
import { Camera, Calendar, Cpu, MapPin } from 'lucide-react';

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-red-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse flex items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-orange-900/30 flex items-center justify-center">
            <div className="text-center text-white">
              <Camera className="mx-auto mb-2 w-8 h-8" />
              <div className="text-sm">Image unavailable</div>
            </div>
          </div>
        ) : (
          <img
            src={photo.img_src}
            alt={`Mars photo taken by ${photo.camera.full_name}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        {/* Overlay with photo ID */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-mono border border-white/20">
          #{photo.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rover name */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{photo.rover.name}</h3>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            photo.rover.status === 'active' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {photo.rover.status}
          </div>
        </div>

        {/* Camera info */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-3 text-gray-300">
            <Camera className="w-4 h-4 text-blue-400" />
            <div>
              <div className="font-medium text-white">{photo.camera.name}</div>
              <div className="text-sm text-gray-400">{photo.camera.full_name}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-300">
            <MapPin className="w-4 h-4 text-red-400" />
            <div>
              <div className="font-medium text-white">Sol {photo.sol}</div>
              <div className="text-sm text-gray-400">Martian Day</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-300">
            <Calendar className="w-4 h-4 text-purple-400" />
            <div>
              <div className="font-medium text-white">{photo.earth_date}</div>
              <div className="text-sm text-gray-400">Earth Date</div>
            </div>
          </div>
        </div>

        {/* Mission info */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div>
              <span className="font-medium">Launched:</span> {photo.rover.launch_date}
            </div>
            <div>
              <span className="font-medium">Landed:</span> {photo.rover.landing_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
