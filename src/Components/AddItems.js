import React from "react";
import imageIcon from "../images/empty-image.png";
const AddItems = () => {
  return (
    <div className="main-content add-items">
      <div className="card card-big">
        <div className="card-header">
          <p>Add Book & Item</p>
        </div>
        <div className="card-body">
          <form className="primary-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-fields-container">
              <div className="form-field">
                <label htmlFor="">Book & Item Category</label>
                <select>
                  <option value="" disabled selected>
                    Please select a Category
                  </option>
                  <option value="books">Books</option>
                  <option value="pdf">Pdf</option>
                  <option value="dvd">DVD</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="">Title</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Location ID</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Book & Item sub-category</label>
                <select>
                  <option value="course">Course</option>
                  <option value="guide">Guide</option>
                  <option value="old-question-solution">
                    Old Question Solution
                  </option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="">Author</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Number of Pages</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Accession Number</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Classification Number</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Price of item</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">ISBN/ISSN:</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="">Subject</label>
                <input type="text" />
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
          <p>Book & Item List</p>
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
                  <option value="">All Items</option>
                  <option value="">Accession Number</option>
                  <option value="">Title</option>
                  <option value="">Author</option>
                  <option value="">Location ID</option>
                  <option value="">Status</option>
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
                <th>Accession</th>
                <th>Title</th>
                <th>Author</th>
                <th>Location ID</th>
                <th>Status</th>
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

export default AddItems;
