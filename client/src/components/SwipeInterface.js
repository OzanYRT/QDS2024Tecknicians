import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useLocation } from "react-router-dom";
import '../style/SwipeInterface.css';
import scholarshipsData from '../data/scholarships.json';
import axios from 'axios';
import Modal from './Modal';

const email = localStorage.getItem('email');

// Function to import all images from a given context
function importAll(r) {
  return r.keys().map(r);
}

// Importing all images from the cardPics folder
const images = importAll(require.context('../assets/images/cardPics', false, /\.(png|jpe?g|svg|webp)$/));

const SwipeInterface = () => {
  const [pods, setPods] = useState([]);
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStyle, setCardStyle] = useState({
    transform: 'translateX(0%) translateY(0px) rotate(0deg) scale(1)',
    opacity: 1,
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
  });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [displayCard, setDisplayCard] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentCardDetails, setCurrentCardDetails] = useState({});

  // Function to get a random image for a card
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    if (location.state && location.state.scholarships) {
      // Assuming scholarship names are unique identifiers
      console.log("Names from response:", location.state.scholarships);
      console.log("Names in scholarshipsData:", scholarshipsData.map(s => s.name));

      const filteredPods = scholarshipsData.filter(scholarship => 
        location.state.scholarships.map(name => name.toLowerCase()).includes(scholarship.name.toLowerCase())
      );      
      console.log("Filtered Pods:", filteredPods.map(fp => fp.name));
      setPods(filteredPods);
    } else {
      // Fallback to showing all scholarships or handle this scenario as needed
      setPods(scholarshipsData);
    }
    setCardStyle({});
  }, [location.state]);

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
    // Calculate 25% of the screen width
    const threshold = document.body.clientWidth * 0.25;

    // Use absX to determine if the swipe distance exceeds the 25% threshold
    if (absX > threshold) {
      // Determine swipe direction
      if (dir === 'Left') {
        console.log("Swiped No on:", pods[currentIndex].name);
        moveCard('left');
      } else if (dir === 'Right') {
        console.log("Swiped Yes on:", pods[currentIndex].name);
        moveCard('right');
      }
      setCurrentIndex(currentIndex + 1);
      setCardStyle({});
    } else {
      // Reset card position if not swiped far enough
      setCardStyle({
        transform: 'translate(0px, 0px) rotate(0deg)',
        transition: 'transform 0.5s ease-out',
      });
    }
  };

    const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (displayCard) { // Only allow swiping if the card is currently displayed
        const { deltaX, deltaY } = eventData;
        const rotation = (deltaX / 100) * 10;
        setCardStyle({
          transform: `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`,
          transition: 'transform 0.1s ease-out',
        });
      }
    },
    onSwiped: swipeEndHandler,
    trackMouse: true,
  });

  const handleSwipe = (pod, action) => {
    fetch(`/api/${action}Pod`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pod }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };


  const moveCard = (direction) => {
  // Adjust the starting transform based on the swipe direction
  const moveOutWidth = document.body.clientWidth * (direction === 'left' ? -1.5 : 1.5);
  const rotateDeg = direction === 'left' ? -20 : 20; // Apply a slight rotation for effect

  // Apply the swipe out effect with adjusted opacity and transform
  setCardStyle({
    transform: `translateX(${moveOutWidth}px) rotate(${rotateDeg}deg)`,
    opacity: 0,
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
  });

  setTimeout(() => {
    // Rotate the pods array to simulate removing the swiped card and adding it to the end
    const newPods = [...pods.slice(1), pods[0]];
    setPods(newPods);

    // The card just swiped is now at the end of the array; reset for the "new" top card
    setCardStyle({
      opacity: 0, // Keep it invisible initially
      transform: 'scale(1)', // Reset scaling without affecting visibility
      transition: 'none', // Disable transitions for reset
    });

    setTimeout(() => {
      // Adjust styles for the visible stack
      document.querySelectorAll('.tinder--card').forEach((card, index) => {
        const zIndex = 3 - index;
        const scale = 1 - index * 0.05;
        const translateY = -20 * index;
        card.style.zIndex = `${zIndex}`;
        card.style.transform = `translateX(0%) scale(${scale}) translateY(${translateY}px)`;
        card.style.opacity = index === 0 ? '1' : '0.7'; // Fade in only the top card
      });

      // After a brief delay, reset the display to block for the top card
      setTimeout(() => {
        setCardStyle({
          opacity: 1,
          transform: 'translateX(0%) translateY(0px) rotate(0deg) scale(1)',
          transition: 'opacity 0.5s ease-in',
        });
        setDisplayCard(true); // Make the new top card visible
      }, 50); // Short delay to ensure card is positioned before making visible

    }, 10); // Separate state updates
  }, 500); // Match CSS transition duration
};


  const resetCardPosition = () => {
    setCardStyle({});
    setDisplayCard(true); // Ensure the card is set to be displayed if resetting
  };

  useEffect(() => {
    if (!displayCard) {
     setCardStyle({});
      // Wait for the animation to complete before showing the next card
      setTimeout(() => {
        setDisplayCard(true); // Show the next card
        resetCardPosition(); // Reset any transformation applied to the card
      }, 50); // Minimal delay to ensure the card style reset occurs after it's hidden
    }
  }, [displayCard, currentIndex]);

  const handleLoveClick = (scholarshipName) => {
    console.log(email)
    console.log(scholarshipName)
    axios.post('http://localhost:5050/api/add-scholarship', {
      email: email,
      scholarshipName: scholarshipName,
    })
    .then(response => {
      console.log(response.data.message);
      // Optionally update the UI to reflect the change
    })
    .catch(error => {
      console.error("Error adding scholarship:", error.response.data);
    });
    moveCard('right');
  };

  const handleCardClick = (pod) => {
    setCurrentCardDetails(pod);
    setShowModal(true);
  };

  
  return (
    <div className="tinder">
      <Modal showModal={showModal} setShowModal={setShowModal} cardDetails={currentCardDetails} />
      <div id="stack" className="tinder--cards">
        {pods.length > 0 && currentIndex < pods.length ? (
          pods.map((pod, index) => (
            <div 
              key={index} 
              className={`tinder--card ${index === currentIndex ? (isMouseDown ? 'moving' : '') : 'hidden'}`} 
              {...handlers} 
              style={cardStyle}
              onClick={() => handleCardClick(pod)}
            >
              <img className="card-image" src={getRandomImage()} alt="Card" />
              <div className="card-content">
                <h3>{pod.name}</h3>
                <h4>{pod.amount}</h4>
                <p>Deadline: {pod.deadline}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-message">No more scholarships.</div>
        )}
      </div>
      <div className="tinder--buttons">
        <button id="nope" className="button nope" onClick={() => moveCard('left')} disabled={currentIndex >= pods.length - 1}>Nope</button>
        <button id="love" className="button love" onClick={() => handleLoveClick(pods[currentIndex].name)} disabled={currentIndex >= pods.length - 1}>Love</button>
      </div>
    </div>
  );
};


export default SwipeInterface;