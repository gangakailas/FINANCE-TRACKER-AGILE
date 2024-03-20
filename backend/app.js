const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db/db");
// const authRoutes = require('./routes/auth');
const userRoutes=require("./routes/userRoutes")
const { readdirSync } = require("fs");
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

require("dotenv").config();

const PORT = process.env.PORT;

console.log('Before JSON parsing middleware');
app.use(express.json());
console.log('After JSON parsing middleware');
console.log('Before CORS middleware');
app.use(cors());
console.log('After CORS middleware');
//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
); 
// app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.use(notFound)
app.use(errorHandler)

db().catch((error) => console.error("Failed to connect to database:", error));

const server = () => {
  app.listen(PORT, () => {
    console.log("listening to port : ", PORT);
  });
};

server();
