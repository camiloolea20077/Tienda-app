import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [cart, setCart] = useState([]); 
  const [selectedItem, setSelectedItem] = useState(null); 

  console.log('Hola Mundo')

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
      };
      
      const updateCart = (item, change) => {
        const updatedCart = cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + change };
          }
          return cartItem;
        });
        setCart(updatedCart);
      };
      const handleSearch = (searchTerm) => {
        if (!searchTerm) {
          setFilteredProducts(products);
        } else {
          // Filtra los productos según el término de búsqueda
          const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredProducts(filtered);
        }
      };

  return (
    <div className="home">
      <h1>Productos Disponibles</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList
        products={filteredProducts.length > 0 ? filteredProducts : products}
        addToCart={addToCart}
        setSelectedItem={setSelectedItem}
      />
      <SearchBar onSearch={handleSearch} />
      {selectedItem && (
        <div>
          <h2>Detalles del Producto</h2>
          <img src={selectedItem.image} alt={selectedItem.title} />
          <h3>{selectedItem.title}</h3>
          <p>${selectedItem.price}</p>
          <button onClick={() => removeFromCart(selectedItem)}>Eliminar</button>
          <button onClick={() => updateCart(selectedItem, 1)}>+</button>
          <button onClick={() => updateCart(selectedItem, -1)}>-</button>
        </div>
      )}
      <Outlet></Outlet>
    </div>
  );
}
}

export default Home;
