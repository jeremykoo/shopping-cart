import './styles.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <Outlet context={[cart, setCart, cartItemsCount, setCartItemsCount]}/>
    </>
  )
}

export default App
