import "./dashboard.css";
import { useState } from "react";
import CardDashboard from "../components/cardDashboard";
import Card from "../components/card";
import { AiFillProduct } from "react-icons/ai";

const Dashboard = () => {
  const [sale, setSale] = useState(false);

  const jualProduct = () => {
    alert("click");
  };

  return (
    <div className="dashboard">
      <header className="header-dashboard">
        <div className="main-card">
          <CardDashboard
            icon={<AiFillProduct />}
            data={"15"}
            desc={"total barang yang anda tawarkan"}
          />
          <CardDashboard
            icon={<AiFillProduct />}
            data={"10"}
            desc={"barang terjual"}
          />
          <CardDashboard
            icon={<AiFillProduct />}
            data={"5"}
            desc={"barang tersedia"}
          />
          <CardDashboard
            icon={<AiFillProduct />}
            data={"15.000.000"}
            desc={"total pendapatan"}
          />
        </div>
      </header>
      <main className="main-dashboard">
        <button onClick={jualProduct}>jual</button>
      </main>
    </div>
  );
};

export default Dashboard;
