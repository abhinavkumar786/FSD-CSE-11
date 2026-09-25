import products from "./home";
import "./item.css";

function Items() {
  function addToCart(title) {
    alert(`${title} added to cart!`);
  }

  return (
    <main className="items-container">
      {products.map((item) => (
        <div className="item-card" key={item.id}>
          <img src={item.image} alt={item.title} />

          <h3>Title: {item.title}</h3>

          <p>Price: ₹{item.price}/-</p>

          <button onClick={() => addToCart(item.title)}>
            Add To Cart
          </button>
        </div>
      ))}
    </main>
  );
}

export default Items;