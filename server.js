const express = require("express");
const app = express();
const PORT = 8000;

const doctors = {
    "william hartnell": {
        doctorRegeneration: 1,
        doctorNumber: 1,
        actorName: "William Hartnell",
        seasons: 4,
    },
    "patrick throughton": {
        doctorRegeneration: 2,
        doctorNumber: 2,
        actorName: "Patrick Throughton",
        seasons: 2,
    },
    "jon pertwee": {
        doctorRegeneration: 3,
        doctorNumber: 3,
        actorName: "Jon Pertwee",
        seasons: 5,
    },
    "tom baker": {
        doctorRegeneration: 4,
        doctorNumber: 4,
        actorName: "Tom Baker",
        seasons: 7,
    },
    "peter davison": {
        doctorRegeneration: 5,
        doctorNumber: 5,
        actorName: "Peter Davison",
        seasons: 3,
    },
    "colin baker": {
        doctorRegeneration: 6,
        doctorNumber: 6,
        actorName: "Colin Baker",
        seasons: 2,
    },
    "sylvester mccoy": {
        doctorRegeneration: 7,
        doctorNumber: 7,
        actorName: "Sylvester McCoy",
        seasons: 3,
    },
    "paul mcgann": {
        doctorRegeneration: 8,
        doctorNumber: 8,
        actorName: "Paul McGann",
        seasons: "2",
    },
    "john hurt": {
        doctorRegeneration: 9,
        doctorNumber: undefined,
        actorName: "John Hurt",
        seasons: "2",
    },
    "christopher eccleston": {
        doctorRegeneration: 10,
        doctorNumber: 9,
        actorName: "Christopher Eccleston",
        seasons: 1,
    },
    "david tennant": {
        doctorRegeneration: 11,
        doctorNumber: 10,
        actorName: "David Tennant",
        seasons: 3,
    },
    "matt smith": {
        doctorRegeneration: 13,
        doctorNumber: 11,
        actorName: "Matt Smith",
        seasons: 3,
    },
    "peter capaldi": {
        doctorRegeneration: 14,
        doctorNumber: 12,
        actorName: "Peter Capaldi",
        seasons: 3,
    },
    "jodie whittaker": {
        doctorRegeneration: 15,
        doctorNumber: 13,
        actorName: "Jodie Whittaker",
        seasons: 3,
    },
    unknown: {
        doctorNumber: 0,
        actorName: "unknown",
        seasons: "unknown",
    },
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:doctorName", (req, res) => {
    const doctorName = req.params.doctorName.toLowerCase();
    console.log(req.params.doctorName);
    if (doctors[doctorName]) {
        res.json(doctors[doctorName]);
    } else {
        res.json(doctors["unknown"]);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The TARDIS is now running on ${PORT}! Betta Call The Docta!`);
});
