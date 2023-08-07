
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Home from "./Home"
// import Cart from "./components/Cart"; 
// import Cart from "./Cart";
// import {CartProvider } from "react-use-cart";
// function App() {
//   return (
//     <>

     
//     <CartProvider>
//     <Home />
//     <Cart />
//     <Cart/>
//     </CartProvider>
//     </>
//   );
// }

// export default App;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from "./components/Cart"; // Keep this import

import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;

