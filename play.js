const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243",
  });

  // conn.on('connect', function () {
  //   console.log('client is connected to server.');
  // });
  // conn.on('connect', () => {
  //   conn.write('Name: KRV');
  // });
  conn.setEncoding("utf8");
  return conn;
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  // stdin.on('data', (key) => {
  //   process.stdout.write('.');
  // });
  stdin.on("data", function (data) {
    if (data === '\u0003') {
      process.exit();
    }
    
  }); 
// add an else if u want
  // else{
    //   process.stdout.write('.');
    // }


  return stdin;



};


 setupInput();
console.log("Connecting ...");

module.exports = { connect , setupInput }




