const {DataTypes} = require("sequelize");
var con = require("../util/dbconfig.js");
var conn = con.dbconn();

const custfreqModel = conn.define('custfreq', {
    id : {
        type: DataTypes.INTEGER,
        autoincrement : true,
        primaryKey : true,
    },
    userdevice : {
        type: DataTypes.STRING,
        allowNull : false,
    },
    itemid : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

conn.sync().then(() =>{
    console.log("Table successfully created");
}).catch((err) =>{
    console.log("Unable to create table");
});