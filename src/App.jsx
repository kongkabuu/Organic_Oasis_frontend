import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Components/AuthContext";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
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
