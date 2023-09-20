import { useCartContext } from './CartProvider';

export function useCart() {
  const [, setCart] = useCartContext();
  return function addToCart(amount: number, id: string) {
    setCart((prevCart) => {
      return [...prevCart, { amount, id }];
    });
  };
}

export function useCartAmount() {
  const [cart] = useCartContext();
  return cart.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);
}
