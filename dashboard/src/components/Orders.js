import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then(res => setOrders(res.data))
      .catch(err => console.error("Error fetching orders:", err));
  }, []);

  // Chart data prep
  const stockCounts = orders.reduce((acc, order) => {
    acc[order.name] = (acc[order.name] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(stockCounts),
    datasets: [
      {
        label: "Orders by Stock",
        data: Object.values(stockCounts),
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
          "#9966FF", "#FF9F40", "#C9CBCF", "#8DD17E", "#F67019"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        {orders.length === 0 ? (
          <p>You haven't placed any orders today</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {orders.length > 0 && (
        <div className="row mt-4">
          <div className="col text-center">
            <h5>Order Distribution</h5>
            <div style={{ maxWidth: 400, margin: "0 auto" }}>
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;