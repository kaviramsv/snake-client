const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let  conn=connect();

setupInput(conn);



conn.on('data', function (message) { // this is how we receive
  console.log(`Server says: ${message}`);
});

 conn.on('connect', function () {
    console.log('client is connected to server.');
  });
  conn.on('connect', () => {
    conn.write('Name: KRV');
  });

// con.on('connect', () => {
//   con.write('Move: up');
// });
// =====================================set time out
// let timer=0;
// for(let i=0;i<50;i++){
// con.on('connect', () => {  
//   setTimeout(()=>{
//     con.write('Move: up');
//   },
//   timer+=500);
// });
// }
// ==============================/
// let timer=0;

// con.on('connect', () => {  
//     setInterval(()=>{
//       con.write('Move: up');
//     },
//     timer+=200);
//   });

