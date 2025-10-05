// Logik für Registrierung & Login

const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Registrierung
const register = async (reg,res) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
    
        // User erstellen
        const user = await User.create({
            username,
            email,
            passwort: hashedPassword,
        });
        res.status(201).json({ message: "User erstellt!" , userId: user.id });
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, password } = res.body;

        //User suchen
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: "User nicht gefunden"});

        // Passwort vergleichen
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: "Passwort falsch "});
        // JWT erstellen
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login erfolgreich", token });
    }   catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login };


