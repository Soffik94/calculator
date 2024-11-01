const mongoose = require("mongoose");

// Definice schématu pro výpočty
const calculationSchema = new mongoose.Schema({
  expression: { type: String, required: true }, // Výraz, který uživatel zadal (např. "2 + 2")
  result: { type: Number, required: true }, // Výsledek výpočtu (např. 4)
  date: { type: Date, default: Date.now }, // Datum a čas uložení výpočtu
});

// Vytvoření a export modelu z definovaného schématu
module.exports = mongoose.model("Calculation", calculationSchema);
