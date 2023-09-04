import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './WorkspaceContentBox.css';

function WorkspaceContentBox() {
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

  // useEffect(() => {
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

    // Load the Facebook SDK
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

    const fetchUserData = async () => {
      try {
        console.log(localStorage.getItem('UserId'));
        const response = await axios.post('http://localhost:8000/auth/get-data', { userId: localStorage.getItem('UserId') });
        const profileImageURL = response.data.profileImageURL;
        const fb_id = response.data.id;
        setProfileImageURL(profileImageURL);
        console.log(fb_id);
        setFbId(fb_id);
        setToken(response.data.token);
        console.log(response.data.token);
      } catch {
        console.error('Error fetching profile image');
      }
    };

    fetchUserData();

    axios
      .get(`http://localhost:8000/auth/twitter/getAccessToken/${isAuthenticatedUser}`)
      .then((response) => {
        const accessTokenFromServer = response.data.twitterData.accessToken;
        const consumerKey = response.data.twitterData.consumerKey;
        const consumerSecret = response.data.twitterData.consumerSecret;
        console.log(response.data.twitterData);
        setTwitterToken(accessTokenFromServer);
        setConsumerKey(consumerKey);
        setConsumerSecret(consumerSecret);
      })
      .catch((error) => {
        console.error('Error fetching access token:', error);
      });

    fetchData();
  // }, [token, isAuthenticatedUser]);

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

  const handleLogin = () => {
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

  return (
    <div className="content-box w-100 mt-0">
      <div className="image-container p-md-4">
        <div>
          <div className="image-tile" onClick={handleLogin}>
            {profileImageURL ? (
              <>
                <img src={profileImageURL} alt="Image 1" className="content-image img-fluid" />
              </>
            ) : (
              <img src="./images/image1.png" alt="Image 1" className="content-image img-fluid" />
            )}

            <p className="image-description">Facebook</p>
          </div>
          <button onClick={fetchData}>Post Now</button>
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

        <div className="image-tile">
          <img src="/images/image2.png" alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">Pintrest</p>
        </div>

        <div className="image-tile">
          <img src="/images/image3.png" alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">Youtube</p>
        </div>

        <div className="image-tile">
          <img src="/images/image4.png" alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">TickTock</p>
        </div>

        <div className="image-tile">
          <img src="/images/image5.png" alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">Google</p>
        </div>

        <div className="image-tile">
          <img src="/images/insta.png" alt="Image 2" className="content-image img-fluid" />
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
                  border: '1px solid black',
                  zIndex: 1000,
                }}
              >
                <div className="dialog-box">
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
                  <button onClick={initiateAuthTwitter}>Log In Now</button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="image-tile">
          <img src="/images/image7.png" alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">LinkedIn</p>
        </div>
      </div>
      <button className="btn custom-buttonn mb-2 mb-md-4 next-button me-md-4 me-2">Next</button>
    </div>
  );
}

export { WorkspaceContentBox };
