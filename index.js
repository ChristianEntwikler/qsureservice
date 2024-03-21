const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
var con = require("../Qsureservice/util/dbconfig.js");
const clientModel = require("../Qsureservice/models/client.model.js");
//const clientRoute = require("../Qsureservice/routes/client.route.js");

var conn = con.dbconn();

var app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

clientModel.initialise(conn);

var port = process.env.port || 5000;

conn.sync().then(() =>{
   console.log("Client model successfully initialised");
   app.use("/client", require("../Qsureservice/routes/client.route.js"));

   app.listen(port, ()=>{
      console.log("server listening on port", port);
   });
}).catch((err) =>{
   console.log("Unable to initialise model", err)
});

