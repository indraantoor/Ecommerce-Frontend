import styled from 'styled-components';

export const HeroItemsContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;

  .titleContainer {
    text-align: center;
    font-size: 2rem;
    color: white;

    h2 {
      padding: 10px;
      margin: 0;
      margin-top: 20px;
    }
  }

  .topItemsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
    gap: 20px;
    padding: 10px 7%;
    align-items: center;
  }

  .burger-menu {
    font-size: 30px;
    color: white;
  }

  .right-icon-items-container {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    color: white;
    align-items: center;
  }

  .iconItem {
    cursor: pointer;
  }

  .icon-text-container {
    display: flex;
    gap: 7px;
  }

  .language-selector {
    display: flex;
    justify-content: center;

    select {
      padding: 4px 10px;
    }
  }

  .carousel-container {
    display: flex;
    width: 100%;
    align-items: center;
  }

  @media screen and (max-width: 595px) {
    .topItemsWrapper {
      grid-template-columns: 1fr 2fr 0.5fr;
    }
    .burger-menu,
    .right-icon-items-container,
    .carousel-container {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    .topItemsWrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;
