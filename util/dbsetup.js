var con = require('./dbconfig.js');
var futil = require('./fileutil.js')

var conn;
conn = con.dbOnlyconns();
    var qry = futil.filedata('../dbscript.sql');
    if(qry!=null)
    {
    conn.query(qry, function(err, res){
        if(err) throw err;
        console.log("Database successfully created");
    });
}
    conn.end();
