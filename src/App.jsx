
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from '.components/AuthContext';
import HomePage from "./Components/HomePage";
import Login from "./components/Login";
import SignUp from "./Components/Sign-up";

function App() {
  return (
    <>
      <BrowserRouter>
      <AuthContextProvider>
        <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
