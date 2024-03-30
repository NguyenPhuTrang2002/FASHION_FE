import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  slides: any;
}

const ImageSlider = ({ slides }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 20000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full relative'>
      <div onClick={goToPrevious} className='absolute top-1/2 transform -translate-y-1/2 left-8 text-7xl text-white z-10 cursor-pointer'>❰</div>

      <img src={slides[currentIndex].url} alt={slides[currentIndex].title} className="w-full h-full rounded-tl-[100px] rounded-br-[100px] object-cover transition-opacity duration-1000 animate-fade-in" />
      <div onClick={goToNext} className='absolute top-1/2 transform -translate-y-1/2 right-8 text-7xl text-white z-10 cursor-pointer'> ❱</div>

    </div>
  );
}

export default ImageSlider;
