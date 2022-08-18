import React from "react";
import ProductForm from "./components/ProductForm";
import DisplayAll from "./components/DisplayAll";
import OneProduct from "./components/OneProduct";
import "./App.css";
import Main from "./views/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<OneProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
