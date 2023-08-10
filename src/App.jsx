import {  Routes, Route } from "react-router-dom";
// import { AuthContextProvider } from "./Components/AuthContext";
import { AuthProvider } from './Components/AuthContext';
import Header from './Components/Header';
import HomePage from "./Components/HomePage";
import Footer from './Components/Footer';
import Login from "./Components/Login";
import SignUp from "./Components/Sign-up";
import Profile from './Components/Profile';
import Products from './Components/Products';
import SellersPage from  './Components/SellersPage';

function App() {
  return (
    <AuthProvider>
    <div>
          <Header/>
          <Routes>
            <Route path="/sellers" element={<SellersPage />} />
          </Routes>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile/>}/>
            {/* <Route path="/sellers" element={<SellersPage />} /> */}
            <Route path="/products" element={<Products/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />

          </Routes>
          <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
