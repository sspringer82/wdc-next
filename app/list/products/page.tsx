import { fetchFood } from '@/shared/util/fetchFood';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Link from 'next/link';

export default async function ProductsPage() {
  const foods = await fetchFood();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food) => (
            <TableRow
              key={food.id}
              sx={{
                '&:nth-of-type(odd)': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <TableCell>{food.id}</TableCell>
              <TableCell>
                <Link href={`/list/products/${food.id}`}>{food.title}</Link>
              </TableCell>
              <TableCell>{food.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
