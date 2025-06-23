import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import PhotoCard from '@/components/PhotoCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import GalaxyBackground from '@/components/GalaxyBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
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

const fetchMarsPhotos = async (camera: string | null = null, page: number = 1): Promise<ApiResponse> => {
  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';
  
  if (camera) {
    url += `&camera=${camera}`;
  }
  
  if (page > 1) {
    url += `&page=${page}`;
  }
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Mars photos');
  }
  return response.json();
};

const ITEMS_PER_PAGE = 18;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['marsPhotos', selectedCamera, currentPage],
    queryFn: () => fetchMarsPhotos(selectedCamera, currentPage),
  });

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'RedPlanet Explorer | NASA Mars Rover Photos Gallery';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore stunning Mars rover photos from NASA\'s Curiosity mission. Journey through the Red Planet with our immersive galaxy-themed photo gallery featuring real Martian landscapes.');
    }
  }, []);

  // Reset page when camera filter changes
  const handleCameraFilter = (camera: string | null) => {
    setSelectedCamera(camera);
    setCurrentPage(1);
  };

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
        {/* Header with Navigation */}
        <Header onCameraFilter={handleCameraFilter} currentCamera={selectedCamera} />

        {/* Hero Section */}
        <HeroSection />

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
                  <div className="text-gray-300 text-sm">
                    {selectedCamera ? `${selectedCamera.toUpperCase()} Photos` : 'Total Photos'}
                  </div>
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

              {/* Filter Info */}
              {selectedCamera && (
                <div className="text-center mb-8">
                  <div className="inline-flex items-center bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 text-red-400">
                    <span className="text-sm">
                      Showing photos from {selectedCamera.toUpperCase()} camera
                    </span>
                  </div>
                </div>
              )}

              {/* Page Info */}
              <div className="text-center mb-8">
                <p className="text-gray-400">
                  Page {currentPage} • Showing {currentPhotos.length} of {totalPhotos} photos
                  {selectedCamera && ` from ${selectedCamera.toUpperCase()}`}
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
