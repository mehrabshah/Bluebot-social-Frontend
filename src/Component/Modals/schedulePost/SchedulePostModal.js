import React, { useState } from "react";
import "./SchedulePostModal.css";
export default function SchedulePostModal() {
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("1");

  const renderFieldsAndButtons = () => {
    if (selectedOption === "1") {
      return (
        <div className="selected-fields-container">
          <input type="text" placeholder="Input Field 1" />
          <input type="text" placeholder="Input Field 2" />
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      );
    } else if (selectedOption === "2") {
      return (
        <div className="selected-fields-container">
          <input type="text" placeholder="Input Field 3" />
          <input type="text" placeholder="Input Field 4" />
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
      );
    } else if (selectedOption === "3") {
      return (
        <div className="selected-fields-container">
          <input type="text" placeholder="Input Field 5" />
          <input type="text" placeholder="Input Field 6" />
          <button>Button 5</button>
          <button>Button 6</button>
        </div>
      );
    }
  };
  return (
    <div className="modal-post">
      <div
        className="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="post-heading">Create your post</h1>
              <div className="d-flex justify-content-between mt-3">
                <div className="flex-item">
                  <img
                    src="./images/facebook.png"
                    className="img-fluid ms-2"
                  ></img>
                  <img
                    src="./images/instagram.png"
                    className="img-fluid ms-2"
                  ></img>
                  <img
                    src="./images/pinterest.png"
                    className="img-fluid ms-2"
                  ></img>
                </div>
              </div>
              <div className="flex-item">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label="Large select example"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                {renderFieldsAndButtons()}


              </div>
            </div>
            <div className="modal-body">
              <div className="row d-flex algn-items-center">
                <div className="col-6 ">
                  <form
                    className="add-post  d-flex justify-content-center flex-column  align-items-center"
                    onClick={() =>
                      document.querySelector(".input-field").click()
                    }
                  >
                    <input
                      type="file"
                      accept="image/*, video/*"
                      className="input-field"
                      hidden
                      onChange={({ target: { files } }) => {
                        if (files) {
                          console.log("mehrab");
                          setImage(URL.createObjectURL(files[0]));
                        }
                      }}
                    />
                    <img src="./images/media.png" className="img-fluid"></img>
                    <h2 className="model-body-text mt-3">Add Media</h2>
                  </form>
                </div>
                <div className="col-6">
                  <div className="preview-wrapper">
                    {image?<></>:<h1 className="Preview-heading">Preview</h1>}
                    {image && <img src={image} alt="Preview" className="preview-image img-fluid" />}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
    Close
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
