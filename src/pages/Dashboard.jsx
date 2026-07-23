import "./dashboard.css";
import { useState } from "react";
import CardDashboard from "../components/cardDashboard";
import Card from "../components/card";
import { AiFillProduct } from "react-icons/ai";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { AgGridReact } from "ag-grid-react";

const Dashboard = () => {
  const [sale, setSale] = useState(false);

  const jualProduct = () => {
    alert("click");
  };
  const modules = [AllCommunityModule];

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

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
        {sale
          ? () => {
              return;
            }
          : () => {}}
        <AgGridProvider modules={modules}>
          {/* Data Grid will fill the size of the parent container */}
          <div style={{ height: 500 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
          </div>
        </AgGridProvider>
      </main>
    </div>
  );
};

export default Dashboard;
