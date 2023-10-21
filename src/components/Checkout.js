import React from 'react';

function Checkout({ cart, removeFromCart }) {
  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  console.log('Hola mundo')

  return (
    <div className="checkout">
      <h1>Resumen de la Compra</h1>
      <div className="cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Cantidad: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </div>
        ))}
      </div>
      <p>Total de la compra: ${calculateTotal()}</p>
      <h2>Información de Pago (Ficticia)</h2>
      <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="card">Número de Tarjeta de Crédito</label>
        <input type="text" id="card" name="card" />
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}

export default Checkout;
