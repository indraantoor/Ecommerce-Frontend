import Carousel from './components/Carousel';
import CategoryDropDown from './components/CategoryDropDown';
import SearchBox from './components/SearchBox';

export const HeroItemsComponent = () => {
  return (
    <div
      style={{
        background: 'yellow',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 3fr 1fr 1fr',
          gap: '20px',
          padding: '10px 120px',
        }}
      >
        <div
          style={{
            background: 'purple',
            fontSize: '30px',
            color: 'white',
          }}
        >
          <i
            className="bi bi-list"
            style={{
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          style={{
            background: 'purple',
          }}
        >
          <CategoryDropDown />
        </div>
        <div
          style={{
            background: 'white',
          }}
        >
          <SearchBox />
        </div>
        <div
          style={{
            background: 'purple',
          }}
        >
          Language DropDown
        </div>
        <div
          style={{
            background: 'purple',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            color: 'white',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '7px',
              cursor: 'pointer',
            }}
          >
            <span>
              <i className="bi bi-cart-fill" />
            </span>
            <span>Cart</span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '7px',
              cursor: 'pointer',
            }}
          >
            <span>
              <i className="bi bi-person-fill" />
            </span>
            <span>Login</span>
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'pink',
        }}
      >
        <Carousel />
      </div>
    </div>
  );
};
