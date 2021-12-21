const dotenv = require("dotenv");

const express = require("express");
const notes = require("./data/notes");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config({ path: "./.env" });
// const path = require("path");

// console.log(process.env.PORT);

require("./config/db");
// const DB = process.env.MONGO_URI;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log(`Connection successful`);
//   })
//   .catch((err) => console.log(`no connection`));

const app = express();

// connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running on PORT ${PORT}`));
