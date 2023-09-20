import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ListPage from './page';
import { CartProvider } from '@/shared/components/CartProvider';

vi.mock('@/shared/util/fetchFood', () => {
  return {
    fetchFood: () =>
      Promise.resolve([
        {
          id: 1,
          title: 'Pizza',
          description: 'Yummy',
          price: 123.45,
        },
      ]),
  };
});

test('Render the list', async () => {
  const Result = await ListPage();
  render(<CartProvider>{Result}</CartProvider>);
  const container = screen.getByTestId('container');
  expect(container).toBeDefined();
  expect(container.innerHTML.includes('Pizza')).toBe(true);
});
