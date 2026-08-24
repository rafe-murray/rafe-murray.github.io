import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const useCustomScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the fragment identifier
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.querySelector('#root');
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
        console.log('Scrolled to top!');
      }
    }
  }, [location.hash]);
};
