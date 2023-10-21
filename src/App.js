import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


import Home from '../src/components/Home';
import ProductDetail from '../src/components/ProductDetail';
import Cart from '../src/components/Cart';
import Checkout from '../src/components/Checkout';

function App() {
  return (

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/product/:id" Component={ProductDetail} />
          <Route path="/cart" Component={Cart} />
          <Route path="/checkout" Component={Checkout} />
        </Routes>
  );
}

export default App;

