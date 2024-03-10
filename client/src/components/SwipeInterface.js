import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useLocation } from "react-router-dom";
import '../style/SwipeInterface.css';
import scholarshipsData from '../data/scholarships.json';
import axios from 'axios';

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
  const [cardStyle, setCardStyle] = useState({});
  const [isMouseDown, setIsMouseDown] = useState(false); 


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
    if (absX > 100) {
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
      setCardStyle({
        transform: 'translate(0px, 0px) rotate(0deg)',
        transition: 'transform 0.5s ease-out',
      });
    }
  };

  const handlers = useSwipeable({
    onSwiping: swipingHandler,
    onSwiped: swipeEndHandler,
    onMouseDown: () => setIsMouseDown(true),
    onMouseUp: () => setIsMouseDown(false),
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
    const moveOutWidth = document.body.clientWidth * (direction === 'left' ? -1.5 : 1.5);
    const rotateDeg = direction === 'left' ? -60 : 60;
  
    setCardStyle({
      transform: `translate(${moveOutWidth}px, -100px) rotate(${rotateDeg}deg)`,
      transition: 'transform 0.5s ease-out',
    });
  
    setTimeout(() => {
      const action = direction === 'left' ? 'nope' : 'save';
      const currentPod = pods[currentIndex];
  
      if (currentPod) {
        handleSwipe(currentPod, action);
      }
  
      if (currentIndex < pods.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        console.log("Reached the end of the stack!");
      }
  
      setCardStyle({});
    }, 500);
  };

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

  return (
    <div className="tinder">
      <div id="stack" className="tinder--cards">
        {pods.length > 0 && currentIndex < pods.length ? (
          <div className={`tinder--card ${isMouseDown ? 'moving' : ''}`} {...handlers} style={cardStyle}>
            <img className="card-image" src={getRandomImage()} alt="Card top" />
            <div className="card-content">
              <h3>{pods[currentIndex].name}</h3>
              <h4>{pods[currentIndex].amount}</h4>
              <p>Deadline: {pods[currentIndex].deadline}</p>
            </div>
          </div>
        ) : (
          <div className="empty-message">No more scholarships.</div>
        )}
      </div>


      <div className="tinder--buttons">
        <button id="nope" className="button nope" onClick={() => moveCard('left') } disabled={currentIndex >= pods.length - 1}>
          Nope
        </button>
        <button id="love" className="button love" onClick={() => handleLoveClick(pods[currentIndex].name)} disabled={currentIndex >= pods.length - 1}>
          Love
        </button>
      </div>
    </div>
  );
};

export default SwipeInterface;
