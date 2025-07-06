import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
  genre: string;
}

export default function GalleryPage() {
  // TODO: Replace with real photo data from your collection or API
  const photos: Photo[] = [
    { id: 1, src: 'https://picsum.photos/400/600?random=20', alt: 'Landscape photo 1', genre: 'landscape' },
    { id: 2, src: 'https://picsum.photos/400/600?random=21', alt: 'Portrait photo 1', genre: 'portrait' },
    { id: 3, src: 'https://picsum.photos/400/600?random=22', alt: 'Wildlife photo 1', genre: 'wildlife' },
    { id: 4, src: 'https://picsum.photos/400/600?random=23', alt: 'Street photo 1', genre: 'street' },
    { id: 5, src: 'https://picsum.photos/400/600?random=24', alt: 'Astro photo 1', genre: 'astro' },
    { id: 6, src: 'https://picsum.photos/400/600?random=25', alt: 'Event photo 1', genre: 'events' },
    { id: 7, src: 'https://picsum.photos/400/600?random=26', alt: 'Landscape photo 2', genre: 'landscape' },
    { id: 8, src: 'https://picsum.photos/400/600?random=27', alt: 'Portrait photo 2', genre: 'portrait' },
    { id: 9, src: 'https://picsum.photos/400/600?random=28', alt: 'Wildlife photo 2', genre: 'wildlife' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my collection of photography across different genres and styles
        </p>
        <Link 
          href="/"
          className="inline-block mt-6 text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-w-3 aspect-h-4">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black bg-opacity-70 px-2 py-1 rounded text-sm capitalize">
                  {photo.genre}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* TODO: Add pagination or infinite scroll for larger collections */}
    </div>
  );
}
