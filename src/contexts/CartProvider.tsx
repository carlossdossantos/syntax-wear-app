import { useState } from "react";
import type { Product } from "../components/interfaces/product";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCart extends Product {
  quantity: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>([]);

  function addToCart(product: Product): void {
    let newCart;

    const productExistsInCart = cart.find(
      (itemIncart) => itemIncart.id === product.id,
    );

    if (productExistsInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart,
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
  }

  function removeFromCart(productId: number): void {
    const newCart = cart.filter((itemInCart) => itemInCart.id !== productId);

    setCart(newCart);
  }

  function incrementInCart(product: ProductCart): void {
    updateProductQuantity(product, product.quantity + 1);
  }

  function decrementInCart(product: ProductCart): void {
    updateProductQuantity(product, product.quantity - 1);
  }

  function updateProductQuantity(
    product: ProductCart,
    newQuantity: number,
  ): void {
    if (newQuantity <= 0) return;

    const productExistsInCart = cart.find(
      (itemIncart) => itemIncart.id === product.id,
    );

    if(!productExistsInCart) return;

    const newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: newQuantity }
          : itemInCart,
      );

      setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementInCart,
        decrementInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
