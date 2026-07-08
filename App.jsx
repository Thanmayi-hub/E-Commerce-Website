import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductTable from "./components/ProductTable";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <Navbar />

      <Hero />

      <Products />

      <ProductTable />

      <Footer />

    </div>
  );
}

export default App;