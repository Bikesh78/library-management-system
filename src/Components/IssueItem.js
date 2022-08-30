import React from "react";
import personImage from "../images/person.png";
const IssueItem = () => {
  return (
    <div className="main-content issue">
      <div className="card card-big card-top">
        <div
          className="card-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p>Borrower's Detail</p>
          <p>Previously Issued Items</p>
        </div>
        <div className="card-body">
          <div className="image-container">
            <img src={personImage} alt="" />
          </div>
          <form className="primary-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-fields-container">
              <div className="form-left">
                <div className="form-field">
                  <label htmlFor="">Borrower's ID</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Late Fee</label>
                  <input type="number" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Membership Status</label>
                  <select>
                    <option value="" disabled></option>
                    <option value="">Active</option>
                    <option value="">Deactive</option>
                    <option value="">On Hold</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="">Number of items already use</label>
                  <input type="number" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Renew Date </label>
                  <input type="date" />
                </div>
              </div>
              <div className="form-right">
                <div className="form-field">
                  <label htmlFor="">Book Title</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Issue Date</label>
                  <input type="date" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Renew Date </label>
                  <input type="date" name="date" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card card-big card-bottom">
        <div className="card-header">
          <p>Add Items for Issue</p>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-fields-container">
              <div className="form-field">
                <label htmlFor="">Accession No:</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">ISBN No:</label>
                <input type="text" />
              </div>
              <div className="form-field" style={{ width: "149px" }}>
                <label htmlFor="">No of Days</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Issue Date</label>
                <input type="date" name="" id="" />
              </div>
              <button className="btn-secondary">Add</button>
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Accession Number</th>
                <th>Title</th>
                <th>Subject</th>
                <th>Author</th>
                <th>Due Date</th>
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
      <div className="button-container">
        <button className="btn-primary">Save</button>
        <button className="btn-secondary">Reset</button>
      </div>
    </div>
  );
};

export default IssueItem;
