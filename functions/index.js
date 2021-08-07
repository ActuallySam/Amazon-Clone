const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('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')



//API


//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,      //submits your currency
        currency: "inr",
    });

    //OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});




//Listen commands
exports.api = functions.https.onRequest(app);


//Example endpoint
// http://localhost:5001/clone-1489d/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
