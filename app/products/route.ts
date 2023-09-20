import { fetchFood } from '@/shared/util/fetchFood';
import { NextRequest, NextResponse } from 'next/server';

type CartItem = {
  id: string;
  amount: number;
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  const requestData = (await request.json()) as CartItem[];

  const products = await fetchFood();

  const data = requestData.map((cartItem) => {
    const product = products.find(
      (product) => product.id === parseInt(cartItem.id, 10)
    );
    return {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      amount: cartItem.amount,
      sum: parseFloat(product?.price!) * cartItem.amount,
    };
  });

  return NextResponse.json(data);
}
