const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    twilioEndPoint: process.env.ACCOUNT_SID,
    twilioAuthToken: process.env.AUTH_TOKEN,
    serverPort: process.env.PORT,
    trialPhoneNumber: process.env.TWILIO_TRIAL_PHONE_NUMBER,
    receiverPhoneNumber: process.env.TWILIO_RECEIVER_PHONE_NUMBER
};