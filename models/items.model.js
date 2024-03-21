const {DataTypes} = require("sequelize");
var con = require("../util/dbconfig.js");
var conn = con.dbconn();

const itemsModel = conn.define('items',{
    id : {
        type: DataTypes.INTEGER,
        autoincrement : true,
        primaryKey : true,
    },
    shopid : {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    name : {
        type: DataTypes.STRING,
        allowNull : false,
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    qty : {
        type : DataTypes.INTEGER,
        allowNull : true,
    },
    amt : {
        type: DataTypes.STRING,
        allowNull : true,
    },
    discount : {
        type: DataTypes.INTEGER,
        allowNull : true,
    },
    apilink : {
        type : DataTypes.STRING,
        allowNull : true,
    },

});

conn.sync().then(() => {
    console.log("Table successfully created");
}).catch((err) => {
    console.log("Unable to create table");
});