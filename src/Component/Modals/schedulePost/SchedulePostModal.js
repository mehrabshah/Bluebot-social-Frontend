import React, { useState } from "react";
import "./SchedulePostModal.css";
export default function SchedulePostModal() {
  const [image, setImage] = useState(null);
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
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                


              </div>
            </div>
            <div className="modal-body">
              <div className="row">
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
                    <h1 className="Preview-heading">Preview</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
