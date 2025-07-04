import React from 'react';

const Gallery: React.FC = () => {
    const photos = [
        // Add photo URLs or import them from a local source
        '/assets/photo1.jpg',
        '/assets/photo2.jpg',
        '/assets/photo3.jpg',
        // More photos can be added here
    ];

    return (
        <div className="gallery">
            {photos.map((photo, index) => (
                <div key={index} className="gallery-item">
                    <img src={photo} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;