const express = require("express");
const app = express();

//create a server object:
// app.get("/", function(req, res) {
//   res.write("Hello World!..."); //write a response to the client
//   res.end(); //end the response
// });

app.use((req, res) => {
  let ip = (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  ).split(",")[0];
  if (ip.substr(0, 7) === "::ffff:") {
    ip = ip.substr(7);
  }
  console.log(ip, "@@@@@@ ip @@@@@@@@", req.url);
  res.send("");
});

app.use((req, res) => {
  if(req.url == '/temp')
    res.writeHead('301', {
        'Location': 'https://www.geeksforgeeks.org/write-from-home-challenge-technical-content-writing-event-by-geeksforgeeks/'
    });
    res.end();
});


var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("server running on" + port);
}); //the server object listens on port 8080
