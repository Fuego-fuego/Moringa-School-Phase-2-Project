import {useState,useEffect} from 'react'

import Main from './main'
import Hero from './hero'
import Footer from './footer'
import Cart from './Cart'

import '../App.css'

function App() {  
const [openedCart , setOpenedCart] = useState(false);
const [cartItems,setCartItems] = useState([]);


useEffect(() => {
  fetch(`http://localhost:8001/cart`)
  .then(resp => resp.json())
  .then(jewels => setCartItems(jewels))
},[])

// Add product to shopping cart
function handleAddToCart(newCartItem){

  setCartItems([...cartItems,newCartItem])
}






  
  return (
    <>
      <Hero setOpenedCart={setOpenedCart}/>
      <Main onAddToCart ={handleAddToCart}/>
      <Cart openedCart ={openedCart} setOpenedCart={setOpenedCart} cartItems={cartItems}/>
      <Footer/>
    </>
  )
}

export default App;
