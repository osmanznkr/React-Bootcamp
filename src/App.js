
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Home from './products/Home';
import Products from './products/Products';
import ProductDetail from './products/ProductDetail';



function App() {
  return (
    <>

      <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li><Link to='/'>Home</Link></li> 
      <li><Link to='/products'>Products</Link></li>
    </ul>

      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/products' element= {<Products></Products>}></Route>
      <Route path="/products/:id" element={<ProductDetail/>}></Route>
    </Routes>

      <h1>Footer</h1>
      </>
    
  );
}

export default App;
