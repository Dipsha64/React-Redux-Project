import './App.css';
import Header from './containers/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productlisting from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Productlisting/>}></Route>
          <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
