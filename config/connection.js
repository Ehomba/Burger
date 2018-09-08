// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b477669d2d7c97",
  password: "1212950f",
  database: "heroku_d6192576dda3e9b"
});

// mysql://b477669d2d7c97:1212950f@us-cdbr-iron-east-01.cleardb.net/heroku_d6192576dda3e9b?reconnect=true

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;