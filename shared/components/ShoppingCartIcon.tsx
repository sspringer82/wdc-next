'use client';

import { Badge } from '@mui/material';
import { useCartAmount } from './useCart';
import CartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCartIcon: React.FC = () => {
  const cartAmount = useCartAmount();

  return (
    <Badge badgeContent={cartAmount} color="error">
      <CartIcon sx={{ color: 'white' }} />
    </Badge>
  );
};

export default ShoppingCartIcon;
