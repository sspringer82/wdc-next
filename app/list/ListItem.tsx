import { Food } from '@/shared/types/Food';
import { Card } from '@mui/material';
import styles from './ListItem.module.css';
import { NextComponentType } from 'next';
import AddToCart from '@/shared/components/AddToCart';
import Link from 'next/link';

type Props = {
  food: Food;
};

export default function ListItem({ food }: Props): React.ReactNode {
  return (
    // <Card className={styles.Card}>
    <Card
      sx={{
        margin: 2,
        padding: 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Link href={`/details/${food.id}`}>{food.title}</Link>
      </div>
      <div>{food.price}</div>
      <AddToCart id={food.id + ''} />
    </Card>
  );
}
