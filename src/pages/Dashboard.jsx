import "./dashboard.css";
import { useState } from "react";
import CardDashboard from "../components/cardDashboard";
import Card from "../components/card";
import { AiFillProduct } from "react-icons/ai";

const Dashboard = () => {
  const [sale , setSale] = useState(false)
  return (
    <div className="dashboard">
      <main>
        <div className="main-card">
      <CardDashboard icon={<AiFillProduct/>} data={"5"} desc={"total barang yang anda tawarkan"}/> 
      <CardDashboard icon={<AiFillProduct/>} data={"5"} desc={"total barang yang anda tawarkan"}/> 
      <CardDashboard icon={<AiFillProduct/>} data={"5"} desc={"total barang yang anda tawarkan"}/> 
      <CardDashboard icon={<AiFillProduct/>} data={"5"} desc={"total barang yang anda tawarkan"}/> 
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
