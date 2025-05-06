import React from 'react'
import Header from './Comp/Header/Header'
import Footer from './Comp/Footer/Footer'
import Banner from './Pages/Banner'
import { CartProvider } from './cartContext'

function App() {
  return (
    <>
    <CartProvider>
     <Header/> 
     <Footer/>
     </CartProvider>
    </>
  )
}

export default App
