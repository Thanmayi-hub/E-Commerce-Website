function ProductTable() {
  return (
    <div className="table-section">

      <h2>Product Details</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Laptop</td>
            <td>₹55,000</td>
            <td>⭐⭐⭐⭐⭐</td>
          </tr>

          <tr>
            <td>Mobile</td>
            <td>₹25,000</td>
            <td>⭐⭐⭐⭐</td>
          </tr>

          <tr>
            <td>Headphones</td>
            <td>₹2,000</td>
            <td>⭐⭐⭐⭐⭐</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ProductTable;