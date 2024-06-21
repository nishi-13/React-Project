import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import StoreContextProvider from './Context/StoreContext';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Login from './Components/Login/Login';
function App() {

  const [showLogin,setShowLogin] =useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
    <StoreContextProvider>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </StoreContextProvider>
    <Footer/>
    </div>
    </>
  );
}

export default App;
