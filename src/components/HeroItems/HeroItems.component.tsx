import SearchBox from './components/SearchBox';

const HeroItemsComponent = () => {
  return (
    <div
      style={{
        background: 'yellow',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 3fr 1fr 1fr',
        gap: '20px',
        padding: '10px 120px',
      }}
    >
      <div
        style={{
          background: 'purple',
        }}
      >
        Burger Menu
      </div>
      <div
        style={{
          background: 'purple',
        }}
      >
        Category DropDown
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
        }}
      >
        Icons
      </div>
    </div>
  );
};

export default HeroItemsComponent;
