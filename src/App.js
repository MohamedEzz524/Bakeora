import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import OurOffer from "./OurOffer";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Contact from "./Contact";
import SearchResult from "./SearchResult.js";
import ScrollToTop from "./ScrollToTop.js";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";

const pages = [
  { page: <Home />, path: "" },
  { page: <About />, path: "about" },
  { page: <OurOffer />, path: "ourOffer" },
  { page: <Gallery />, path: "gallery" },
  { page: <Blog />, path: "blog/*" },
  { page: <Contact />, path: "contact" },
];

function App() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2000); // hide after 2s
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {!hide ? (
        <Preloader />
      ) : (
        <Router>
          <Header />

          <ScrollToTop />
          <Routes>
            {pages.map(({ page, path }) => (
              <Route key={path} path={`/${path}`} element={page} />
            ))}
            <Route path="search" element={<SearchResult />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
