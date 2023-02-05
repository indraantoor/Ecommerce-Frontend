import { useAppContext } from '@/state/context/app-context';
import { useCategories } from './hooks/useCategories.hook';

export const CategoryDropDownComponent = () => {
  const { data: categoriesList } = useCategories();
  const context = useAppContext();
  const { changeCategory } = context;

  console.log('CATEGORIES', categoriesList);
  return (
    <div>
      <select
        style={{
          width: '100%',
        }}
        onChange={(e) => changeCategory(e.target.value)}
      >
        <option value="">All</option>
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
