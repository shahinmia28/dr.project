import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slides = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  animation: ${fadeIn} 1s ease;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bg});
`;

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const slides = [
    { id: 1, bg: "./images/hero-1.jpg" },
    { id: 2, bg: "./images/hero-2.jpg" },
    { id: 3, bg: "./images/hero-3.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
        setTranslateValue(0);
      } else {
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(translateValue - 100);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, translateValue, slides.length]);

  return (
    <SlideContainer>
      <Slides
        style={{
          transform: `translateX(${translateValue}%)`,
        }}
      >
        {slides.map((slide) => (
          <Slide bg={slide.bg} key={slide.id} />
        ))}
      </Slides>
    </SlideContainer>
  );
};

export default HeroSlider;
