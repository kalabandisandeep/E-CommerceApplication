const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'mydb'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Simple Backend!');
});

app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

