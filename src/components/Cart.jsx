import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const [cart, setCart, _arg1, _arg2] = useOutletContext();

  const initialTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const [total, setTotal] = useState(initialTotal);

  function handleCheckout() {
    alert('Congratulations! You would have made a successful purchase if this was a real store! 😄');
  }

  return (
    <div className='cart'>
      {cart.length !== 0 ?  (
        <>
          <h1>Your Cart</h1>
          <hr />
          <div className="cart-list">
            {cart.map((product) => (
            <CartItem key={product.id} product={product} setCart={setCart} setTotal={setTotal}/>
            ))}
          </div>
          <h3>Total: ${parseFloat(total.toFixed(2))}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      ) : (
        <h1>There are currently no items in your cart.</h1>
      )}
    </div>
  );
}

export default Cart;