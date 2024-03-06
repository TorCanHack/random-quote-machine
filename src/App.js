import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  {
   quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
   author: "-Nelson Mandela"
  },

  {
   quote: "The way to get started is to quit talking and begin doing.",
   author: "-Walt Disney"
  },

  {
   quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
   author: "-Steve Jobs"
  },

  {
   quote: "The future belongs to those who believe in the beauty of their dreams.",
   author: "-Eleanor Roosevelt"
  },

  {
   quote: "Well done is better than well said.",
   author: "-Benjamin Franklin"
  },

  {
   quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
   author: "-Helen Keller"
  },

  {
   quote: "It is during our darkest moments that we must focus to see the light.",
   author: "-Aristotle"
  },

  {
   quote: "Be yourself; everyone else is already taken.",
   author: "-Oscar Wilde"
  },

  {
   quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
   author: "-Henry David Thoreau"
  },

  {
   quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
   author: "-Thomas A. Edison"
  },

  {
   quote: "In three words I can sum up everything I've learned about life: it goes on.",
   author: "-Robert Frost"
  },

  {
   quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
   author: "-Albert Camus"
  },

  {
   quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
   author: "-Winston S. Churchill"
  },

  {
   quote: "Success usually comes to those who are too busy to be looking for it.",
   author: "-Henry David Thoreau"
  },

  {
   quote: "If you really look closely, most overnight successes took a long time.",
   author: "-Steve Jobs"
  },

  {
   quote: "The secret of success is to do the common thing uncommonly well.",
   author: "-John D. Rockefeller Jr"
  },

  {
   quote: "I find that the harder I work, the more luck I seem to have.",
   author: "-Thomas Jefferson"
  },

  {
   quote: "To be successful, you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish.",
   author: "-Michael Jordan"
  },

  {
   quote: "Whether you think you can or you think you can't, you're right.",
   author: "-Henry Ford"
  },

  {
   quote: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
   author: "-Mother Teresa"
  },

  {
   quote: "If you genuinely want something, don't wait for it — teach yourself to be impatient.",
   author: "-Gurbaksh Chahal"
  }
]

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

function App(props) {
  const [quote, setQuote] = useState({});
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    getNewQuote();
  }, []);

  useEffect(() => {
    // Change the background color of the body
    document.body.style.backgroundColor = colors[colorIndex];
    document.body.style.transition = "background-color 0.5s ease-in-out";
  
  
  }, [colorIndex]); // Pass the colorIndex state as a dependency
  

  const getNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    let newQuote = quotes[randomIndex];

    setQuote(newQuote);

    let randomColorIndex = Math.floor(Math.random() * colors.length);

    setColorIndex(randomColorIndex);

  }

  const handleCLick = () => {
    getNewQuote();
  }

  return (
   <>
     <article id='quote-box' style={{color: colors[colorIndex],  transition: "color 0.5s ease-in-out"  }}>
        <h1 id='text'>{quote.quote}</h1>
        <p id='author'>{quote.author}</p>
        <button id='new-quote' onClick={handleCLick} style={{ backgroundColor: colors[colorIndex],  transition: "color 0.5s ease-in-out" }}>New Quote</button>
        <a id='tweet-quote' href='"twitter.com/intent/tweet"' target="_blank" >
          <i className="bi-twitter" style={{ color: colors[colorIndex],  transition: "color 0.5s ease-in-out" }}></i>
        </a>
        <i className="bi-tumblr"></i>
      </article>
    </>
  );
}

export default App;
