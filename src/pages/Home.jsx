import "./home.css";
import Card from "../components/card";
const product = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/1a/76/26/1a7626d44c15f3c572ed6399e27ead0d.jpg",
    title: "Iphone 15 pro",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/1200x/37/af/07/37af0765eeb3d0dde512ea8fd49807d1.jpg",
    title: "laptop hp",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/1200x/e2/78/5e/e2785eb4093ecbce1beba2a9d5954571.jpg",
    title: "Sepatu puma",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/02/1f/04/021f045f5e2e02ee79b0655fc2f4d0b6.jpg",
    title: "Hotwheels",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/0f/15/48/0f1548626fb1b3bac973b594660c5444.jpg",
    title: "xiaomi 17",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/02/1f/04/021f045f5e2e02ee79b0655fc2f4d0b6.jpg",
    title: "Hotwheels",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/02/1f/04/021f045f5e2e02ee79b0655fc2f4d0b6.jpg",
    title: "Hotwheels",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/02/1f/04/021f045f5e2e02ee79b0655fc2f4d0b6.jpg",
    title: "Hotwheels",
    description: "iphone 15 pro inter ",
    price: 14000000,
  },
];

const Home = () => {
  return (
    <>
      <header class="header">
        <nav class="navbar">
          <h1 class="logo">JogjaPreloved</h1>
          <form class="search">
            <input type="text" placeholder="Cari produk..." />
          </form>

          <ul class="nav-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Kategori</a>
            </li>
            <li>
              <a href="#">Jual</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="home">
        navbar
        <div className="container-card">
          {product.map((item) => {
            return (
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
