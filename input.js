const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // setup interface to handle user input from stdin
  stdin.on("data", function (data) {
    if (data === '\u0003') {
      process.exit();
    }// add an else if u want
  else{
      process.stdout.write('.');
    }
    
  }); 
  return stdin;
};


module.exports = { setupInput }