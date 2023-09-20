'use client';

import React, { useState } from 'react';
import { useCart } from './useCart';
import { Button, TextField } from '@mui/material';

type Props = {
  id: string;
};

const AddToCart: React.FC<Props> = ({ id }) => {
  const [amount, setAmount] = useState(1);

  const addToCart = useCart();

  return (
    <>
      <TextField
        style={{ width: 40, margin: '10px' }}
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value, 10));
        }}
      />
      <Button onClick={() => addToCart(amount, id)} variant="outlined">
        hinzufügen
      </Button>
    </>
  );
};

export default AddToCart;
