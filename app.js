const express = require("express");
const route = require("./routes/web");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/", route);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
