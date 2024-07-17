const express = require("express");
const cors = require("cors");
const filmsTab = require("./films");

const app = express();

const serverPort = 3310;

app.use(cors("*")); //middleware

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

app.get("/characters/:id", (req, res) => {
    const characterId = parseInt(req.params.id);
    let character;
    filmsTab.some(film => {
        character = film.characters.find((char) => char.id === characterId);
        return character;
    });
    res.json(character);
});

app.listen(serverPort, () => {
    console.info(`http://localhost:${serverPort}`);
});