import { useAppContext } from '@/state/context/app-context';
import { useCategories } from './hooks/useCategories.hook';
import { CategoryDropDownContainer } from './styles/CategoryDropDownLayout.style';

export const CategoryDropDownComponent = () => {
  const { data: categoriesList, isLoading } = useCategories();
  const context = useAppContext();
  const { changeCategory } = context;

  console.log('CATEGORIES', categoriesList);
  return (
    <CategoryDropDownContainer>
      <select
        disabled={isLoading}
        onChange={(e) => changeCategory(e.target.value)}
      >
        <option value="">{isLoading ? 'Loading...' : 'All'}</option>
        {categoriesList?.map((category: string) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </select>
    </CategoryDropDownContainer>
  );
};
