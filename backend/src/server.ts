const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require("connect-mongo");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
app.use("/files", express.static("files"));
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
const SECRET_KEY =
  "72f3f4552c8244bd56e74c93d2e3b7b7a23e8d1f08c2c44ff7a7b8f21dff24e3";
//Session---------------------------

const jwt = require("jsonwebtoken");
const generateToken = (payload, expiresIn = "1d") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
};
module.exports = { generateToken, verifyToken };

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

require("./pdfDetails.ts");
const PdfSchema = mongoose.model("PdfDetails");
app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  const dateAtUpload = Date.now();
  const user = req.body.user;
  console.log("Request body: ", req.body);
  try {
    await PdfSchema.create({
      title: title,
      pdf: fileName,
      uploadedAt: dateAtUpload,
      user: user,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

require("./userDetails.ts");
const UserSchema = mongoose.model("UserDetails");
app.post("/create-user", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserSchema.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("User", user);
    const hashedPassword = await bcrypt.hash(password, 10);
    const isPasswordValid = await bcrypt.compare(hashedPassword, user.password);
    if (isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/get-files", authenticateToken, async (req, res) => {
  const currentUser = req.user.id;
  try {
    const data = await PdfSchema.find({ user: currentUser });
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/session", (req, res) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
