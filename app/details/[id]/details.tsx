'use client';
import { Food } from '@/shared/types/Food';
import { Box, Card, Typography } from '@mui/material';
import Link from 'next/link';
import useSWR from 'swr';

type FetchArgs = [input: RequestInfo, init?: RequestInit];

const fetcher = async (...args: FetchArgs): Promise<any> => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return response.json();
};

type Props = {
  id: string;
};

export default function Details({ id }: Props) {
  const { data } = useSWR<Food>(`http://localhost:3001/foods/${id}`, fetcher, {
    suspense: true,
  });

  // render data
  return (
    <Card>
      <Typography variant="h1" component="h1">
        {data!.title}
      </Typography>
      <Box>{data!.description}</Box>
      <Box>Preis: {data!.price}</Box>
      <Link href="/list">zurück zur Übersicht</Link>
    </Card>
  );
}
