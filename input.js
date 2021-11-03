// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // setup interface to handle user input from stdin
  stdin.on("data", function (data) {

    if (data === '\u0003') {

      process.exit();

    }
    else if (data === '\u0077') {

      connection.write("Move: up");;

    } else if (data === '\u0061') {

      connection.write("Move: left");
    }
    else if (data === '\u0073') {


      connection.write("Move: down");
    }
    else if (data === '\u0064') {

      // process.stdout.write('d');
      connection.write("Move: right");
    } else if (data === 'g') {

      // process.stdout.write('d');
      connection.write("Say: hi Krv");
    }



  });
  return stdin;
};


module.exports = { setupInput }