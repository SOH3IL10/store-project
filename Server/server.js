const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51LbOO6KY6bxtJALy9nNbmfB3gy7z2owYU71DqKVXvxXkIeHqAiQmnjS98FOQGJUaIXDbLElxJr9QXvnwkFtBQyim00pKigjO8y');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const price = parseFloat((items * 100).toFixed(0));

  return price;
};

app.get('/payment-intents', async (req, res) => {

  const paymentIntents = await stripe.paymentIntents.list({
    limit: 10,
  });

  res.send(paymentIntents);
})

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items.price || 1),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));