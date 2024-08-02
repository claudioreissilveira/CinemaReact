import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CartazPage from "./pages/Cartaz/CartazPage";
import CinemaPage from "./pages/Cinema/CinemaPage";

function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cartaz" element={<CartazPage />}></Route>
        <Route path="/filmes" element={<CinemaPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Rotas;
