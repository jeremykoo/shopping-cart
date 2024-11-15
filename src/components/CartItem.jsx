import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function CartItem({ product, setCart, setTotal }) {
  const [count, setCount] = useState(product.quantity);
  const [arg1, arg2, cartItemsCount, setCartItemsCount] = useOutletContext();
  
  function handleIncrement() {
    setCount(c => c + 1);
    setCart(prevCart => {
      const productIndex = prevCart.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        return prevCart.map(item => item.id === product.id ? {...item, quantity: count} : item);
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: count,
          }
        ]
      }
    });
    setTotal(prev => prev + product.price);
    setCartItemsCount(cartItemsCount + 1);
  }

  function handleDecrement() {
    if (count === 0) {
      return;
    }
    setCount(c => c - 1);
    setCart(prevCart => {
      const productIndex = prevCart.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        return prevCart.map(item => item.id === product.id ? {...item, quantity: count} : item);
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: count,
          }
        ]
      }
    });
    setTotal(prev => prev - product.price);
    setCartItemsCount(cartItemsCount - 1);
  }

  function handleRemoveItem() {
    setTotal(prev => prev - (product.price * count));
    setCartItemsCount(cartItemsCount - count);
    setCart(prev => prev.filter((item) => item.id !== product.id));
  }

  return (
    <div key={product.id} className='wrapper'>
      <img src={product.image} alt={product.title} />
      <div className='info'>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <div className='amount'>
          <button onClick={handleDecrement} type="button">-</button>
          <p className="count">{count}</p>
          <button onClick={handleIncrement} type="button">+</button>
        </div>
      </div>
      <button onClick={handleRemoveItem} type="button">remove</button>
    </div>
  );
}

export default CartItem;