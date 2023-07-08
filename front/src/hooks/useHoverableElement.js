import { useState } from 'react';

const useHoverableElement = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return { isHovered, handleMouseOver, handleMouseOut };
};

export default useHoverableElement;
