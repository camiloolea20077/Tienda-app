import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products, addToCart }) {
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>Ver Detalles</Link> {/* Enlace a la página de detalle */}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    );
  }
export default ProductList;
