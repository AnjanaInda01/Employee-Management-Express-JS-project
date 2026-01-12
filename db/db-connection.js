const mysql = require("mysql2");

const connection = mysql.createConnection({
  // host:"localhost",
  // user:"root",
  // password:"Anjana1212@",
  // database:"my_express_db",  // databases auto hadenne na hdgnn one..
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err)=>{
  if(err){
    console.error("Database connection failed: ",err);
  }else{
    console.log("Mysql connected");
  }
});

module.exports = connection;



//dotenv npm   ----> try this  for hardcoded database details
/// multer npm -----> file architecture
// jsonwebtoken npm
