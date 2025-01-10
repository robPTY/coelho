const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

//MongoDB connection ----------------
const mongoUrl =
  "mongodb+srv://robertoagueron:Blue251525@coelho.0pqzn.mongodb.net/?retryWrites=true&w=majority&appName=Coelho";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
//-----------------------------------

//Multer-----------------------------
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

//API Endpoints ---------------------
app.get("/", (req, res) => {
  res.send("Success.");
});

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
