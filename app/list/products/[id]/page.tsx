import { fetchFood, fetchOneFood } from '@/shared/util/fetchFood';
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export async function generateStaticParams() {
  const foods = await fetchFood();
  return foods.map((food) => ({ id: food.id + '' }));
}

type Params = {
  params: {
    id: string;
  };
};

export default async function ProductsDetailPage({ params: { id } }: Params) {
  const food = await fetchOneFood(id);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {food.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          ID: {food.id}
        </Typography>
        <Typography variant="body2" component="p">
          {food.description}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Price: {food.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
