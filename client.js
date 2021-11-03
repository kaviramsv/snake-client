
const {connect} = require("./play.js");

const con=connect();
con.on('data', function(message){ // this is how we receive
  console.log(`Server says: ${message}`);
  });