const express = require("express");
const router = express.Router();
const seriesController = require("../controllers/seriesController");

router.post("/series", seriesController.createSerie);
router.get("/series", seriesController.getSeries);
router.put("/series/:id", seriesController.updateSerie);
router.delete("/series/:id", seriesController.deleteSerie);

module.exports = router;
