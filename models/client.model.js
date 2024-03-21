const {DataTypes} = require('sequelize');
//var con = require('../util/dbconfig.js');
//var conn = con.dbconn()

const clientModel = //conn.define('clients',
{
    id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    repname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobileno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}
//)
;

/* conn.sync().then(() => {
    console.log("table created successufully");
}).catch((err) =>{
    console.log("unable to create table");
}); */

module.exports = {
    initialise : (Seq) => {
        this.model = Seq.define('clients', clientModel);
    },
    addClient : (client) => {
        return this.model.create(client);
    },
    removeClient : (qery) => {
        return this.model.destroy({
            where : qery
        });
    },
    findAllClient : (qery) => {
        return this.model.findAll({
            where : qery
        });
    },
    updateClient: (qery, updateData) => {
        return this.model.update(updateData,{
            where : qery
        });
        
    },
    findSingleClient : (qery) => {
        return this.model.findOne({
            where : qery
        });
    },

}

