import React, { useState } from 'react';
import ImageGrid from './GalleryGrid.jsx';
import Lightbox from './Lightbox.jsx';

const Gallery = ({ images }) => {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0, image: null });

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, index, image: images[index] });
  };

  const closeLightbox = () => setLightbox({ isOpen: false, index: 0, image: null });

  const goToNextImage = () => {
    setLightbox((prev) => {
      const newIndex = (prev.index + 1) % images.length;
      return { ...prev, index: newIndex, image: images[newIndex] };
    });
  };

  const goToPreviousImage = () => {
    setLightbox((prev) => {
      const newIndex = (prev.index + images.length - 1) % images.length;
      return { ...prev, index: newIndex, image: images[newIndex] };
    });
  };

  if (images.length === 0) {
    return <div>No images available in the gallery for this hotel</div>;
  }

  return (
    <>
      <ImageGrid images={images} openLightbox={openLightbox} totalImages={images.length} />

      {lightbox.isOpen && (
        <Lightbox
          lightbox={lightbox}
          closeLightbox={closeLightbox}
          goToNextImage={goToNextImage}
          goToPreviousImage={goToPreviousImage}
          totalImages={images.length}
        />
      )}
    </>
  );
};

export default Gallery;