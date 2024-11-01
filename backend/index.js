require("dotenv").config({ path: "./config/.env" }); //přidáváme ho, protože chceme uložit URI k databázi do dotenv tak, aby nebylo vidět na githubu
const express = require("express"); //načtení express knihovny
const mongoose = require("mongoose"); //načtení mongoose knihovny
const cors = require("cors"); //CORS nám umožňuje komunikaci mezi odděleným frontendem a backendem (různé porty)
const Calculation = require("./models/Calculation");

const app = express(); //vytvoření express aplikace
const PORT = 3001;

app.use(express.json()); // server umí pracovat s JSON daty, což je důležité pro metody jako POST, PATCH apod.
app.use(cors()); //do vnitřních závorek je možné doplnit konkrétní frontend url které bude mít přístup

//Připojení k databázy:
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to database done"))
  .catch((err) => console.log("Connection to database error", err));

//základní trasa, ověření funkčnosti serveru a napojení na databázi:
app.get("/", (req, res) => {
  res.send("Server running and connected to database");
});

//spuštění serveru:
app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});
