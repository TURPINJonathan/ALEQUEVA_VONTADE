import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import useResponsive from "@hooks/useResponsive";
import { useEffect } from "react";

const ImageFullScreen = ({
  image,
  description,
  onClose,
  title,
  onPrevClick,
  onNextClick,
}) => {
  const useMediaDisplay = useResponsive(850);

  /**
   * Switch picture when press arrow left or right keyboard
   * Exit full screen mode when press escape touche on keyboard
   */
  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowRight":
        onNextClick();
        break;
      case "ArrowLeft":
        onPrevClick();
        break;
      case "Escape":
        onClose();
      default:
        break;
    }
  };

  /**
   * Listen keyboard event
   */
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onNextClick, onPrevClick, onClose]);

  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <div className="fullscreen-content">
        <div className="fullscreen_picture">
          {!useMediaDisplay && (
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="fullscreen-icons"
              onClick={(e) => {
                e.stopPropagation();
                onPrevClick();
              }}
            />
          )}
          <img src={image} alt={description} />
          {!useMediaDisplay && (
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="fullscreen-icons"
              onClick={(e) => {
                e.stopPropagation();
                onNextClick();
              }}
            />
          )}
        </div>

        <div className="fullscreen-description">
          <h2>{title}</h2>
          <p>{description}</p>
          {useMediaDisplay && (
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="fullscreen-icons"
              onClick={(e) => {
                e.stopPropagation();
                onPrevClick();
              }}
            />
          )}
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="fullscreen-icons"
            onClick={onClose}
          />
          {useMediaDisplay && (
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="fullscreen-icons"
              onClick={(e) => {
                e.stopPropagation();
                onNextClick();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageFullScreen;
