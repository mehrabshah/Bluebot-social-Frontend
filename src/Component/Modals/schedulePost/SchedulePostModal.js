import React, { useEffect, useState } from 'react'
import './SchedulePostModal.css'
import axios from 'axios'
import BASE_URL from '../../../services/api'

export default function SchedulePostModal() {
  const [image, setImage] = useState(null)
  const [postStatus, setPostStatus] = useState("TEXT")
  const [previewImage, setPreviewImage] = useState(null)
  const [selectedOption, setSelectedOption] = useState('')
  const [date, setDate] = useState(new Date())
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [postTitle, setPostTitle] = useState('')
  const [postDescription, setPostDescription] = useState('')
  const [boards, setBoards] = useState(null);
  const [selectedPinBoard, setSelectedPinBoard] = useState(null);
  const userId = localStorage.getItem('UserId')
  const pinterestLoginStatus = localStorage.getItem('pinterestLoginStatus')


  useEffect(() => {
    const getPinBoards = async () => {
      const res = await axios.post(`${BASE_URL}/auth/pinterest/get-boards`, { userId }, {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Content-Type': 'application/json',
        },
      })
      console.log("Boards: " + JSON.stringify(res.data.items))
      setBoards(res.data.items);
    }

    if(selectedOption === 'PINTEREST')
    {
      getPinBoards()
    }


  }, [selectedOption])

  const addPost = async payload => {
    try {
      const formData = new FormData()
      formData.append('type', payload.type)
      formData.append('text', payload.text)
      formData.append('title', payload.text)
      formData.append('desc', payload.text2)
      formData.append('date', payload.date)
      formData.append('post', payload.post)
      formData.append('img', image)
      formData.append('user', payload.user)
      const res = await axios.post(`${BASE_URL}/post/createPost`, payload, {
      // const res = await axios.post(`${BASE_URL}/auth/pinterest/create-post`, payload, {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Content-Type': 'application/json',
        },
      })
      if (res.status === 201) {
        console.log(res)
        alert(res.data.message)
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
    setPostTitle(value)
  }

  const handleInputChangeTwo = value => {
    setPostDescription(value)
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setPostStatus("MEDIA")
    setPreviewImage(URL.createObjectURL(file))
  };

  const handleSubmit = () => {
    // if (selectedPinBoard === '' || selectedPinBoard === null)
    // {
    //   alert("No Board Selected for Pin Post");
    //   return;
    // }

    const payload = {
      postData: {
        type: selectedOption,
        title: postTitle,
        desc: postDescription,
        date: date,
        img: image,
        post: postStatus,
        pinBoard: selectedPinBoard
      },
      userId: userId,
    }
    addPost(payload)
    console.log(payload)
  }
  console.log(selectedOption)
  return (
    <div className="modal-post" >
      <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ backgroundColor: 'white', width: '80%' }}>
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
                    onClick={() => (pinterestLoginStatus ? handleLogoClick('PINTEREST') : null)}
                  />
                  <img
                    src="./images/image8.png"
                    className={`img-fluid ms-2 ${selectedLogo === 'LINKEDIN' ? 'selected' : ''}`}
                    alt="pinterestimg"
                    onClick={() => handleLogoClick('LINKEDIN')}
                  />

                </div>
                {selectedOption === 'PINTEREST' ?
                  <div className='select-board-container'>
                    <label htmlFor="boardSelect">Choose a Board for Pin:</label>
                    <select
                      id='boardSelect'
                      className="form-select form-select-lg mb-3"
                      // aria-label="Large select example"
                      value={boards !== undefined || boards !== null ? selectedPinBoard : <span>NO BOARDS Avaialable</span>}
                      onChange={e => {
                        console.log(e.target.value)
                        setSelectedPinBoard(e.target.value)
                      }}
                    >
                      <option value=''>No Board Selected</option>
                      {
                        boards !== undefined && boards !== null ? (
                          boards.map((board, index) => (
                            <option key={index} value={board.id}>{board.name}</option>
                          ))
                        )
                          :
                          (
                            <option value=''>NO BOARDS Available</option>
                          )
                      }
                    </select>
                  </div>
                  : null
                }
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
                  {/* <option selected>Open this select menu</option> */}
                  <option value="image">image</option>
                  <option value="video">video</option>
                </select>
                <div className='d-flex flex-wrap' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div className="selected-fields-container d-flex flex-wrap">
                    <input type="text" placeholder="Add Post Text Here" value={postTitle} onChange={e => handleInputChangeOne(e.target.value)} />
                    <input type="text" placeholder="Add Tags Here" className='ms-md-4 ms-1' value={postDescription} onChange={e => handleInputChangeTwo(e.target.value)} />
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
