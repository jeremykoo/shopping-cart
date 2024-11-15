import { Link } from "react-router-dom";

function Product({ product }) {
  // const product = {
  //   id: '1',
  //   name: 'Name',
  //   price: '$1.99',
  //   imageUrl: 'https://robohash.org/you.png?size=200x200',
  //   description: 'some description',
  // }
  
  return (
    <Link to={`${product.id}`}>
      <div className='product'>
        <div className="container">
          <img src={product.image} alt='product image' />
          <h3>{product.title}</h3>
        </div>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}

export default Product;