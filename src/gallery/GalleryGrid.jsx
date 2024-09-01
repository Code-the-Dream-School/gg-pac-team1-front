import Image from './Image';

const ImageGrid = ({ images, openLightbox, totalImages }) => {
  // Verifica que images sea un array y tenga al menos un elemento
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="main-container">
      <div className="top-row">
        <div className="top-row-left">
          {images[0] && (
            <Image 
              src={images[0].url} 
              alt={images[0].description} 
              className="large-image" 
              onClick={() => openLightbox(0)} 
            />
          )}
        </div>
        <div className="top-row-right">
          {images.slice(1, 5).map((image, index) => (
            <Image 
              key={index + 1}  // Cambiado para evitar problemas de claves duplicadas
              src={image.url} 
              alt={image.description} 
              className="small-image" 
              onClick={() => openLightbox(index + 1)} 
            />
          ))}
        </div>
      </div>
      <div className="bottom-row">
        {images.slice(5, 13).map((image, index) => (
          <div key={index + 5} className="bottom-image-container">
            <Image 
              src={image.url} 
              alt={image.description} 
              className="bottom-image" 
              onClick={() => openLightbox(index + 5)} 
            />
            {index === 7 && totalImages > 13 && (
              <a 
                href="#" 
                className="view-more" 
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(13);
                }}
              >
                {`+${totalImages - 13} more`}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
