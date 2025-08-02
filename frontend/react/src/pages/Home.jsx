import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", price: "" });
      fetchProducts();
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchProducts();
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🧁 SweetNest Products</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
