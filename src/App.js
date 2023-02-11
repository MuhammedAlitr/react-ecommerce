import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import { ProuctProvider } from "./Context/Product"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import './App.css'
import Cart from "./pages/Cart"

const App = () => {


  return (
    <ProuctProvider>
      <Header />
      <div className="row">
        <div className="col-10">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <div className="col-2"><Cart /></div>
      </div>
    </ProuctProvider>
  )
}

export default App