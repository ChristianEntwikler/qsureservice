var express =require('express');
var app = express();

app.use(express.json());

const port = process.env.port || 5000;
app.listen(port, function(){})

app.get('/finda', function(req, res){
    var stat = {"status":"valid"};
    res.send(stat);
})


