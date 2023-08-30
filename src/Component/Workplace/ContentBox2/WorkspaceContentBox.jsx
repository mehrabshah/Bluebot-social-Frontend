import './WorkspaceContentBox.css';
import React, { Component, useState } from 'react';
import axios from 'axios';


class WorkspaceContentBox extends Component {

  state = {
    token: '',
    isAuthenticatedUser: localStorage.getItem("UserId"),
    profileImageURL: '',
    fb_id: '',
    redirectUrl : '',
    isOpen : false,
    selectedAccount : 'null',
    tokenPage : '',
    pageId : '',
    text : '',
    file : 'null',
    accounts : [],
    twitterToken : '',
    consumerKey : '',
    consumerSecret : '',
    isTwitter : false,
    twitterText : '',
    tweet : false
  };


  fetchData = async () => {
    try {
      const responseAccount = await axios.post('http://localhost:8000/auth/get-account', { token: this.state.token });
      const data = responseAccount.data; // Use responseAccount.data directly
      console.log(data);
      this.setState({ accounts: data, isOpen: true });
    } catch (error) {
      console.error('account error', error);
    }
  };

  async componentDidMount() {
    // Load the Facebook SDK

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "http://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '727057952593031',
        cookie: true,
        xfbml: true,
        version: 'v12.0'
      });
    };
    try {
      console.log(localStorage.getItem("UserId"));
      const response = await axios.post('http://localhost:8000/auth/get-data', { userId: localStorage.getItem("UserId") });
      const profileImageURL = response.data.profileImageURL;
      const fb_id = response.data.id;
      this.setState({ profileImageURL: profileImageURL });
      console.log(fb_id);
      this.setState({ fb_id: fb_id });
      this.setState({token : response.data.token})
      console.log(response.data.token);

    }
    catch {
      console.error('Error fetching profile image');
    };

    //this.fetchData();

    axios.get(`http://localhost:8000/auth/twitter/getAccessToken/${this.state.isAuthenticatedUser}`)
      .then(response => {
        const accessTokenFromServer = response.data.twitterData.accessToken;
        const consumerKey = response.data.twitterData.consumerKey;
        const consumerSecret = response.data.twitterData.consumerSecret;
        console.log(response.data.twitterData);
        this.setState({twitterToken : accessTokenFromServer, consumerKey : consumerKey, consumerSecret : consumerSecret});
        
      })
      .catch(error => {
        console.error('Error fetching access token:', error);
      });

   
  }


  handleTweetSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/twitter/create-tweet', { text: this.state.twitterText , tokenTwitter : this.state.twitterToken });

      const data = await response.json();
      console.log('Tweet created:', data);
    } catch (error) {
      console.error('Error creating tweet:', error);
    }
  };


  initiateAuthTwitter = async () => {
  
    try {
      const apiResponse = await axios.post('http://localhost:8000/auth/twitter/request-token', {
        userId : localStorage.getItem("UserId"),
        consumerKey : this.state.consumerKey,
        consumerSecret : this.state.consumerSecret
      });
      this.setState({isTwitter : false, twitterToken : apiResponse.data.access_token});
      console.log(apiResponse.data);

    } catch (error) {
      console.error('Error:', error);
      // Handle error cases
    }
    
  };

  postData = async () => {
    console.log(this.state.pageId);
    console.log(this.state.tokenPage);


    const apiUrl = `https://graph.facebook.com/${this.state.pageId}/feed`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: this.state.text,
          access_token: this.state.tokenPage,
        }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error posting to Facebook:', error);
    }
  };
  

  handleLogin = () => {
    window.FB.login((response) => {
      if (response.authResponse) {
        const shortLivedToken = response.authResponse.accessToken;
        const userID = response.authResponse.userID;
        console.log(response.authResponse);

        this.exchangeForLongLivedToken(shortLivedToken, userID);
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'email,public_profile,pages_manage_posts,user_posts,pages_read_engagement,publish_to_groups' });
  }

  async exchangeForLongLivedToken(shortLivedToken, userID) {
    try {
      const response = await axios.post('http://localhost:8000/auth/save-token', { token: shortLivedToken, fb_id: userID, userId: this.state.isAuthenticatedUser });
      const longLivedToken = response.data.message;
      this.setState({ token: longLivedToken });
      alert('Token generated and saved successfully');
    } catch (error) {
      alert('Failed to generate long-lived token');
    }
  }




  render() {
    return (
      <div className="content-box w-100 mt-0">
        <div className="image-container p-md-4">
          <div>
          <div className="image-tile" onClick={this.handleLogin}>
            {this.state.profileImageURL ? (
              <>
              <img src={this.state.profileImageURL} alt="Image 1" className="content-image img-fluid" />
 
              </>
            ) : (
              <img src="./images/image1.png" alt="Image 1" className="content-image img-fluid" />
            )}

            <p className="image-description">Facebook</p>
          </div>
          <button onClick={this.fetchData}>Post Now</button>
          </div>
          <div>
          {this.state.isOpen && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: 'white', border: '1px solid black', zIndex: 1000 }}>
                   <select onChange={(e) => {
    const selectedAccount = this.state.accounts[e.target.value];
    this.setState({pageId: selectedAccount.id, tokenPage: selectedAccount.access_token});
}}>
    <option value="">Select an Account</option>
    {this.state.accounts.map((account, index) => <option key={account.id} value={index}>{account.name}</option>)}
</select>

                    {this.state.tokenPage && (
                        <div>
                            <input type="text" placeholder="Enter text" onChange={(e) => this.setState({text : e.target.value})} />
                            {/* <input type="file" onChange={(e) => this.setState({file : e.target.files[0]})} /> */}
                            <button onClick={this.postData}>Post</button>
                        </div>
                    )}
                </div>
            )}
      </div>

          <div className="image-tile">
            <img src='/images/image2.png' alt="Image 2" className="content-image img-fluid" />
            <p className="image-description">Pintrest</p>
          </div>

          <div className="image-tile">
            <img src='/images/image3.png' alt="Image 2" className="content-image img-fluid" />
            <p className="image-description">Youtube</p>
          </div>

          <div className="image-tile">
            <img src='/images/image4.png' alt="Image 2" className="content-image img-fluid" />
            <p className="image-description">TickTock</p>
          </div>

          <div className="image-tile">
            <img src='/images/image5.png' alt="Image 2" className="content-image img-fluid" />
            <p className="image-description">Google</p>
          </div>

          <div className="image-tile">
            <img src='/images/insta.png' alt="Image 2" className="content-image img-fluid" />
            <p className="image-description">instragram</p>
          </div>

          <div className="image-tile"  >
            <img src='/images/image7.png' alt="Image 2" className="content-image img-fluid" onClick={(e) => this.setState({isTwitter : true})} />
            <p className="image-description">Twiter</p>
            {this.state.twitterToken && (
              <>
               <button onClick={(e) => this.setState({tweet : true})}>Post Now</button>

               {this.state.tweet && (
                  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: 'white', border: '1px solid black', zIndex: 1000 }}>
                  
                  <input type="text" placeholder="Enter text" onChange={(e) => this.setState({twitterText : e.target.value})} />
                  {/* <input type="file" onChange={(e) => this.setState({file : e.target.files[0]})} /> */}
                  <button onClick={this.handleTweetSubmit}>Post</button>
                    
         
                 </div>
               
               )}
               </>
            )}
            {this.state.isTwitter && (
              <>
             
                 <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: 'white', border: '1px solid black', zIndex: 1000 }}>
        <div className="dialog-box">
          <input
            type="text"
            placeholder="API key"
            value={this.state.consumerKey}
            onChange={(e) => this.setState({consumerKey : e.target.value})}
          />
          <input
            type="text"
            placeholder="API secret Key"
            value={this.state.consumerSecret}
            onChange={(e) => this.setState({consumerSecret : e.target.value})}
          />
          <button onClick={this.initiateAuthTwitter}>Log In Now</button>
        </div>
        </div>
        </>
      )}
          </div>

          {/* { this.initiateAuthTwitter && <a href={this.state.redirectUrl}>Click here to authorize</a>} */}
          <div className="image-tile">
            <img src='/images/image7.png' alt="Image 2" className="content-image img-fluid" />
            <p className="image-description">LinkedIn</p>
          </div>
        </div>
        <button className='btn custom-buttonn mb-2 mb-md-4 next-button me-md-4 me-2'>Next</button>
      </div>
    );
  }
}


export { WorkspaceContentBox };
