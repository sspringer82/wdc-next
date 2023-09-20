import { AppBar, Box, IconButton } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NextPage } from 'next';

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
              <ShoppingCartIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </AppBar>
      </Box>
      <section>{children}</section>
    </>
  );
};
export default ListLayout;
