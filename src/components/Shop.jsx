import Product from "./Product";
import { useEffect, useState } from "react";

function Shop() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=10');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      return data;
    }

    getProducts();
  }, [])

  return (
    <main className='shop'>
      {products && products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </main>
  );
}

export default Shop;