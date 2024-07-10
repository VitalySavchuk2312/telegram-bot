const express = require("express");
const { handler } = require("./controller");
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());
app.post("*", async (req, res) => {
  console.log(req.body);
  res.send(await handler(req));
});
app.get("*", async (req, res) => {
  res.send("Hello get");
});

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on PORT " + PORT);
});
