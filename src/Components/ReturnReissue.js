import React from "react";

const ReturnReissue = () => {
  return (
    <div className="main-content return-reissue">
      <div className="card card-big">
        <div className="card-header">
          <p>Reissue Items</p>
        </div>
        <div className="card-body">
          <form className="primary-form" onSubmit={(e) => e.preventDefault()}>
            <div
              className="form-fields-container"
              style={{ maxWidth: "100%", columnGap: "113px" }}
            >
              <div className="form-field">
                <label htmlFor="">Accession Number</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Member ID:</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Number of Days</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Issue Date</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Memebership Status</label>
                <select>
                  <option value="" disabled></option>
                  <option value="">Active</option>
                  <option value="">Deactive</option>
                  <option value="">On Hold</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="">Title</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Issue Date</label>
                <input type="date" />
              </div>
              <div className="button-container" style={{ marginLeft: "auto" }}>
                <button className="btn-primary" style={{ marginRight: "10px" }}>
                  Reissue
                </button>
                <button className="btn-secondary">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card card-big card-bottom" style={{ minHeight: "299px" }}>
        <div className="card-header">
          <p>Add Items For Issue</p>
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
              <div className="form-field">
                <label htmlFor="">Return Date</label>
                <input type="date" />
              </div>
            </div>
          </form>
          <table style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>Accession Number</th>
                <th>Member ID</th>
                <th>Title</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Fine</th>
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
      <div
        className="button-container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button className="btn-primary">Reissue</button>
        <button className="btn-secondary">Reset</button>
      </div>
    </div>
  );
};

export default ReturnReissue;
