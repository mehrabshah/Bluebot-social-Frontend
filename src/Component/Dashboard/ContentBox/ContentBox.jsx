import React from 'react'
import './ContentBox.css'
import axios from 'axios'
import { useEffect } from 'react'
import BASE_URL from '../../../services/api'
const ContentBox = () => {
  const userId = localStorage.getItem('UserId')
  const clientId = '86zepiufo3et2u'
  const redirectUri = 'http://localhost:3000/dashboard'
  const handleLogin = () => {
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&scope=profile%20email%20openid%20w_member_social&redirect_uri=${redirectUri}`
  }
  const urlSearchParams = new URLSearchParams(window.location.search)
  const code = urlSearchParams?.get('code')
  console.log({code});
  useEffect(() => {
    if (code) {
      const exchangeCodeForAccessToken = async () => {
        const requestBody = {
          code: code,
          userId: userId,
        }
        try {
          const response = await axios.post(`${BASE_URL}/auth/linkedin/create-linkedin-user`, requestBody)
          const res = response?.data
          console.log(res)
        } catch (error) {
          console.error('Error exchanging code for access token:', error)
        }
      }

      exchangeCodeForAccessToken()
    }
    // eslint-disable-next-line
  }, [code])
  return (
    <div className="content-box">
      <div className="header-content-box p-md-4">
        <h2 className="get-started-heading">Get Started</h2>
        <p>Connect your social media Profile to publish post</p>
      </div>

      <div className="image-container p-md-4 align-items-center">
        <div className="image-tile">
          <img src="./images/image1.png" alt="Image1" className="content-image" />
          <p className="image-description">Facebook</p>
        </div>

        <div className="image-tile">
          <img src="/images/image2.png" alt="Image2" className="content-image" />
          <p className="image-description">Pintrest</p>
        </div>

        <div className="image-tile">
          <img src="/images/image3.png" alt="Image3" className="content-image" />
          <p className="image-description">Youtube</p>
        </div>

        <div className="image-tile">
          <img src="/images/image4.png" alt="Image4" className="content-image" />
          <p className="image-description">TickTock</p>
        </div>

        <div className="image-tile">
          <img src="/images/image5.png" alt="Image5" className="content-image" />
          <p className="image-description">Google</p>
        </div>

        <div className="image-tile">
          <img src="/images/insta.png" alt="Image6" className="content-image" />
          <p className="image-description">instragram</p>
        </div>

        <div className="image-tile">
          <img src="/images/image7.png" alt="Image7" className="content-image" />
          <p className="image-description">Twiter</p>
        </div>
        <div className="image-tile" onClick={handleLogin}>
          <img src="/images/image8.png" alt="Image8" className="content-image1 mb-2" />
          <p className="image-description">LinkedIn</p>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
