const ImageFullScreen = ({ image, description, onClose, title }) => {

  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <div className="fullscreen-content">
        <img src={image} alt="Full-Screen" />

        <div className="fullscreen-description">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageFullScreen;
