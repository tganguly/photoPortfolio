import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EventsByGenre from '../components/EventsByGenre';

interface Genre {
  name: string;
  slug: string;
  thumbnail: string;
}

export default function HomePage() {
  // TODO: Replace with real image URLs from your photo collection
  const genres: Genre[] = [
    {
      name: 'Landscape',
      slug: 'landscape',
      thumbnail: 'https://picsum.photos/400/300?random=1', // TODO: Replace with real landscape thumbnail
    },
    {
      name: 'Portrait',
      slug: 'portrait',
      thumbnail: 'https://picsum.photos/400/300?random=2', // TODO: Replace with real portrait thumbnail
    },
    {
      name: 'Wildlife',
      slug: 'wildlife',
      thumbnail: 'https://picsum.photos/400/300?random=3', // TODO: Replace with real wildlife thumbnail
    },
    {
      name: 'Street',
      slug: 'street',
      thumbnail: 'https://picsum.photos/400/300?random=4', // TODO: Replace with real street photography thumbnail
    },
    {
      name: 'Astro',
      slug: 'astro',
      thumbnail: 'https://picsum.photos/400/300?random=5', // TODO: Replace with real astrophotography thumbnail
    },
    {
      name: 'Events',
      slug: 'events',
      thumbnail: 'https://picsum.photos/400/300?random=6', // TODO: Replace with real event photography thumbnail
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/1920/1080?random=7" // TODO: Replace with real hero image
            alt="Photography hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Capturing Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Professional photography that tells your story through stunning visuals and authentic emotions
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Genre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different styles of photography, each capturing unique perspectives and moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {genres.map((genre) => (
              <Link
                key={genre.slug}
                href={`/gallery?genre=${genre.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={genre.thumbnail}
                    alt={`${genre.name} photography examples`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                
                {/* Genre Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                    {genre.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events Carousel Section */}
      <section className="py-16 bg-white">
        {/* Example with one genre - you can add more or make it dynamic */}
        <EventsByGenre genreSlug="landscape" />
      </section>
    </div>
  );
}
