import { useState } from 'react';
import { X } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images - add your images to /public/images/ folder
  const galleryImages = [
    { id: 1, src: '/images/temple-exterior.jpg', alt: 'Temple Exterior', category: 'Mandir' },
    { id: 2, src: '/images/baba-murti-throne.jpg', alt: 'Baba Murti on Golden Throne', category: 'Darshan' },
    { id: 3, src: '/images/baba-murti-portrait.jpg', alt: 'Baba Murti Portrait', category: 'Darshan' },
    { id: 4, src: '/images/aarti-ceremony.jpg', alt: 'Aarti Ceremony', category: 'Events' },
    { id: 5, src: '/images/prasadalay.jpg', alt: 'Prasadalay', category: 'Facilities' },
    { id: 6, src: '/images/bhajan-session.jpg', alt: 'Bhajan Session', category: 'Events' },
    { id: 7, src: '/images/resource-centre.jpg', alt: 'Resource Centre', category: 'Facilities' },
    { id: 8, src: '/images/festival-celebration.jpg', alt: 'Festival Celebration', category: 'Events' },
    { id: 9, src: '/images/temple-interior.jpg', alt: 'Temple Interior', category: 'Mandir' },
    { id: 10, src: '/images/devotees.jpg', alt: 'Devotees', category: 'Community' },
    { id: 11, src: '/images/sai-niwas-construction.jpg', alt: 'Sai Niwas Construction', category: 'Sai Niwas' },
    { id: 12, src: '/images/parking-area.jpg', alt: 'Parking Area', category: 'Facilities' },
    { id: 13, src: '/images/special-puja.jpg', alt: 'Special Puja', category: 'Events' }
  ];

  const categories = ['All', 'Mandir', 'Darshan', 'Events', 'Facilities', 'Community', 'Sai Niwas'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl">Capturing moments of devotion and celebration</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="card overflow-hidden cursor-pointer group"
              >
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + image.alt + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      View
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-600">{image.category}</p>
                  <p className="font-semibold text-gray-800">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + selectedImage.alt + '%3C/text%3E%3C/svg%3E';
              }}
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;

