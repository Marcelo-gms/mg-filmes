// Router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages

import Home from "./pages/Home/Home";
import Filme from "./pages/Filme/Filme";
import Erro from "./pages/Erro/Erro";
import Favorites from "./pages/Favorites/Favorites";

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={<Erro />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default RouterApp;
