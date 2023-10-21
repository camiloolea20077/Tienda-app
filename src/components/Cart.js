import React from 'react';

function Cart({ cart, removeFromCart, updateCart }) {
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    console.log('HOL')
  
    return (
      <div className="cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Cantidad: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button onClick={() => updateCart(item, 1)}>+</button>
            <button onClick={() => updateCart(item, -1)}>-</button>
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </div>
        ))}
        <p>Total de la compra: ${calculateTotal()}</p>
      </div>
    );
  }
export default Cart;
