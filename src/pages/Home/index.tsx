import { Grid, Card, CardMedia, Container, CardContent, Typography, CardActions, Button, Badge, Box } from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useQuery } from "react-query";
import {useCart} from '../../components/CartContext'

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}


const Home = () => {
  const { addToCart, cartItems } = useCart(); 
  const handleAddToCart = (product: Product) => {
    addToCart(product);    
  };
  console.log('shablau', cartItems);
  const fetchProducts = async () => {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    const data = await response.json();
    return data.products;
  };

  const { data: products = [] } = useQuery('products', fetchProducts);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product: Product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '285px',
                display: 'flex',
                flexDirection: 'column',
                width: '217.56px',
              }}
            >
              <CardMedia
                component='img'
                image={product.photo}
                height='138px'
                width='111px'
              />
              <CardContent sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '1px 5px',
                maxWidth: '122px',
                width: '100%',
                }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{
                    height: '38px'
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '4px',
                    borderRadius: '4px',
                  }}
                >
                {`R$${Math.round(product.price)}`}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                backgroundColor: '#0F52BA',
                marginBottom: '-50px',
                color: '#ffffff'
              }}
              onClick={() => handleAddToCart(product)}
            >
              <LocalMallIcon />
              <Button size="large" variant="text" sx={{ color: '#ffffff' }} >COMPRAR</Button>
            </CardActions>
          </Card>
          </Grid>
        ))}
    </Grid>
    </Container >
  );
};

export default Home;