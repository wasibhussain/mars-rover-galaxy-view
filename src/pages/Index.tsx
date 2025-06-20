
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import PhotoCard from '@/components/PhotoCard';
import LoadingSpinner from '@/components/LoadingSpinner';

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

interface ApiResponse {
  photos: Photo[];
}

const fetchMarsPhotos = async (): Promise<ApiResponse> => {
  const response = await fetch(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=sSae3cM22CDW30j6lfXYMv4I13jn6uCVvx65JebR'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Mars photos');
  }
  return response.json();
};

const Index = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['marsPhotos'],
    queryFn: fetchMarsPhotos,
  });

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Error loading Mars photos</h2>
          <p className="text-gray-300">Failed to connect to NASA API</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-16 px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Mars Rover
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the Red Planet through the lens of NASA's Curiosity rover. 
            Journey through Martian landscapes captured on Sol 1000.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Data from NASA API</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-4 pb-16">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    {data?.photos.length || 0}
                  </div>
                  <div className="text-gray-300">Photos Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">1000</div>
                  <div className="text-gray-300">Martian Sol</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    {data?.photos[0]?.earth_date || 'N/A'}
                  </div>
                  <div className="text-gray-300">Earth Date</div>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.photos.map((photo) => (
                  <PhotoCard key={photo.id} photo={photo} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
