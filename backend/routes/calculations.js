const express = require("express");
const router = express.Router(); //vytvoření instance routeru
const calculationsController = require("../controllers/calculationsController");

// POST endpoint pro uložení výpočtu
router.post("/calculate", calculationsController.saveCalculation); //„Když někdo pošle POST požadavek na /calculate, spustí se funkce saveCalculation z calculationsController.``

// GET endpoint pro načtení historie výpočtů
router.get("/history", calculationsController.getHistory);

module.exports = router; //exportuje objekt router tak, aby ho bylo možné použít v jiných souborech aplikace.
