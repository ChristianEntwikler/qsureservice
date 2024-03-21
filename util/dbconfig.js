const sequel = require("sequelize");

module.exports =
{
    dbconn : function(){
const sequels = new sequel(
    'surdb',
    'root',
    'Sysdev@123',
{
    host: 'localhost',
    dialect: 'mysql'
});

sequels.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) =>{
    console.log("unable to connect");
});
    return sequels;
    },

}

/* var mysql =require('mysql2');
var conn;
module.exports =
{
   dbconn : function(){
    conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Sysdev@123",
        database: "surdb"
    })

    conn.connect(function(err){
        if(err) throw err;
        console.log("Connection successful");
    })


    return conn;
},

 dbOnlyconns : function(){
     conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Sysdev@123"
    })

    conn.connect(function(err){
        if(err) throw err;
        console.log("Connection successful");
    })
    return conn;
} 

} */