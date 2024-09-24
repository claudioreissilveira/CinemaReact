import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CartazPage from "./pages/Cartaz/CartazPage";
import CinemaPage from "./pages/Cinema/CinemaPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./components/PrivateRouter/PrivateRouter";
import { AuthProvider } from "./context/AuthContext";

function Rotas() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cartaz"
            element={<ProtectedRoute element={<CartazPage />} />}
          />
          <Route
            path="/filmes"
            element={<ProtectedRoute element={<CinemaPage />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Rotas;
