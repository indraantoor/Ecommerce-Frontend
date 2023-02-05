import { useAppContext } from '@/state/context/app-context';
import React, { useState } from 'react';

function SearchBoxComponent() {
  const [searchText, setSearchText] = useState('');
  const context = useAppContext();
  const { changeSearchText } = context;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          borderRadius: '2px',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <input
          type="text"
          id="searchBox"
          name="searchText"
          placeholder="Search this blog"
          style={{
            flexGrow: 1,
            outline: 'none',
            border: 'none',
            padding: '6px 15px',
          }}
          onChange={(e) => {
            if (!e.target.value) {
              changeSearchText('');
              return;
            }
            setSearchText(e.target.value);
          }}
        />
        <span>
          <button
            style={{
              padding: '6px 10px',
              background: 'orange',
              border: 'none',
              outline: 'none',
              color: 'white',
              cursor: 'pointer',
              borderTopRightRadius: '2px',
              borderBottomRightRadius: '2px',
            }}
            onClick={() => changeSearchText(searchText)}
          >
            IC
          </button>
        </span>
      </div>
    </div>
  );
}

export default SearchBoxComponent;
