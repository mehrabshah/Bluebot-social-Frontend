import React, { useState } from 'react'
import './ContentBox.css'
import axios from 'axios'
import { useEffect } from 'react'

import BASE_URL from '../../../services/api'
const ContentBox = () => {
  const userId = localStorage.getItem('UserId')
  const clientId = '86zepiufo3et2u'
  const redirectUri = 'http://localhost:3000/dashboard'

  const pinterestAppID = '1490810';
  const pinterestAppSecret = '30ad32a1f376f604ae9c762926426b69000654b0';

  const tiktokClientKey = 'awkgprboqtg9y4g8';

  const [accessToken, setAccessToken] = useState('');

  // Linkedin Login

  const handleLogin = (socialPlatform) => {

    switch (socialPlatform){
      case 'LinkedIn':
        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&scope=profile%20email%20openid%20w_member_social&redirect_uri=${redirectUri}`;
        localStorage.setItem('socialPlatform', 'LinkedIn');
        break;
      case 'Pinterest':
        window.location.href = `https://www.pinterest.com/oauth/?client_id=${pinterestAppID}&redirect_uri=${redirectUri}&response_type=code&scope=boards:read,pins:read,boards:write,pins:write,user_accounts:read&`;
        localStorage.setItem('socialPlatform', 'Pinterest');
        break;
      case 'Tiktok':
        window.location.href = `https://www.tiktok.com/v2/auth/authorize/?client_key=${tiktokClientKey}&response_type=code&scope=user.info.basic&redirect_uri=${redirectUri}&state=<state>`;
        localStorage.setItem('socialPlatform', 'Tiktok');
        break;
      default:
        console.log("Not any social platform")

    }

  }
  const [linkedInImageURL, setLinkedInImageURL] = useState('/images/image8.png');
  const [pinterestImageURL, setPinterestImageURL] = useState('/images/image2.png');
  const [tiktokImageURL, setTiktokImageURL] = useState('/images/image4.png');
  const [linkedInBorderRadius, setlinkedBorderRadius] = useState('0px');

  const urlSearchParams = new URLSearchParams(window.location.search)
  const code = urlSearchParams?.get('code')
  console.log({ code });


  useEffect(() => {

    // Get the profile image from local storage if logged in already
    const linkedInProfileImage = localStorage.getItem("linkedInProfileImage");
    const pinterestProfileImage = localStorage.getItem("pinterestProfileImage");
    const tiktokProfileImage = localStorage.getItem("tittokProfileImage");

    if (linkedInProfileImage && linkedInProfileImage !== "undefined")
    {
      setLinkedInImageURL(linkedInProfileImage);
    }
    if (pinterestProfileImage && pinterestProfileImage !== "undefined")
    {
      setPinterestImageURL(pinterestProfileImage);
    }
    if (tiktokProfileImage && tiktokProfileImage !== "undefined")
    {
      setTiktokImageURL(tiktokProfileImage);
    }

    if (code) {
      const socialPlatform = localStorage.getItem('socialPlatform');
      const exchangeCodeForAccessToken = async () => {
        const requestBody = {
          code: code,
          userId: userId,
        }
        try {
          switch (socialPlatform) {
            case "LinkedIn":
              var response = await axios.post(`${BASE_URL}/auth/linkedin/create-linkedin-user`, requestBody);
              break;
            case "Pinterest":
              var response = await axios.post(`${BASE_URL}/auth/pinterest/create-pinterest-user`, requestBody)
              break;
            case "Tiktok":
              var response = await axios.post(`${BASE_URL}/auth/linkedin/create-tiktok-user`, requestBody);
              break;
            default:
              console.log("No Social Platform in Local Storage")
          }
          const res = response?.data
          console.log(res, "REPSONE HERE WITH PROFIle")

          switch (socialPlatform) {
            case "LinkedIn":
              localStorage.setItem("linkedInProfileImage", res.profilePicture);
              setLinkedInImageURL(res.profilePicture)
              break;
              case "Pinterest":
              localStorage.setItem("pinterestProfileImage", res.profilePicture);
              setPinterestImageURL(res.profilePicture)
              break;
              case "Tiktok":
              localStorage.setItem("tiktokProfileImage", res.profilePicture);
              console.log("Tiktok Selected")
              break;
            default:
              console.log("No Social Platform in Local Storage")
          }
          setlinkedBorderRadius('70px')
        } catch (error) {
          console.error('Error exchanging code for access token:', error)
        }
      }

      exchangeCodeForAccessToken()
    }
    // eslint-disable-next-line
  }, [code])
  /////////////////////////FB twitter/////////////////////////
  const [token, setToken] = useState('');
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(localStorage.getItem('UserId'));
  const [profileImageURL, setProfileImageURL] = useState('');
  const [fb_id, setFbId] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('null');
  const [tokenPage, setTokenPage] = useState('');
  const [pageId, setPageId] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState('null');
  const [accounts, setAccounts] = useState([]);
  const [twitterToken, setTwitterToken] = useState('');
  const [consumerKey, setConsumerKey] = useState('');
  const [consumerSecret, setConsumerSecret] = useState('');
  const [isTwitter, setIsTwitter] = useState(false);
  const [twitterText, setTwitterText] = useState('');
  const [tweet, setTweet] = useState(false);
  const fetchData = async () => {
    try {
      const responseAccount = await axios.post('http://localhost:8000/auth/get-account', { token });
      const data = responseAccount.data;
      console.log(data);
      setAccounts(data);
      setIsOpen(true);
    } catch (error) {
      console.error('account error', error);
    }
  };
  const postData = async () => {
    console.log(pageId);
    console.log(tokenPage);

    const apiUrl = `https://graph.facebook.com/${pageId}/feed`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          access_token: tokenPage,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error posting to Facebook:', error);
    }
  };
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'http://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

  window.fbAsyncInit = function () {
    window.FB.init({
      appId: '727057952593031',
      cookie: true,
      xfbml: true,
      version: 'v12.0',
    });
  };
  const handleLoginFb = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          const shortLivedToken = response.authResponse.accessToken;
          const userID = response.authResponse.userID;
          console.log(response.authResponse);

          exchangeForLongLivedToken(shortLivedToken, userID);
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'email,public_profile,pages_manage_posts,user_posts,pages_read_engagement,publish_to_groups' }
    );
  };
  const exchangeForLongLivedToken = async (shortLivedToken, userID) => {
    try {
      const response = await axios.post('http://localhost:8000/auth/save-token', { token: shortLivedToken, fb_id: userID, userId: isAuthenticatedUser });
      const longLivedToken = response.data.message;
      setToken(longLivedToken);
      alert('Token generated and saved successfully');
    } catch (error) {
      alert('Failed to generate long-lived token');
    }
  };

  const handleTweetSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/twitter/create-tweet', { text: twitterText, tokenTwitter: twitterToken });

      const data = response.data;
      console.log('Tweet created:', data);
    } catch (error) {
      console.error('Error creating tweet:', error);
    }
  };

  const initiateAuthTwitter = async () => {
    try {
      const apiResponse = await axios.post('http://localhost:8000/auth/twitter/request-token', {
        userId: localStorage.getItem('UserId'),
        consumerKey,
        consumerSecret,
      });
      setIsTwitter(false);
      setTwitterToken(apiResponse.data.access_token);
      console.log(apiResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  ///////////////////////////////////////////////
  return (
    <div className="content-box">
      <div className="header-content-box p-md-4">
        <h2 className="get-started-heading">Get Started</h2>
        <p>Connect your social media Profile to publish post</p>
      </div>

      <div className="image-container p-md-4 align-items-center">
        <div>
          <div className="image-tile" onClick={handleLoginFb}>
            {profileImageURL ? (
              <>
                <img src={profileImageURL} alt="Image 1" className="content-image img-fluid" />
              </>
            ) : (
              <img src="./images/image1.png" alt="Image 1" className="content-image img-fluid" />
            )}

            <p className="image-description">Facebook</p>
          </div>
          {/* <button onClick={fetchData}>Post Now</button> */}
        </div>
        <div>
          {isOpen && (
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                backgroundColor: 'white',
                border: '1px solid black',
                zIndex: 1000,
              }}
            >
              <select
                onChange={(e) => {
                  const selectedAccount = accounts[e.target.value];
                  setPageId(selectedAccount.id);
                  setTokenPage(selectedAccount.access_token);
                }}
              >
                <option value="">Select an Account</option>
                {accounts.map((account, index) => (
                  <option key={account.id} value={index}>
                    {account.name}
                  </option>
                ))}
              </select>

              {tokenPage && (
                <div>
                  <input type="text" placeholder="Enter text" onChange={(e) => setText(e.target.value)} />
                  <button onClick={postData}>Post</button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="image-tile" onClick={() => handleLogin("Pinterest")}>
          <img src={pinterestImageURL} style={{borderRadius:'4rem'}} alt="Image2" className="content-image" />
          <p className="image-description">Pinterest</p>
        </div>

        <div className="image-tile">
          <img src="/images/image3.png" alt="Image3" className="content-image" />
          <p className="image-description">Youtube</p>
        </div>

        <div className="image-tile" onClick={() => handleLogin("Tiktok")}>
          <img src={tiktokImageURL} alt="Image4" className="content-image" />
          <p className="image-description">TikTok</p>
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
          <img src="/images/image7.png" alt="Image 2" className="content-image img-fluid" onClick={(e) => setIsTwitter(true)} />
          <p className="image-description">Twiter</p>
          {twitterToken && (
            <>
              <button onClick={(e) => setTweet(true)}>Post Now</button>

              {tweet && (
                <div
                  style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    zIndex: 1000,
                  }}
                >
                  <input type="text" placeholder="Enter text" onChange={(e) => setTwitterText(e.target.value)} />
                  <button onClick={handleTweetSubmit}>Post</button>
                </div>
              )}
            </>
          )}
          {isTwitter && (
            <>
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '20px',
                  backgroundColor: 'white',
                  border: '1px solid gray',
                  borderRadius: '12px',
                  zIndex: 1000,
                }}
              >
                <div className="dialog-box d-flex justify-content-between flex-column align-items-center">
                  <h2>
                    Generate you api keys from the following link and enter them here
                  </h2>
                  <input
                    type="text"
                    placeholder="API key"
                    value={consumerKey}
                    onChange={(e) => setConsumerKey(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="API secret Key"
                    value={consumerSecret}
                    onChange={(e) => setConsumerSecret(e.target.value)}
                  />
                  <button className='custom-buttonn twitter-api-button' onClick={initiateAuthTwitter}>Log In Now</button>
                  <button className='custom-buttonn twitter-api-button' onClick={(e) => setIsTwitter(false)}>Close</button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="image-tile" onClick={() => handleLogin("LinkedIn")}>
          <img src={linkedInImageURL}  style={{borderRadius: linkedInBorderRadius}} alt="Image8" className="content-image1 mb-2" />
          <p className="image-description">LinkedIn</p>
        </div>
      </div>
    </div>
  )
}

export default ContentBox
