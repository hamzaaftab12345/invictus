import { useState, useEffect } from 'react';

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Function to update screen width
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateWidth);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return screenWidth;
}
