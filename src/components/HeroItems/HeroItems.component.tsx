import Carousel from './components/Carousel';
import CategoryDropDown from './components/CategoryDropDown';
import SearchBox from './components/SearchBox';
import { HeroItemsContainer } from './styles/HeroItemsLayout.style';

export const HeroItemsComponent = () => {
  return (
    <HeroItemsContainer>
      <div className="titleContainer">
        <h2>Eflyer</h2>
      </div>
      <div className="topItemsWrapper">
        <div className="burger-menu">
          <i className="bi bi-list iconItem" />
        </div>
        <div>
          <CategoryDropDown />
        </div>
        <div>
          <SearchBox />
        </div>
        <div className="language-selector">
          <select>
            <option value="">En</option>
          </select>
        </div>
        <div className="right-icon-items-container">
          <div className="icon-text-container iconItem">
            <span>
              <i className="bi bi-cart-fill" />
            </span>
            <span>Cart</span>
          </div>

          <div className="icon-text-container iconItem">
            <span>
              <i className="bi bi-person-fill" />
            </span>
            <span>Login</span>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </HeroItemsContainer>
  );
};
