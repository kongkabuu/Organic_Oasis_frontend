
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home"
import Cart from "./components/Cart"; 
import CartComponent from "./CartComponent";
import {CartProvider } from "react-use-cart";
function App() {
  return (
    <>

     
    <CartProvider>
    <Home />
    <Cart />
    <CartComponent/>
    </CartProvider>
    </>
  );
}

export default App;

