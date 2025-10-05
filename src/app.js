// Express importieren
const express = require("express");

// dotenv laden
require("dotenv").config();

// CORS Aktivieren, damit Frontend auf die API zugreifen kann
const cors = require("cors");

// Body-Parser Middleware
const app = express();
app.use(express.json());
app.use(cors());

// Datenbank importieren

const { sequelize } = require("./models/User");

// Routen importieren 

const userRoutes = require("./routes/userRoutes");

// Middleware für Routes

app.use("/api/users", userRoutes); // Alle User Routen Starten

// Server starten

const PORT =process.env.PORT || 3000;
app.listen(PORT, async () => {
    try {
        await sequelize.sync(); //Datenbank Tabellen werden erstellt
        console.log(`Server läuft auf Port ${PORT}`);
    } catch (error) {
        console.error("Datenbank-Verbindungsfehler:", error);
    }
});