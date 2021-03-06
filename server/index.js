const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51JzCb3AWvg3c0gVmfOm8iER2i1sKlqRwntsQt1ofdAezmOEemThjB6LY3MqqucpkIjTavO33hzgB25WoGsTTrJDR00LHx74eqp");

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3002" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  // you can get more data to find in a database, and so on
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "MXN",
      description: "Compra en guajalotas App",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);

    return res.status(200).json(payment);
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});