import { createContext, ReactNode, useContext, useState } from 'react';

interface IAppWrapperPropsTypes {
  state: {
    searchText: string;
    category: string;
  };
  changeSearchText: Function;
  changeCategory: Function;
}

interface IPropsType {
  children: ReactNode;
}

const AppContext = createContext<IAppWrapperPropsTypes>({
  state: {
    searchText: '',
    category: '',
  },
  changeCategory: () => {},
  changeSearchText: () => {},
});

export function AppWrapper({ children }: IPropsType) {
  const [searchText, setSearchText] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const changeSearchText = (searchText: string) => {
    setSearchText(searchText);
  };

  const changeCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <AppContext.Provider
      value={{
        state: {
          searchText,
          category,
        },
        changeSearchText,
        changeCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
