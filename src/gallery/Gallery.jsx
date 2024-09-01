import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tripsData from '../tripsData'; // Asegúrate de que la ruta sea correcta
import ImageGrid from './GalleryGrid.jsx';
import Lightbox from './Lightbox.jsx';

const Gallery = () => {
  const { id } = useParams(); // Captura el id de la URL
  const [hotel, setHotel] = useState(null);
  const [images, setImages] = useState([]);
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0, image: null });

  // Coloca aquí el useEffect que revisa los datos del hotel
  useEffect(() => {
    console.log('Captured id from URL:', id);

    if (!tripsData || tripsData.length === 0) {
      console.error('tripsData is undefined or empty');
      return;
    }

    let foundHotel = null;

    for (let city of tripsData) {
      console.log(`Checking city: ${city.destination}`); // Verifica cada ciudad

      const selectedHotel = city.hotels.find(hotel => hotel.id === parseInt(id));
      if (selectedHotel) {
        console.log('Found hotel:', selectedHotel); // Verifica si el hotel fue encontrado
        foundHotel = selectedHotel;
        break; 
      }
    }

    if (foundHotel) {
      console.log('Hotel found, checking galleryImages:', foundHotel.galleryImages);
      setHotel(foundHotel);
      setImages(foundHotel.galleryImages || []);
    } else {
      console.warn('Hotel not found');
    }
  }, [id]);

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

  if (!hotel) {
    return <div>Loading hotel details...</div>;
  }

  if (images.length === 0) {
    return <div>No images available in the gallery for this hotel</div>;
  }

  return (
    <div className="gallery-container">
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
    </div>
  );
};

export default Gallery;
