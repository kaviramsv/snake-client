const net = require('net');
const port = 14740;

const configObj = {
  port: 50541,
  host: "165.227.47.243",
};

const client = net.createConnection(configObj);

client.on('connect',function(){
console.log('client is connected to server.');
});

client.on('data', function(message){ // this is how we receive
console.log(`Server says: ${message}`);
});