import { Food } from '../types/Food';

export async function fetchFood(): Promise<Food[]> {
  const response = await fetch('http://localhost:3001/foods');
  if (!response.ok) {
    throw new Error('Response not ok');
  }
  return response.json();
}

export async function fetchOneFood(id: string): Promise<Food> {
  const response = await fetch(`http://localhost:3001/foods/${id}`);
  if (!response.ok) {
    throw new Error('Response not ok');
  }
  return response.json();
}
