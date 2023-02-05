import { useState } from 'react';
import { CarouselContainer } from './styles/CarouselLayout.style';

export const CarouselComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const carouselText = [
    'Get Started Your Favourite Shopping',
    'Best Deals On Best Brands',
    'Buy Original Verified Products',
  ];
  const buttonText = ['Buy Now', 'View More', 'Explore All'];

  return (
    <CarouselContainer>
      <div className="carousel-items">
        <div className="carousel-wrapper">
          <div
            className="arrow-container"
            tabIndex={6}
            onClick={() =>
              previousSlide(
                selectedIndex,
                setSelectedIndex,
                carouselText.length - 1
              )
            }
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                previousSlide(
                  selectedIndex,
                  setSelectedIndex,
                  carouselText.length - 1
                );
              }
            }}
          >
            <i className="bi bi-arrow-left-circle-fill" />
          </div>
          <p>{carouselText[selectedIndex]}</p>
          <div
            className="arrow-container"
            tabIndex={8}
            onClick={() =>
              nextSlide(
                selectedIndex,
                setSelectedIndex,
                carouselText.length - 1
              )
            }
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                nextSlide(
                  selectedIndex,
                  setSelectedIndex,
                  carouselText.length - 1
                );
              }
            }}
          >
            <i className="bi bi-arrow-right-circle-fill" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button tabIndex={7}>{buttonText[selectedIndex]}</button>
      </div>
    </CarouselContainer>
  );
};

function nextSlide(
  selectedIndex: number,
  setSelectedIndex: Function,
  carouselTextLength: number
) {
  if (selectedIndex < carouselTextLength) {
    setSelectedIndex(selectedIndex + 1);
    return;
  }
  setSelectedIndex(0);
}

function previousSlide(
  selectedIndex: number,
  setSelectedIndex: Function,
  carouselTextLength: number
) {
  if (selectedIndex > 0) {
    setSelectedIndex(selectedIndex - 1);
    return;
  }
  setSelectedIndex(carouselTextLength);
}
