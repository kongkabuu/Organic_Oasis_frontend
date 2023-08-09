import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Components/AuthContext";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import SignUp from "./Components/Sign-up";
import SellersLogin from './Components/SellersLogin';
import SellersSignUp from './Components/SellersSignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sellers/login" element={<SellersLogin />} />
          <Route path="/sellers/sign-up" element={<SellersSignUp />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
