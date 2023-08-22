// Addons Nécessaires
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Importées
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
// Composant importés
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Import du style
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Details/:id" element={<Details />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
