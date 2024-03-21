const clientController = require("../controllers/clients.controller.js");

const router = require("express").Router();

router.get("/fecthall", clientController.findAllClient);
router.get("/fetchdetails/:id", clientController.findSingleClient);

router.post("/create", clientController.createClient);

module.exports = router;