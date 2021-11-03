const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243",
  });
   

   return conn;
};

console.log("Connecting ...");

const con=connect();
con.on('data', function(message){ // this is how we receive
  console.log(`Server says: ${message}`);
  });


