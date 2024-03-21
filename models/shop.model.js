const {DataTypes} = require("sequelize");
var con = require("../util/dbconfig.js");
var conn = con.dbconn();

const shopsModel = conn.define('shops',    
{
   id: {
    type : DataTypes.INTEGER,
    autoincrement : true,
    primaryKey : true,
    },
    clientid: {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    repname : {
        type: DataTypes.STRING,
        allowNull : true,
    },
    address : {
        type:DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type : DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type : DataTypes.STRING,
        allowNull : false,
    },

});

conn.sync().then(() => {
    console.log("Table successfully created");
}).catch((err) => {
    console.log("Unable to create table");
});