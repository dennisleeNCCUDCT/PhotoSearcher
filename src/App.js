import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Homepages from "./pages/Homepages";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "./styles/style.scss";
function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" exact element={<Homepages />} />

        <Route path="/about" exact element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
