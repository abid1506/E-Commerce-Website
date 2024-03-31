import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Smartphones from "./pages/Furniture";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Motorcycles from "./pages/Motorcycles";
import Skincare from "./pages/Skincare";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/furniture" element={<Smartphones />} />
          <Route path="/motorcycle" element={<Motorcycles />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id/:title" element={<ProductDetails />} />
          <Route
            path="/search-result/:searchValue" element={<SearchResults />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
