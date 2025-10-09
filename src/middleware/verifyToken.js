// Middleware zum Überprüfen von JWT-Token in Request

const jwqt = require("jsonwebtoken");

// Middleware FUnktion
const verifyToken = (req, res, next) => {

    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ error: "Kein Token vorhanden"});
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Token ungültig"});
    }

    try {
        const decoded = jwqt.verify(token, process.env.JWT_SECRET);
    

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({ error: "Token ungültig oder abgelaufen"});
    }
};

module.exports = verifyToken;