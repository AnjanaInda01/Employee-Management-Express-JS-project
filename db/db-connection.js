const mysql = require("mysql2");

const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Anjana1212@",
  database:"my_express_db",  // databases auto hadenne na hdgnn one..
});

connection.connect((err)=>{
  if(err){
    console.error("Database connection failed: ",err);
  }else{
    console.log("Mysql connected");
  }
});

module.exports = connection;

// let connection;

// function connectToDatabase() {
//   if (!connection) {
//     connection = mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "Anjana1212@",
//       database: "my_express_db", 
//     });
//   }
//   return connection;
// }

// module.exports = connectToDatabase;

//dotenv npm   ----> try this  for hardcoded database details
/// multer npm -----> file architecture
// jsonwebtoken npm
