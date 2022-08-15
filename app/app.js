require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const connection = require("./config/db");
const databaseHelper = require("./helpers/database.helper");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LOL Tournaments API",
            version: "1.0.0"
        },
    },
    apis: [`${path.join(__dirname, "./routes/*.routes.js")}`]
};

// Conectamos a la base de datos
connection();

// Carga inicial de la db
if (Number(process.env.RESET_DB)) {
    databaseHelper.resetDatabase();
}

// Creamos el servidor
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(require("./routes/index.routes"));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
app.use("/user", require("./routes/user.routes"));
app.use("/summoner", require("./routes/lolsummoner.routes"));
app.use("/tournament", require("./routes/tournament.routes"));
app.use("/league", require("./routes/league.routes"));

module.exports = app;