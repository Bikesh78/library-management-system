import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const totalRecordData = {
  labels: [
    "Total Items",
    "Total Type",
    "Items Lost",
    "Items Damaged",
    "Items Issued",
    "Items returned",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#E91CC1",
        "#63CFCF",
        "#FD678D",
        "#E368CB",
        "#C0B4B2",
        "#68C3A0",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const currentMonthData = {
  labels: ["Items Added", "Items Issued", "Items Returned"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#63CFCF", "#C0B4B2", "#68C3A0"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const Dashboard = () => {
  return (
    <div className="main-content dashboard">
      <div className="dashboard-row">
        <div className="card card-small">
          <div className="card-header">
            <p>Total Records Till Date</p>
          </div>
          <div className="card-body">
            <h2>Library Book Record</h2>
            <Pie data={totalRecordData} />
          </div>
        </div>
        <div className="card card-medium">
          <div className="card-header">
            <p>Reservation List</p>
          </div>
          <div className="card-body">
            <table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Date</th>
                  <th>Member ID</th>
                  <th>Book ID</th>
                  <th>Book Name</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card card-small">
          <div className="card-header">
            <p>Current Month Record</p>
          </div>
          <div className="card-body">
            <h2>Library Book Record</h2>
            <Pie data={currentMonthData} />
          </div>
        </div>
        <div className="card card-medium">
          <div className="card-header">
            <p>Due Items</p>
          </div>
          <div className="card-body">
            <table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Member ID</th>
                  <th>Book ID</th>
                  <th>Book Name</th>
                  <th>Return Date</th>
                  <th>Days Late</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
