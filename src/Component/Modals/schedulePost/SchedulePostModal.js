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
  const pinterestLoginStatus = localStorage.getItem('pinterestLoginStatus');

  const [openCreateBoardModal, setOpenCreateBoardModal] = useState(false);
  const [boardName, setBoardName] = useState('')
  const [boardDesc, setBoardDesc] = useState('')
  const [boardPrivacy, setBoardPrivacy] = useState('PUBLIC')
  const [getAgainPinBoards, setGetAgainPinBoards] = useState(false);


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

    if (selectedOption === 'PINTEREST') {
      getPinBoards()
    }


  }, [selectedOption, getAgainPinBoards])

  const createPinterestBoard = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/pinterest/create-board`, { boardName, boardDesc, boardPrivacy, userId });
      if (response.status === 200) {
        console.log(response)
        alert("Board Created Successfully");
        setOpenCreateBoardModal(false);
        setBoardName('');
        setBoardDesc('');
        setBoardPrivacy('PUBLIC');
        setGetAgainPinBoards(!getAgainPinBoards);
      }
    }
    catch (error) {
      console.error(error);
      alert(error.response.data.message)
    }
  }

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

      switch (selectedOption) {
        case "PINTEREST":
          const res = await axios.post(`${BASE_URL}/auth/pinterest/create-post`, payload, {
            headers: {
              // 'Content-Type': 'multipart/form-data',
              'Content-Type': 'application/json',
            },
          })
          if (res.status === 201) {
            console.log(res)
            alert(res.data.message)
          }
          break;
        case "LINKEDIN":
          const responseLinkedin = await axios.post(`${BASE_URL}/auth/linkedin/create-post`, payload, {
            headers: {
              // 'Content-Type': 'multipart/form-data',
              'Content-Type': 'application/json',
            },
          })
          if (responseLinkedin.status === 201) {
            console.log(responseLinkedin)
            alert(responseLinkedin.data.message)
          }
          break;

        case 'INSTAGRAM':

          break;

        case 'FACEBOOK':

          break;

        case 'TWITTER':
          const twitterResponse = await axios.post(`${BASE_URL}/auth/twitter/create-post`, payload, {
            headers: {
              // 'Content-Type': 'multipart/form-data',
              'Content-Type': 'application/json',
            },
          })
          if (twitterResponse.status === 201) {
            console.log(twitterResponse)
            alert(twitterResponse.data.message)
          }

          console.log("Twitter")
          break;
        default:
          console.log("Not any social platform")
          alert("Please Select a Social Platform")
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
    console.log(file)

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result contains the base64 image data
        const base64ImageData = reader.result;
        setImage(base64ImageData);
        setPreviewImage(base64ImageData)
      };

      // Read the file as a data URL (base64)
      reader.readAsDataURL(file);
    }

    // setImage(URL.createObjectURL(file));
    // setPostStatus("MEDIA")
  };

  const handleSubmit = () => {
    if (selectedOption === 'PINTEREST') {
      if (selectedPinBoard === '' || selectedPinBoard === null) {
        alert("No Board Selected for Pin Post");
        return;
      }
    }

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
    <>
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
                      onClick={() => (pinterestLoginStatus ? handleLogoClick('PINTEREST') : alert("Please Sign in to Pinterest"))}
                    />
                    <img
                      src="./images/image8.png"
                      className={`img-fluid ms-2 ${selectedLogo === 'LINKEDIN' ? 'selected' : ''}`}
                      alt="pinterestimg"
                      onClick={() => handleLogoClick('LINKEDIN')}
                    />
                    <img
                      src="./images/image7.png"
                      className={`img-fluid ms-2 ${selectedLogo === 'TWITTER' ? 'selected' : ''}`}
                      alt="twitterimg"
                      onClick={() => handleLogoClick('TWITTER')}
                    />

                  </div>
                  {selectedOption === 'PINTEREST' ?
                    <>
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
                      <div>
                        <button className='btn btn-secondary' onClick={() => setOpenCreateBoardModal(!openCreateBoardModal)}>Create Board</button>
                      </div>
                      {/*  MODAL for Create Pin Board */}
                      {openCreateBoardModal ?
                        <div className="create-board-modal" id="createBoardModal">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="createBoardModalLabel">Create Pinterest Board</h5>
                              </div>
                              <div className="modal-body" style={{ display: 'grid' }}>

                                <label htmlFor="boardName">Board Name</label>
                                <input
                                  type="text"
                                  id="boardName"
                                  value={boardName}
                                  onChange={(e) => setBoardName(e.target.value)}
                                  required
                                />


                                <label htmlFor="boardDescription">Board Description</label>
                                <input
                                  type="text"
                                  id="boardDescription"
                                  value={boardDesc}
                                  onChange={(e) => setBoardDesc(e.target.value)}
                                  required
                                />

                                <label htmlFor="privacy">Privacy</label>
                                <select id="privacy"
                                  value={boardPrivacy}
                                  onChange={(e) => setBoardPrivacy(e.target.value)}
                                >
                                  <option value="PUBLIC">Public</option>
                                  <option value="PROTECTED">Protected</option>
                                  <option value="PRIVATE">Private</option>
                                </select>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => {
                                  setOpenCreateBoardModal(false);
                                  setBoardName('');
                                  setBoardDesc('');
                                  setBoardPrivacy('PUBLIC');
                                }}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={createPinterestBoard}>Create Board</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      }
                    </>
                    : null
                  }
                </div>
                <div className="flex-item">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                    value={postStatus}
                    onChange={e => {
                      setImage(null)
                      setPostStatus(e.target.value)
                    }}
                  >
                    {/* <option selected>Open this select menu</option> */}
                    <option value="TEXT">Text</option>
                    <option value="IMAGE">Image</option>
                    <option value="VIDEO">Video</option>
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

    </>
  )
}
