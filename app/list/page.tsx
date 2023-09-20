import { Food } from '@/shared/types/Food';
import ListItem from './ListItem';

async function fetchFood(): Promise<Food[]> {
  const response = await fetch('http://localhost:3001/foods');
  if (!response.ok) {
    throw new Error('Response not ok');
  }
  return response.json();
}

export default async function ListPage() {
  const foods = await fetchFood();
  return (
    <>
      <div>
        {foods.map((food) => (
          <ListItem food={food} key={food.id} />
        ))}
      </div>
    </>
  );
}
