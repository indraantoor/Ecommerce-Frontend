import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;

  .carousel-items {
    display: flex;
    justify-content: center;
  }

  .carousel-wrapper {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    p {
      flex-grow: 1;
      text-align: center;
      font-size: 2rem;
      cursor: pointer;
      color: white;
    }
  }

  .arrow-container {
    color: white;
    font-size: 2rem;
    opacity: 0.8;
  }

  .button-container {
    display: flex;
    justify-content: center;

    button {
      padding: 10px 25px;
      cursor: pointer;
      background: rgb(41, 40, 39);
      color: white;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }
`;
