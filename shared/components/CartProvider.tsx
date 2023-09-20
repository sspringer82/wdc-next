'use client';

import { createContext, useContext, useState } from 'react';

type CartItem = {
  id: string;
  amount: number;
};

// Typ des Contexts - die Struktur, die im Kontext liegt (von useState)
type CartContextType = [
  CartItem[],
  React.Dispatch<React.SetStateAction<CartItem[]>>
];

// Context erstellen + Typisieren + mit null als Standardwert befüllen (wenn kein Provider vorhanden)
const CartContext = createContext<CartContextType | null>(null);

// Provider Komponente erzeugen und Wert zur Verfügung stellen (useState)
const CartProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const stateValue = useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={stateValue}>{children}</CartContext.Provider>
  );
};

// Hook für den Zugriff auf den Kontext - wenn der Kontext den Wert null hat => Exception
// dann haben wir den Provider vergessen!
function useCartContext() {
  const cartContextValue = useContext(CartContext);
  if (cartContextValue === null) {
    throw new Error('Use this function within a Provider');
  }
  return cartContextValue;
}

export { CartProvider, useCartContext };
