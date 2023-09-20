import { AppBar, Badge, Box, IconButton } from '@mui/material';
import React from 'react';
import { NextPage } from 'next';
import ShoppingCartIcon from '@/shared/components/ShoppingCartIcon';

type Props = {
  children: React.ReactNode;
};

const ListLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton color="primary" aria-label="add to shopping cart">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </AppBar>
      </Box>
      <section>{children}</section>
    </>
  );
};
export default ListLayout;
