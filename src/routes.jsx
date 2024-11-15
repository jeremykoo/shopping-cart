import App from "./App";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Shop from "./components/Shop";

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/:productId',
        element: <ProductDetail />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ],
  },
]

export default routes;