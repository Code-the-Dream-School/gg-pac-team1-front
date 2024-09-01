const Lightbox = ({ lightbox: { isOpen, index, image }, closeLightbox, goToNextImage, goToPreviousImage, totalImages }) => {
    if (!isOpen || !image) return null;
  
    return (
      <div className="lightbox" onClick={closeLightbox}>
        <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
        <div className="lightbox-content-container" onClick={(e) => e.stopPropagation()}>
          <img src={image.url} className="lightbox-content" alt={image.description} />
          <button className="lightbox-prev" onClick={goToPreviousImage}>&#10094;</button>
          <button className="lightbox-next" onClick={goToNextImage}>&#10095;</button>
          <div className="lightbox-counter">
            {index + 1} / {totalImages}
          </div>
        </div>
      </div>
    );
  };
  
  export default Lightbox;
  