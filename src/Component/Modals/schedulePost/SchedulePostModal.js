import React, { useState } from 'react'
import './SchedulePostModal.css'
import axios from 'axios'
import BASE_URL from '../../../services/api'

export default function SchedulePostModal() {
  const [image, setImage] = useState(null)
  const [postStatus, setPostStatus] = useState("TEXT")
  const [previewImage, setPreviewImage] = useState(null)
  const [selectedOption, setSelectedOption] = useState('1')
  const [date, setDate] = useState(new Date())
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [inputOne, setInputOne] = useState()
  const [inputTwo, setInputTwo] = useState()
  const userId = localStorage.getItem('UserId')

  const addPost = async payload => {
    try {
      const formData = new FormData()
      formData.append('type', payload.type)
      formData.append('text', payload.text)
      formData.append('text1', payload.text)
      formData.append('text2', payload.text2)
      formData.append('date', payload.date)
      formData.append('post', payload.post)
      formData.append('img', image)
      formData.append('user', payload.user)
      const res = await axios.post(`${BASE_URL}/post/createPost`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (res) {
        console.log(res)
      }
    } catch (e) {
      console.log(e)
    }
  }
  const handleLogoClick = (value) => {
    // Update the selected logo and "type" in FormData
    setSelectedLogo(value);
    setSelectedOption(value);
  };

  const handleInputChangeOne = value => {
    setInputOne(value)
  }

  const handleInputChangeTwo = value => {
    setInputTwo(value)
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPostStatus("MEDIA")
    setPreviewImage(URL.createObjectURL(file))
  };

  const handleSubmit = () => {
    const payload = {
      type: selectedOption,
      text: inputOne,
      text2: inputTwo,
      date: date,
      img: image,
      user: userId,
      post:postStatus
    }
    addPost(payload)
    console.log(payload)
  }
  console.log(selectedOption)
  return (
    <div className="modal-post" >
      <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ backgroundColor: 'white', width: '80%' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="post-heading">Create your post</h1>
              <div className="image-option-container d-flex justify-content-between mt-3 mb-md-3 mb-1">
                <div className="flex-item">
                <img
                    src="./images/facebook.png"
                    className={`img-fluid ms-2 ${selectedLogo === 'FACEBOOK' ? 'selected' : ''}`}
                    alt="fbimg"
                    onClick={() => handleLogoClick('FACEBOOK')}
                  />
                  <img
                    src="./images/instagram.png"
                    className={`img-fluid ms-2 ${selectedLogo === 'INSTAGRAM' ? 'selected' : ''}`}
                    alt="instaimg"
                    onClick={() => handleLogoClick('INSTAGRAM')}
                  />
                  <img
                    src="./images/pinterest.png"
                    className={`img-fluid ms-2 ${selectedLogo === 'PINTEREST' ? 'selected' : ''}`}
                    alt="pinterestimg"
                    onClick={() => handleLogoClick('PINTEREST')}
                  />
                  <img
                    src="./images/image8.png"
                    className={`img-fluid ms-2 ${selectedLogo === 'LINKEDIN' ? 'selected' : ''}`}
                    alt="pinterestimg"
                    onClick={() => handleLogoClick('LINKEDIN')}
                  />

                </div>
              </div>
              <div className="flex-item">
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label="Large select example"
                  value={selectedOption}
                  onChange={e => {
                    setImage(null)
                    setPostStatus("TEXT")
                    setSelectedOption(e.target.value)
                  }}
                >
                  <option selected>Open this select menu</option>
                  <option value="image">image</option>
                  <option value="video">video</option>
                </select>
                <div className='d-flex flex-wrap' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className="selected-fields-container d-flex flex-wrap">
          <input type="text" placeholder="Add Post Text Here" value={inputOne} onChange={e => handleInputChangeOne(e.target.value)} />
          <input type="text" placeholder="Add Tags Here" className='ms-md-4 ms-1' value={inputTwo} onChange={e => handleInputChangeTwo(e.target.value)} />
        </div>
                  <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="row d-flex algn-items-center">
                <div className="col-6 ">
                  <form className="add-post  d-flex justify-content-center flex-column  align-items-center" onClick={() => document.querySelector('.input-field').click()}>
                    <input
                      type="file"
                      accept="image/*, video/*"
                      className="input-field"
                      hidden
                      // onChange={({ target: { files } }) => {
                      //   if (files) {
                      //     console.log('mehrab')
                      //     setImage(URL.createObjectURL(files[0]))
                      //   }
                      // }}
                      onChange={handleImage}
                    />
                    <img src="./images/media.png" alt="mediaPic" className="img-fluid"></img>
                    <h2 className="model-body-text mt-3">Add Media</h2>
                  </form>
                </div>
                <div className="col-6">
                  <div className="preview-wrapper">
                    {image ? <></> : <h1 className="Preview-heading">Preview</h1>}
                    {image &&
                      (selectedOption === 'image' ? (
                        <img src={previewImage} className="preview-image img-fluid" alt="img"></img>
                      ) : (
                        <video alt="Preview" controls className="preview-image img-fluid">
                          <source src={previewImage} type="video/mp4" />
                        </video>
                      ))}
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
  )
}
