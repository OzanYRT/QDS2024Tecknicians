import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/SwipeInterface.css';
import scholarshipsData from '../data/scholarships.json';

const SwipeInterface = () => {
  const [pods, setPods] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Added to keep track of the current card index

  // Simulate fetching pods. In a real app, you might fetch this from an API or other data source
  const fetchPods = async () => {
    // Since you're using static data for this example, we directly set the data
    setPods(scholarshipsData);
  };

  useEffect(() => {
    fetchPods();
  }, []);

  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction} on:`, pods[currentIndex]);

    // Move to the next card in the stack
    if (currentIndex < pods.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Reached the end of the stack!");
    }
  };

  return (
    <div className="tinder">
      <div id="stack" className="tinder--cards">
        {pods.length > 0 ? (
          <div className="tinder--card">
            <h3>{pods[currentIndex].name}</h3>
            <p>{pods[currentIndex].amount}</p>
            <p>Deadline: {pods[currentIndex].deadline}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="tinder--buttons">
        <button
          id="nope"
          className="button nope"
          onClick={() => handleSwipe('nope')}
          disabled={currentIndex >= pods.length - 1}
        >
          Nope
        </button>
        <button
          id="love"
          className="button love"
          onClick={() => handleSwipe('love')}
          disabled={currentIndex >= pods.length - 1}
        >
          Love
        </button>
      </div>
    </div>
  );
};

export default SwipeInterface;
