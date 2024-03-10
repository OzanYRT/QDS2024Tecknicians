import React, { useEffect } from 'react';
import SwipeInterface from './SwipeInterface';

export default function Home() {
  useEffect(() => {
    // Set a very subtle gradient background on mount
    // document.body.style.background = 'linear-gradient(to bottom, #FF8737, #FF9B64)';

    // Cleanup: Reset background style on unmount
    return () => {
      document.body.style.background = ''; 
    };
  }, []);

  return (
    <div>
      <SwipeInterface />
    </div>
  );
}
