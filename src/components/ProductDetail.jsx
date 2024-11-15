import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

function ProductDetail() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const [cart, setCart, cartItemsCount, setCartItemsCount] = useOutletContext();

  function handleAddToCart() {
    if (count === 0) {
      return;
    }

    setCartItemsCount(cartItemsCount + count);

    setCart([
      ...cart,
      {
        ...product,
        quantity: count,
      }
    ])
  }

  function handleIncCount() {
    setCount(c => c + 1);
  }

  function handleDecCount() {
    if (count <= 0) {
      return;
    }
    setCount(c => c - 1);
  }

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProduct(data);
      return data;
    }

    getProduct();
  }, [productId])

  return (
    <>
    {product ? (
      <div className='wrapper'>
        <img src={product.image} alt={product.title} />
        <div className='info'>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <div className='amount'>
            <button onClick={handleDecCount} type="button">-</button>
            <p className="count">{count}</p>
            <button onClick={handleIncCount} type="button">+</button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <Link to='/shop'>Go Back</Link>
        </div>
      </div>
    ) : (
      <h1>Loading...</h1>
    )}
    </>
  );
}

export default ProductDetail;