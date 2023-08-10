import React, { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";

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

  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/orders')
      .then((response) => response.json())
      .then((data) => setOrderedItems(data))
      .catch((error) => console.error('Error fetching ordered items:', error));
  }, []);

  if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className='table table-light table-hover m-0'>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >+</button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >Remove Item</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Ordered Items</h2>
          <table className='table table-light table-hover m-0'>
            <tbody>
              {orderedItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.product.name}</td>
                  <td>Quantity: {item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
