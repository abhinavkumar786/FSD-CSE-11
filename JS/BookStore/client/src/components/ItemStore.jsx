function ItemStore() {

  const books = [
    {
      id: 1,
      title: "The Alchemist",
      price: 299,
      image: "/image1.jpg"
    },
    {
      id: 2,
      title: "Atomic Habits",
      price: 499,
      image: "/image2.jpg"
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      price: 399,
      image: "/image3.jpg"
    },
    {
      id: 4,
      title: "The Psychology of Money",
      price: 449,
      image: "/image4.jpg"
    }
  ];
  return (
    <main className="book-container">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img
            src={book.image}
            alt={book.title}
          />
          <h2>Title: {book.title}</h2>
          <p>Price: ₹{book.price}/-</p>
          <button>Add To Cart</button>
        </div>
      ))}
    </main>
  );
}

export default ItemStore;