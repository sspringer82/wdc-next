import { Food } from '@/shared/types/Food';

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
          <div key={food.id}>{food.title}</div>
        ))}
      </div>
    </>
  );
}
