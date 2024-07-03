const express = require("express");
const cors = require("cors");
const filmsTab = require("./films");

const app = express();

const serverPort = 3310;

app.use(cors("*"));

app.get("/", (req, res) => {
    res.send("Hello Blibli");
});

app.get("/films", (req,res) => {
    res.json(filmsTab);
});

app.get("/films/:id", (req, res) => {
    const filmsId = parseInt(req.params.id)
    console.info(filmsId);
    const films = filmsTab.find((e) => e.id === filmsId);
    console.info(films);
    res.json(films);
});

app.listen(serverPort, () => {
    console.info(`http://localhost:${serverPort}`);
});