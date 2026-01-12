/// nodemon dgnn one 


// const e = require("express");
const express = require("express");
const app = express();
// const mysql = require('mysql2') /// dn weda krnne mysql2 ,,, mysql wed krnne na
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// const connection = mysql.createConnection({  // express wala guide wla database integration wala mysql
//   host: 'localhost',
//   user: 'root',
//   password: 'Anjana1212@',
//   database: 'my_express_db'   // databases auto hadenne na hdgnn one..
// })
// connection.connect()

// app.post('/save',(req, res)=>{
//   const {name,age,salary} = req.body;
//     const query = 'INSERT INTO employee (name, age, salary) VALUES (?, ?, ?)'
//     connection.query(query,[name,age,salary],(err, results)=>{
//         if(err){
//             console.error(err)
//             res.status(500).send('Error saving data')
//             return
//         }
//     })
//     res.send('Data saved successfully')

// })
const employeeRoutes = require("./router/employee-routes");

app.use("/api/v1/employee",employeeRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
