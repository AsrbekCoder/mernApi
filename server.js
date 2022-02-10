const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/users");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const db = process.env.MB_DB;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((error) => {
    console.log("mondb not connected");
    console.log(error);
  });
app.use("/", router);

app.get("/", (req, res) => {
  res.send("hello asr");
});

const port = process.env.PORT || 5454;
app.listen(port, console.log(`server work on port ${port}`));
