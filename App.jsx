
// App.jsx
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import FAQ from "./pages/FAQ";
import ProductDetails from "./pages/Buyers/Product-Details/ProductDetails";
import RouterConfig from "./routes/route"; // if you need a catch-all or additional routes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="faq" element={<FAQ />} />

          <Route path="productdetails/:id" element={<ProductDetails />} />

          <Route path="*" element={<RouterConfig />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
