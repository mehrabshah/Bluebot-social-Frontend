const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://shapito:shapito@cluster0.dsob3lq.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Model for saving tokens
const Token = mongoose.model('Token', {
    userToken: String,
    userID : String
});

// Route to save token to MongoDB
app.post('/save-token', async (req, res) => {
    const token = new Token({
        userToken: req.body.token,
        userID : req.body.userID
    });

    try {
        await token.save();
        res.status(200).send({ message: 'Token saved successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to save token' });
    }
});

// Route to exchange short-lived token for long-lived token
app.post('/generate-long-lived-token', async (req, res) => {
    const shortLivedToken = req.body.token;
    const appID = '727057952593031';
    const appSecret = 'dc4913beb4248e093c72ea8674e92656';

    try {
        const response = await axios.get(`https://graph.facebook.com/v12.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appID}&client_secret=${appSecret}&fb_exchange_token=${shortLivedToken}`);
        
        const longLivedToken = response.data.access_token;

        // Save the long-lived token to MongoDB
        const token = new Token({
            userToken: longLivedToken
        });
        await token.save();
        console.log(response);
        res.status(200).send({ message: 'Token saved successfully', token: longLivedToken });
    } catch (error) {
        res.status(500).send({ error: 'Failed to generate long-lived token' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
