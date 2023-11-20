/* eslint-disable no-unused-vars */

import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Home from './products/Home';
import Products from './products/Products';
import ProductDetail from './products/ProductDetail';
import StatePractice from './state/StatePractice';
import RandomNumber from './state/RandomNumber';
import RandomColor from './state/RandomColor';
import RemoveRandom from './state/RemoveRandom';
import ProductsState from './state/ProductsState';



function App() {
  return (
   <ProductsState></ProductsState>
    
  );
}

export default App;
