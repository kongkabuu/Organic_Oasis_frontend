import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./Components/AuthContext"
import Header from './Components/Header';
import HomePage from "./Components/HomePage";
import Footer from './Components/Footer';
import Login from "./Components/Login";
import SignUp from "./Components/Sign-up";
import Profile from './Components/Profile';
import Products from './Components/Products';
import SellersPage from  './Components/SellersPage';
import Cart from './Components/Cart';
import PaymentForm from './Components/PaymentForm';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    // <AuthProvider>
    // <Router>
    <div>
          <Header/>


          <Routes>
            <Route path="/sellers" element={<SellersPage />} />


            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/payment" component={PaymentForm} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/sellers" element={<SellersPage />} />
             <Route path="/products" element={<Products/>}/>
            <Route path="/products/:category" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />

          </Routes>
          <Footer />
    </div>
    // </Router>
    // </AuthProvider>
  );
}

export default App;
