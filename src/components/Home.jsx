import { Link } from "react-router-dom";

function Home() {

  return (
    <main className='home'>
      <h1>Welcome to the Very Awesome Shop!</h1>
      <p>This is the best place for the most awesome items that will enhance your daily life. Click the button below to start your new journey.</p>
      <Link to="/shop">Shop</Link>
    </main>
  );
}

export default Home;