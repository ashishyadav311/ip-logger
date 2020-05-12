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
  
    if(req.url == '/meeting'){
      res.writeHead('301', {
          'Location': 'https://us04web.zoom.us/j/74873997928?pwd=YlZ3N29rb1pCVGZEMHhvcmJ2em4rZz09'
      });
      res.end();
    }else{
        res.send("");
    }

});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("server running on" + port);
}); //the server object listens on port 8080
