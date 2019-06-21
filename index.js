const {serverPort, twilioEndPoint, twilioAuthToken, trialPhoneNumber, receiverPhoneNumber} = require('./config');
const express = require('express');
const client = require('twilio')(twilioEndPoint, twilioAuthToken);
const VoiceResponse = require('twilio').twiml.VoiceResponse;

// const app = express();

// app.get('/', (req, res, next) => {
//     const Response = new VoiceResponse();

//     Response.say("Hey Daddy This is Ty Trying out my new Phone Number App");

//     res.send(Response.toString());

//     next();
// });

// app.listen(serverPort, () => {
//     console.log(`Server is running on port ${serverPort}`);
// });

client.calls.create({
    url: 'https://demo.twilio.com/welcome/voice/',
    to: receiverPhoneNumber,
    from: trialPhoneNumber
}).then((call) => {
    console.log(`Call accepted! Call SID: ${call.sid}`);
}).catch((err) => {
    console.log(`Error making the phone call:`, err);
});