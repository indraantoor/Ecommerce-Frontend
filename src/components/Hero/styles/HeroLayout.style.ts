import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;

  .image-container {
    position: relative;
    height: 0;
    padding: 19.4%;

    .image {
      object-fit: cover;
    }
  }

  @media screen and (max-width: 865px) {
    .image-container {
      padding: 30%;
    }
  }

  @media screen and (max-width: 585px) {
    .image-container {
      padding: 20%;
    }
  }

  @media screen and (max-width: 450px) {
    .image-container {
      padding: 40%;
    }
  }

  @media screen and (max-width: 340px) {
    .image-container {
      padding: 50%;
    }
  }
`;
