import React from 'react';

function ProductDetailComponent({ product, addToCart }) {
  if (!product) {
    return <div>No se ha seleccionado un producto.</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductDetailComponent;
