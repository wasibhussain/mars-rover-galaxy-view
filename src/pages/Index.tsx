
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import PhotoCard from '@/components/PhotoCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import GalaxyBackground from '@/components/GalaxyBackground';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

const ITEMS_PER_PAGE = 18;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['marsPhotos'],
    queryFn: fetchMarsPhotos,
  });

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'RedPlanet Explorer | NASA Mars Rover Photos Gallery';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore stunning Mars rover photos from NASA\'s Curiosity mission. Journey through the Red Planet with our immersive galaxy-themed photo gallery featuring real Martian landscapes.');
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <GalaxyBackground />
        <div className="text-center text-white relative z-10">
          <h2 className="text-2xl font-bold mb-4">Error loading Mars photos</h2>
          <p className="text-gray-300">Failed to connect to NASA API</p>
        </div>
      </div>
    );
  }

  // Calculate pagination
  const totalPhotos = data?.photos.length || 0;
  const totalPages = Math.ceil(totalPhotos / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPhotos = data?.photos.slice(startIndex, endIndex) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GalaxyBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-16 px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            RedPlanet
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Explorer
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-2">
            Journey through the cosmos and explore the Red Planet through NASA's Curiosity rover. 
            Witness breathtaking Martian landscapes captured on Sol 1000 of this historic mission.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Real NASA data • Live from Mars • Sol 1000 Mission Day
          </p>
          <div className="mt-8 flex justify-center items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live NASA API</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span>Mars Mission Active</span>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {totalPhotos}
                  </div>
                  <div className="text-gray-300 text-sm">Total Photos</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{currentPhotos.length}</div>
                  <div className="text-gray-300 text-sm">Current Page</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">1000</div>
                  <div className="text-gray-300 text-sm">Martian Sol</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {data?.photos[0]?.earth_date || 'N/A'}
                  </div>
                  <div className="text-gray-300 text-sm">Earth Date</div>
                </div>
              </div>

              {/* Page Info */}
              <div className="text-center mb-8">
                <p className="text-gray-400">
                  Page {currentPage} of {totalPages} • Showing {currentPhotos.length} of {totalPhotos} photos
                </p>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPhotos.map((photo) => (
                  <PhotoCard key={photo.id} photo={photo} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mb-8">
                  <PaginationContent className="gap-2">
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={`bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white ${
                          currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        }`}
                      />
                    </PaginationItem>
                    
                    {/* Show first page */}
                    {currentPage > 3 && (
                      <>
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => handlePageChange(1)}
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white cursor-pointer"
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        {currentPage > 4 && <span className="text-white px-2">...</span>}
                      </>
                    )}

                    {/* Show pages around current page */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNumber = Math.max(1, currentPage - 2) + i;
                      if (pageNumber > totalPages) return null;
                      
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            onClick={() => handlePageChange(pageNumber)}
                            isActive={pageNumber === currentPage}
                            className={`backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white cursor-pointer ${
                              pageNumber === currentPage 
                                ? 'bg-red-500/30 border-red-400/50' 
                                : 'bg-white/10'
                            }`}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    {/* Show last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && <span className="text-white px-2">...</span>}
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => handlePageChange(totalPages)}
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white cursor-pointer"
                          >
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}

                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={`bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white ${
                          currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        }`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
