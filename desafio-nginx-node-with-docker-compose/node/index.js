const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
})

let queryResult;

connection.connect(err =>{
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO pessoa (nome) VALUES ('Plinio Luiz3')";
  connection.query(sql, err => {
    connection.query("SELECT * FROM pessoa", (err, result) => {
      if (err) throw err;
      queryResult = JSON.stringify(result);
    });
    connection.end()
    if (err) throw err;
    console.log("1 record inserted");
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.get('/', (req, res) => {
  res.send(`<h1>Full Cycle Rocks!!</h1>
            <h2>Pessoas: ${queryResult}</h2>`)
})