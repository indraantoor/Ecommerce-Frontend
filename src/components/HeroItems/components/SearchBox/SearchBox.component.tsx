import { useAppContext } from '@/state/context/app-context';
import { useState } from 'react';
import { SearchBoxContainer } from './styles/SearchBoxLayout.style';

export function SearchBoxComponent() {
  const [searchText, setSearchText] = useState('');
  const context = useAppContext();
  const { changeSearchText } = context;

  return (
    <SearchBoxContainer>
      <div className="wrapper">
        <input
          type="text"
          id="searchBox"
          name="searchText"
          placeholder="Search this blog"
          onChange={(e) => {
            if (!e.target.value) {
              changeSearchText('');
              return;
            }
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              changeSearchText(searchText);
            }
          }}
        />
        <span>
          <button onClick={() => changeSearchText(searchText)}>
            <i className="bi bi-search" />
          </button>
        </span>
      </div>
    </SearchBoxContainer>
  );
}
