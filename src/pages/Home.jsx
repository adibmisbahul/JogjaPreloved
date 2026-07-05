import "./home.css";
import Card from "../components/card";
import { useState, useEffect } from "react";
import data from "../assets/dumyData";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  const [product, setProduct] = useState(data);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const searchProduct = () => {
    const result = product.filter(
      (item) => item.title.toLowerCase() === search.toLowerCase(),
    );
    setSearchResult(result);
  };

  return (
    <>
      <header class="header">
        <nav class="navbar">
          <h1 class="logo">JogjaPreloved</h1>
          <form class="search">
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == " Enter") {
                  searchProduct();
                }
              }}
            />
          </form>
          <button onClick={searchProduct}>
            <CiSearch />
          </button>
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
        <div className="container-card">
          {searchResult.length > 0
            ? searchResult.map((item) => {
                return (
                  <Card
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                );
              })
            : product.map((item) => {
                return (
                  <Card
                    key={item.id}
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
