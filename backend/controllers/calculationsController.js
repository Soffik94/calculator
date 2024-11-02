const Calculation = require("../models/Calculation"); // Načítá model Calculation, který obsahuje schéma pro ukládání a načítání dat z MongoDB.

// Funkce pro uložení výpočtu
exports.saveCalculation = async (req, res) => {
  //export exportuje funkci aby jí šlo použít v jiných souborech
  //exportuje se, aby mohla být použita jinde v aplikaci (např. v routeru calculations.js
  const { expression, result } = req.body; //destrukturizovaný request schéma požadavku tak, jak je definovaný v Calculation.js || expression je výraz a result jeho výsledek

  try {
    const newCalculation = new Calculation({ expression, result }); //vytvoří instanci modelu Calculation a přiřadí mu hodnoty z req.body
    await newCalculation.save(); // save je metoda mongoose, která uloží newCalculation do databáze
    res.status(201).json(newCalculation); //vrací kód 201 a uložený newCalculation
  } catch (error) {
    //provede se, při chybě v try
    res.status(500).json({ message: "Failed to save calculation", error }); //hlásí případné chyby serveru
  }
};

// Funkce pro načtení historie výpočtů
exports.getHistory = async (req, res) => {
  try {
    const calculations = await Calculation.find();
    res.status(200).json(calculations);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve history", error });
  }
};
