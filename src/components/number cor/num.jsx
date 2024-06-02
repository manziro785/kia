import React, { useEffect, useState } from 'react';
import './num.css';

const images = [
  { src: '/img/partcipant 1.svg', alt: 'the last of us' },
  { src: '/img/tile_hero_m_esport 1.svg', alt: 'the last of us' },
  { src: '/img/partcipant 1.svg', alt: 'the last of us' },
  { src: '/img/tile_hero_m_esport 1.svg', alt: 'the last of us' },
];

export default function Num() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [text, setText] = useState(images[0].alt);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setText(images[currentSlide].alt);
  }, [currentSlide]);

  return (
    <div className="full">
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={index === currentSlide ? 'block' : ''}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          />
        ))}
      </div>
      <span className="text">{text}</span>
    </div>
  );
}
