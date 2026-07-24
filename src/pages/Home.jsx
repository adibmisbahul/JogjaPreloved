import "./home.css";
import Card from "../components/card";
import { useState, useEffect } from "react";
import data from "../assets/dumyData";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

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
      <header className="header">
        <nav className="navbar">
          <span>
            <h2>JogjaPreloved</h2>
          </span>
          <div className="navigation">
            <div className="search">
              <input type="text" />
              <CiSearch />
            </div>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">setting</a>
              </li>
            </ul>
          </div>
          <span className="account">
            <h2>signin</h2>
            <button>signup</button>
          </span>
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
