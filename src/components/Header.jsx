import { Link } from "react-router-dom";

function Header({ cartItemsCount }) {
  
  return (
    <header>
      <h1>Very Awesome Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Products</Link>
          </li>
          <li>
            <Link to='/cart'>Cart ({cartItemsCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;