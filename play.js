const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243",
  });

  conn.setEncoding("utf8");
   return conn;
};

console.log("Connecting ...");  

module.exports = {connect}




