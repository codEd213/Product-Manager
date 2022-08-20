import React from "react";
import ProductForm from "./components/ProductForm";
import DisplayAll from "./components/DisplayAll";
import OneProduct from "./components/OneProduct";
import UpdatedProduct from "./components/UpdatedProduct";
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
          <Route path="/product/edit/:id" element={<UpdatedProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
