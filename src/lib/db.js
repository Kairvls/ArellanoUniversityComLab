import 'server-only';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'kaisuan',
  database: 'computer_lab',
});

export default db;
