import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './compunts/Footer'
import Header from './compunts/Header'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/Wishlist' element={<Wishlist/>}/>

      </Routes>
     
     
     < Footer/>
      
    </div>
  );
}

export default App;
