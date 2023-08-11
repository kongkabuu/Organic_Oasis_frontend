// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useCart } from './CartContext';

// const CartWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 50px;
// `;

// const CartItem = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid #ccc;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const CartImage = styled.img`
//   max-width: 50px;
//   margin-right: 10px;
// `;

// const CartProductName = styled.span`
//   font-size: 16px;
//   margin-right: 10px;
// `;

// const RemoveButton = styled.button`
//   font-size: 14px;
//   background-color: #E53935;
//   color: white;
//   border: none;
//   padding: 6px 12px;
//   border-radius: 4px;
//   cursor: pointer;
// `;


// const Cart = () => {
//   const { cartItems, removeFromCart } = useCart(); // Get cartItems and removeFromCart from the context
// console.log (cartItems)

//   const handleRemoveFromCart = (productId) => {
//     setCartItems(cartItems.filter(item => item.id !== productId));
//   };

//   return (
//     <CartWrapper>
//       <h2>Your Cart</h2>
//       {cartItems.map(item => (
//         <CartItem key={item.id}>
//           <CartImage src={`http://localhost:3000${item.image.url}`} alt={item.name} />
//           <CartProductName>{item.name}</CartProductName>
//           <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>Remove</RemoveButton>
//         </CartItem>
//       ))}
//       {cartItems.length === 0 && <p>Your cart is empty.</p>}
//     </CartWrapper>
//   )
// };

// export default Cart;
import React from 'react';
import { useCart } from "react-use-cart";
import styled from 'styled-components';

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const CartImage = styled.img`
  max-width: 50px;
  margin-right: 10px;
`;

const CartProductName = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  font-size: 14px;
  background-color: #E53935;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeItem(productId);
  };

  return (
    <CartWrapper>
      <h2>Your Cart</h2>
      {isEmpty ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          {items.map((item, index) => (
            <CartItem key={index}>
              <CartImage src={item.img} alt={item.title} />
              <CartProductName>{item.title}</CartProductName>
              <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
        </>
      )}
    </CartWrapper>
  );
};

export default Cart;
