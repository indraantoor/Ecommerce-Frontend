import { useAppContext } from '@/state/context/app-context';
import { useCategories } from './hooks/useCategories.hook';

export const CategoryDropDownComponent = () => {
  const { data: categoriesList, isLoading } = useCategories();
  const context = useAppContext();
  const { changeCategory } = context;

  console.log('CATEGORIES', categoriesList);
  return (
    <div>
      <select
        style={{
          width: '100%',
          padding: '4px',
        }}
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
    </div>
  );
};
