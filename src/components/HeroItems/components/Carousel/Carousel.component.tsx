import { useState } from 'react';

export const CarouselComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const carouselText = [
    'Get Started Your Favourite Shopping',
    'Best Deals On Best Brands',
    'Buy Original Verified Products',
  ];
  const buttonText = ['Buy Now', 'View More', 'Explore All'];

  const nextSlide = () => {
    if (selectedIndex < carouselText.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      return;
    }
    setSelectedIndex(0);
  };

  const previousSlide = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      return;
    }
    setSelectedIndex(carouselText.length - 1);
  };

  return (
    <div>
      <div
        style={{
          background: 'red',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: 'orange',
            width: '70%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '2rem',
              opacity: 0.8,
            }}
            onClick={previousSlide}
          >
            <i className="bi bi-arrow-left-circle-fill" />
          </div>
          <p
            style={{
              background: 'blue',
              flexGrow: 1,
              textAlign: 'center',
              fontSize: '2rem',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            {carouselText[selectedIndex]}
          </p>
          <div
            style={{
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              opacity: 0.8,
            }}
            onClick={nextSlide}
          >
            <i className="bi bi-arrow-right-circle-fill" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            padding: '7px 25px',
            cursor: 'pointer',
          }}
        >
          {buttonText[selectedIndex]}
        </button>
      </div>
    </div>
  );
};
