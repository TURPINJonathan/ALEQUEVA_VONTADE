import { useState, useEffect } from 'react';

const useResponsive = (width) => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= width);
    };
    handleResize();

    const resizeListener = () => {
      handleResize();
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [width]);

  return isResponsive;
};

export default useResponsive;