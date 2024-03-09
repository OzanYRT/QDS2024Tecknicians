import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import '../style/SwipeInterface.css';
import scholarshipsData from '../data/scholarships.json';

const SwipeInterface = () => {
  const [pods, setPods] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStyle, setCardStyle] = useState({});

  useEffect(() => {
    setPods(scholarshipsData);
  }, []);

  const swipingHandler = (eventData) => {
    const { deltaX, deltaY } = eventData;
    const rotation = (deltaX / 100) * 10; 
    setCardStyle({
      transform: `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`,
      transition: 'transform 0.1s ease-out',
    });
  };
  
  const swipeEndHandler = (eventData) => {
    const { absX, dir } = eventData;
    if (absX > 100) { // Swipe threshold
      if (dir === 'Left') {
        // Simulate 'Nope' action
        console.log("Swiped No on:", pods[currentIndex].name);
        moveCard('left');
      } else if (dir === 'Right') {
        // Simulate 'Love' action
        console.log("Swiped Yes on:", pods[currentIndex].name);
        moveCard('right');
      }
      setCurrentIndex(currentIndex + 1); // Move to the next card
      setCardStyle({}); // Reset style
    } else {
      setCardStyle({
        transform: 'translate(0px, 0px) rotate(0deg)', // Reset position
        transition: 'transform 0.5s ease-out',
      });
    }
  };

  const handlers = useSwipeable({
    onSwiping: swipingHandler,
    onSwiped: swipeEndHandler,
  });

  // Function to move to the next card and simulate swipe action
  const moveCard = (direction) => {
    console.log(`Swiped ${direction} on:`, pods[currentIndex].name);

    // Check if there's a next card to show
    if (currentIndex < pods.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Reached the end of the stack!");
    }
  };

  return (
    <div className="tinder">
      <div id="stack" className="tinder--cards">
        {pods.length > 0 && currentIndex < pods.length ? (
          <div className="tinder--card" {...handlers} style={cardStyle}>
            <h3>{pods[currentIndex].name}</h3>
            <p>{pods[currentIndex].amount}</p>
            <p>Deadline: {pods[currentIndex].deadline}</p>
          </div>
        ) : (
          <div>No more scholarships.</div>
        )}
      </div>

      <div className="tinder--buttons">
        <button
          id="nope"
          className="button nope"
          onClick={() => moveCard('left')}
          disabled={currentIndex >= pods.length - 1}
        >
          Nope
        </button>
        <button
          id="love"
          className="button love"
          onClick={() => moveCard('right')}
          disabled={currentIndex >= pods.length - 1}
        >
          Love
        </button>
      </div>
    </div>
  );
};

export default SwipeInterface;
