'use client';

import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useCartAmount } from '@/shared/components/useCart';
import ShoppingCartIcon from '@/shared/components/ShoppingCartIcon';
import { useRouter } from 'next/navigation';

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="add to shopping cart"
              onClick={() => router.push('/cart')}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </AppBar>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <List>
            <ListItem key="List">
              <Link href="/list">List</Link>
            </ListItem>
            <ListItem key="Products">
              <Link href="/list/products">Products</Link>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <section>{children}</section>
    </>
  );
}
