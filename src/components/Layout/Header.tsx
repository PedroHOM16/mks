import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Drawer, List, ListItem, ListItemText, Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CancelIcon from '@mui/icons-material/Cancel';

const Header: React.FC = () => {
  const { cartItems, addQuantity, removeQuantity, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#0F52BA' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h3" component="div">
                MKS
              </Typography>
              <Typography variant='h6' component="div" sx={{ fontSize: '1rem', marginTop: '25px', marginLeft: '5px' }}>
                sistemas
              </Typography>
            </Box>
            <IconButton aria-label="Carrinho de compras" color="inherit" onClick={toggleCartDrawer}>
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCartDrawer}>
  <Box sx={{ width: 'full', backgroundColor: '#0F52BA', height: '100%', padding: '20px' }}>
    <List>
      {cartItems.map((item, index) => (
          <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={item.photo}
            alt={item.name}
          />
          <CardContent sx={{flex: 1 }}>
            <Typography component="h2" variant="h5">
              {item.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={() => removeQuantity(item.id)}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="subtitle1" color="text.secondary">
                {item.quantity}
              </Typography>
              <IconButton onClick={() => addQuantity(item.id)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Typography variant="subtitle1" color="text.secondary">
            {`R$${Math.round(item.quantity ? item.price * item.quantity : item.price)}`}
            </Typography>
          </CardContent>
          <IconButton
    sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Cor de fundo para destacar o ícone
    }}
    onClick={() => removeFromCart(item.id)}
>
    <CancelIcon />
  </IconButton>
        </Card>
      </CardActionArea>
    </Grid>
      ))}
    </List>
  </Box>
</Drawer>

    </>
  );
};

export default Header;
