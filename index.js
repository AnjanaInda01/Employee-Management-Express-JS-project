/// nodemon dgnn one 
require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// })
const employeeRoutes = require("./router/employee-routes");

app.use("/api/v1/employee",employeeRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
