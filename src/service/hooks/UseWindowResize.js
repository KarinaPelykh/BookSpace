import { useEffect, useState } from 'react';

const WindowResizeHook = () => {
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
  const NotMobileWidth = windowWidth >= 1024;
  return { Mobilewidth, NotMobileWidth };
};

export default WindowResizeHook;
