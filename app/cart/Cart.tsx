'use client';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './cart.css';
import { useCartContext } from '@/shared/components/CartProvider';

type CartItem = {
  id: string;
  title: string;
  price: number;
  amount: number;
  sum: number;
};

type CustomerForm = {
  firstname: string;
  lastname: string;
  street: string;
  zip: string;
  city: string;
  country: string;
};

export default function CartForm() {
  const [cart] = useCartContext();
  const [data, setData] = useState<CartItem[]>([]);
  const router = useRouter();

  const { register, handleSubmit } = useForm<CustomerForm>();

  useEffect(() => {
    fetch('/products', { method: 'POST', body: JSON.stringify(cart) })
      .then((response) => response.json())
      .then((cartInfo) => setData(cartInfo));
  }, [cart]);

  async function onSubmit(formData: CustomerForm) {
    await fetch('http://localhost:3001/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customer: formData, cart: data }),
    });
    router.push('/thanks');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Versand- und Rechnungsadresse</h1>
      <div className="formRow">
        <TextField
          {...register('firstname')}
          label="Vorname"
          variant="standard"
        />
        <TextField
          {...register('lastname')}
          label="Nachname"
          variant="standard"
        />
      </div>
      <div className="formRow">
        <TextField {...register('street')} label="Straße" variant="standard" />
      </div>
      <div className="formRow">
        <TextField
          {...register('zip')}
          label="Postleitzahl"
          variant="standard"
        />
        <TextField {...register('city')} label="Stadt" variant="standard" />
      </div>
      <div className="formRow">
        <TextField {...register('country')} label="Land" variant="standard" />
      </div>
      <h1>Artikelliste</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pos.</TableCell>
            <TableCell>Bezeichnung</TableCell>
            <TableCell>Menge</TableCell>
            <TableCell>Einzelpreis</TableCell>
            <TableCell>Summe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.sum}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4}>Gesamtsumme:</TableCell>
            <TableCell>
              {data.reduce((prev, curr) => prev + curr.sum, 0)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
        <Button variant="outlined" type="submit">
          kaufen
        </Button>
      </div>
    </form>
  );
}
