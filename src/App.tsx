import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/Layout';
import AppRoutes from './config/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from './components/CartContext';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>

    <BrowserRouter>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </BrowserRouter>
    </CartProvider>
  </QueryClientProvider>

);

