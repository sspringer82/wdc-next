import { Food } from '@/shared/types/Food';
import { Card } from '@mui/material';
import styles from './ListItem.module.css';
import { NextComponentType } from 'next';

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
      <div>{food.title}</div>
      <div>{food.price}</div>
    </Card>
  );
}
