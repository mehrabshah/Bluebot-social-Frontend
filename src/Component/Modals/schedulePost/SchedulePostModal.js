import React, { useState } from "react";
import "./SchedulePostModal.css";
import axios from "axios";

export default function SchedulePostModal() {
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("1");
  const [date, setDate] = useState(new Date());
  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();
  const userId = localStorage.getItem("UserId");

  const addPost = async (payload) => {
    try{
      const formData = new FormData();
      formData.append('type', payload.type);
      formData.append('text1', payload.text1);
      formData.append('text2', payload.text2);
      formData.append('date', payload.date);
      formData.append('img', image);
      formData.append('userId', payload.userId);
      const res = await axios.post("http://localhost:8000/post/createPost", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if(res){
        console.log(res);
      }
    }
    catch(e){
      console.log(e);
    }
  }


  const handleInputChangeOne = (value) => {
    setInputOne(value);
  }

  const handleInputChangeTwo = (value) => {
    setInputTwo(value);
  }


  const handleSubmit = () => {
    const payload = {
        type: 'FACEBOOK', 
        text1: inputOne,
        text2: inputTwo,
        date: date,
        img: image,
        userId: userId
    }
    addPost(payload)
    console.log(payload);
  }

  const renderFieldsAndButtons = () => {
    if (selectedOption === "1") {
      return (
        <div className="selected-fields-container">
          <input type="text" placeholder="Input Field 1" value={inputOne} onChange={e => handleInputChangeOne(e.target.value)}/>
          <input type="text" placeholder="Input Field 2"value={inputTwo} onChange={e => handleInputChangeTwo(e.target.value)} />
        </div>
      );
    } else if (selectedOption === "2") {
      return (
        <div className="selected-fields-container">
          <input type="text" placeholder="Input Field 3" value={inputOne} onChange={e => handleInputChangeOne(e.target.value)}/>
          <input type="text" placeholder="Input Field 4" value={inputTwo} onChange={e => handleInputChangeTwo(e.target.value)}/>
        </div>
      );
    } else if (selectedOption === "3") {
      return (
        <div className="selected-fields-container">
          <input type="text" placeholder="Input Field 5" value={inputOne} onChange={e => handleInputChangeOne(e.target.value)}/>
          <input type="text" placeholder="Input Field 6" value={inputTwo} onChange={e => handleInputChangeTwo(e.target.value)}/>
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
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  {renderFieldsAndButtons()}
                  <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
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
              <button type="button" className="btn btn-secondary" onClick={handleSubmit}>
                Save
              </button>
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
