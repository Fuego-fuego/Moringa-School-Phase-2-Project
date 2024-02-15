import {useState} from 'react'

import Main from './main'
import Hero from './hero'
import Footer from './footer'
import Cart from './Cart'

import '../App.css'

function App() {  
const [openedCart , setOpenedCart] = useState(false);
 




  
  return (
    <>
      <Hero setOpenedCart={setOpenedCart}/>
      <Main/>
      <Cart openedCart ={openedCart} setOpenedCart={setOpenedCart}/>
      <Footer/>
    </>
  )
}

export default App;
