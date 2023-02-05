import Carousel from './components/Carousel';
import CategoryDropDown from './components/CategoryDropDown';
import SearchBox from './components/SearchBox';

export const HeroItemsComponent = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        background: 'rgba(0,0,0,0.4)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          color: 'white',
        }}
      >
        <h2
          style={{
            padding: '10px',
            margin: 0,
          }}
        >
          Eflyer
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 3fr 1fr 1fr',
          gap: '20px',
          padding: '10px 10%',
          alignItems: 'center',
        }}
      >
        <div
          style={{
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
        <div>
          <CategoryDropDown />
        </div>
        <div>
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
            display: 'flex',
            justifyContent: 'space-around',
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
          // flexGrow: 1,
          display: 'flex',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Carousel />
      </div>
    </div>
  );
};
