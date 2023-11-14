import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  photo: string | undefined;
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  quantity?: number;
}


interface CartContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  addQuantity: (productId: number) => void;
  removeQuantity: (productId: number) => void;
}


const CartContext = createContext<CartContextProps | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addQuantity = (productId: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: (item.quantity || 1) + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeQuantity = (productId: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId && item.quantity && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: (item.quantity || 1) + 1,
          };
        }
        return item;
      });

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, addQuantity, removeQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
