import React from "react";

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
