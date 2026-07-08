import laptop from "../assets/laptop.jpg";
import mobile from "../assets/mobile.jpg";
import headphones from "../assets/headphones.jpg";

function Products() {
  return (
    <div className="products">

      <div className="card">
        <img src={laptop} alt="Laptop" />
        <h3>Laptop</h3>
        <p>Price: ₹55,000</p>
        <button>Buy Now</button>
      </div>

      <div className="card">
        <img src={mobile} alt="Mobile" />
        <h3>Mobile</h3>
        <p>Price: ₹25,000</p>
        <button>Buy Now</button>
      </div>

      <div className="card">
        <img src={headphones} alt="Headphones" />
        <h3>Headphones</h3>
        <p>Price: ₹2,000</p>
        <button>Buy Now</button>
      </div>

    </div>
  );
}

export default Products;