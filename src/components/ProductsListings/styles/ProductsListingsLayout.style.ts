import styled from 'styled-components';

export const ProductListingsContainer = styled.div`
  margin-top: 40px;

  .headingContainer {
    text-align: center;
  }

  h2,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    margin-top: 8px;
  }

  .listingsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, 18rem);
    justify-content: space-between;
    row-gap: 50px;
    padding: 0 7%;
  }

  @media screen and (max-width: 670px) {
    .listingsContainer {
      grid-template-columns: repeat(auto-fill, 15rem);
    }
  }

  @media screen and (max-width: 565px) {
    .listingsContainer {
      display: flex;
      flex-direction: column;
    }
  }
`;
