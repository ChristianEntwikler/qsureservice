var clientModel = require("../models/client.model.js");

module.exports = {
createClient : (req, res) => {
    const {reqBody} = req;
    clientModel.addClient(reqBody).then((resp) =>{
      return res.status(200).json({
        status : true,
        data : resp.toJson(),
      });
    }).catch((err) =>{
        return res.status(500).json({
            status: false,
            error: err,
        });
    });
    },

    findAllClient : (req, res) =>
    {
        const {reqBody} = req;
        clientModel.findAllClient(reqBody).then((resp) =>
        {
            return res.status(200).json({
                status: true,
                data : resp,
            });
        }).catch((err) =>{
            return res.status(500).json({
                status : false,
                error : err,
            });
        });
    },
    findSingleClient : (req, res) =>{
        const {reqBody} = req;
        clientModel.findSingleClient(reqBody).then((resp) =>
        {
            return res.status(200).json({
                status: true,
                data: resp,
            });
        }).catch((err) =>{
            return res.status(500).json({
                status: true,
                error: err,
            });
        });
    },
}