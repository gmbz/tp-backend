const League = require("../models/League");

exports.findAll = async (req, res) => {
    try {
        const leagues = await League.find();

        res.status(200).json(leagues);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}