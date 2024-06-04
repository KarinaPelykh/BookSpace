import { useEffect, useState } from 'react';

const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const Mobilewidth = windowWidth < 1024;
  const DesktopWidth = windowWidth >= 1439;
  const TabletWidth = windowWidth >= 1024 && windowWidth < 1439;
  return { Mobilewidth, TabletWidth, DesktopWidth };
};

export default useWindowResize;
