import React from "react";
import imageIcon from "../images/empty-image.png";

const AddMember = () => {
  return (
    <div className="main-content add-items">
      <div className="card card-big">
        <div className="card-header">
          <p>Add Borrower</p>
        </div>
        <div className="card-body">
          <form className="primary-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-fields-container">
              <div className="form-field">
                <label htmlFor="">Borrower Category</label>
                <select>
                  <option value="" disabled selected>
                    Please select a Category
                  </option>
                  <option value="">Admin</option>
                  <option value="">Student</option>
                  <option value="">Teacher</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="">Contact Number</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Gender</label>
                <div className="radio-field">
                  <label htmlFor="">
                    <input type="radio" name="" id="" />
                    Male
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="" id="" />
                    Female
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="" id="" />
                    Others
                  </label>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="">Name of the Borrower</label>
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
                <label htmlFor="">Issue Date</label>
                <input type="date" />
              </div>
              <div className="form-field">
                <label htmlFor="">Address of the Borrower</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Membership Plan</label>
                <select>
                  <option value="" disabled></option>
                  <option value="">Monthly</option>
                  <option value="">Yearly</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="">Email ID</label>
                <input type="email" />
              </div>
              <div className="form-field">
                <label htmlFor="">Duration</label>
                <select>
                  <option value="" disabled></option>
                </select>
              </div>
            </div>
            <div className="photo-field">
              <div className="image-container">
                <img src={imageIcon} alt="Upload Image" />
              </div>
              <h4>Upload Image</h4>
              <p className="small-text">Maximum file size 1 MB</p>
              <div className="button-container">
                <button className="btn-primary">Save</button>
                <button className="btn-secondary">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card card-big card-bottom">
        <div className="card-header">
          <p>Borrower List</p>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-fields-container">
              <p>Search by</p>
              <div className="form-field">
                <select>
                  <option value="" disabled selected>
                    Please select a Type
                  </option>
                  <option value="">All Borrowers</option>
                  <option value="">Borrower's ID</option>
                  <option value="">Name</option>
                  <option value="">Contact No</option>
                  <option value="">Assigned Books</option>
                  <option value="">Entry Date</option>
                </select>
              </div>
              <div className="form-field">
                <input type="text" />
              </div>
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Borrower's ID</th>
                <th>Name</th>
                <th>Contact No</th>
                <th>Assigned Books</th>
                <th>Dues</th>
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
  );
};

export default AddMember;
