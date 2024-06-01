import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title= '';
const showBackground = true;

const background = (
  <img className='background' src='/images/ocean.jpg' alt='ocean' />
);

function displayFact(e){
  let animalChosen = e.target.alt;
  const num = Math.floor(Math.random() * animals[animalChosen].facts.length);
  let funFact = animals[animalChosen].facts[num];

  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

let images = [];

for(const animal in animals){
  const img = (<img 
  onClick={displayFact}
  key={animal} 
  className='animal' 
  alt={animal}
  src={animals[animal].image}
  aria-label={animal}
  role='button'
 />);

  images.push(img);
};

const animalFacts = (
  <div>
    <p id='fact'></p>
    <h1>
      {title ||'Click an animal for a fun fact' }
    </h1>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
  </div>
);

root.render(animalFacts);
