'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface EventsByGenreProps {
  genreSlug: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

const EventsByGenre: React.FC<EventsByGenreProps> = ({ genreSlug }) => {
  // TODO: Replace with real API data fetch based on genreSlug
  const events: Event[] = [
    {
      id: 1,
      title: `${genreSlug.charAt(0).toUpperCase() + genreSlug.slice(1)} Photography Workshop`,
      date: '2024-08-15',
      image: 'https://picsum.photos/400/300?random=10', // TODO: Replace with real image URLs
    },
    {
      id: 2,
      title: `${genreSlug.charAt(0).toUpperCase() + genreSlug.slice(1)} Exhibition Opening`,
      date: '2024-09-22',
      image: 'https://picsum.photos/400/300?random=11', // TODO: Replace with real image URLs
    },
    {
      id: 3,
      title: `${genreSlug.charAt(0).toUpperCase() + genreSlug.slice(1)} Photo Walk`,
      date: '2024-10-10',
      image: 'https://picsum.photos/400/300?random=12', // TODO: Replace with real image URLs
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Upcoming {genreSlug.charAt(0).toUpperCase() + genreSlug.slice(1)} Events
      </h3>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={event.image}
                  alt={`${event.title} event`}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h4>
                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsByGenre;
