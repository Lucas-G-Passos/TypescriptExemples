import { configDotenv } from "dotenv";
import mysql, { PoolOptions } from "mysql2/promise";
configDotenv();

const options:PoolOptions={
  host:process.env.DB_HOST,
  port:Number(process.env.DB_PORT),
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE,
  waitForConnections:true,
  connectionLimit:10,
}
const pool = mysql.createPool(options);


/*
const pool = mysql.createPool({
  host:process.env.DB_HOST,
  port:Number(process.env.DB_PORT),
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE,
  waitForConnections:true,
  connectionLimit:10,
});
*/
export default pool