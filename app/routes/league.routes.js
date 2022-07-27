const { Router } = require("express");
const router = Router();
const leaguesController = require("../controllers/league.controller");

router.get("/", leaguesController.findAll);

module.exports = router;