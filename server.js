const express = require("express");
const app = express();
const PORT = 8000;

const doctors = {
    firstDoctor: {
        doctorRegeneration: 0,
        doctorIncarnation: 1,
        originalActor: "William Hartnell",
        otherActors: [
            "Richard Hurndall",
            "John Guilor",
            "Michael Jones",
            "David Bradley",
        ],
        seasons: 4,
        interestingFacts:
            "He originally traveled with his granddaughter Susan. He is the only Doctor that smoked. ",
        style: "He often appeared in a black frock coat, yellow tweed waistcoat, dark blue ascot tie, and tartan trousers; accessorized with a cape, scarf, monocle, and wooden cane.",
        companions: [
            "Susan Foreman",
            "Barbara Wright",
            "Ian Chesterton",
            "Vicki",
            "Steven Taylor",
            "Katarina",
            "Sara Kingdom",
            "Dodo Chaplet",
            "Polly",
            "Ben Jackson",
        ],
        image: "",
        episodeFirst: "An Unearthly Child",
        episodeLast: "The Tenth Planet",
        tenure: "1963-1966",
    },
    "patrick throughton": {
        doctorRegeneration: 1,
        doctorIncarnation: 2,
        originalActor: "Patrick Throughton",
        seasons: 2,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1966-1969",
    },
    "jon pertwee": {
        doctorRegeneration: 2,
        doctorIncarnation: 3,
        originalActor: "Jon Pertwee",
        seasons: 5,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1970-1974",
    },
    "tom baker": {
        doctorRegeneration: 3,
        doctorIncarnation: 4,
        originalActor: "Tom Baker",
        seasons: 7,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1974-1981",
    },
    "peter davison": {
        doctorRegeneration: 4,
        doctorIncarnation: 5,
        originalActor: "Peter Davison",
        seasons: 3,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1982-1984",
    },
    "colin baker": {
        doctorRegeneration: 5,
        doctorIncarnation: 6,
        originalActor: "Colin Baker",
        seasons: 2,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1984-1986",
    },
    "sylvester mccoy": {
        doctorRegeneration: 6,
        doctorIncarnation: 7,
        originalActor: "Sylvester McCoy",
        seasons: 3,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1987-1989",
    },
    "paul mcgann": {
        doctorRegeneration: 7,
        doctorIncarnation: 8,
        originalActor: "Paul McGann",
        seasons: "movie",
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1996",
    },
    "john hurt": {
        doctorRegeneration: 8,
        doctorIncarnation: undefined,
        originalActor: "John Hurt",
        seasons: "",
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2013",
    },
    "christopher eccleston": {
        doctorRegeneration: 9,
        doctorIncarnation: 9,
        originalActor: "Christopher Eccleston",
        seasons: 1,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2005",
    },
    "david tennant": {
        doctorRegeneration: 10,
        doctorIncarnation: 10,
        originalActor: "David Tennant",
        seasons: 3,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2005-2010",
    },
    "matt smith": {
        doctorRegeneration: 12,
        doctorIncarnation: 11,
        originalActor: "Matt Smith",
        seasons: 3,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2010-2013",
    },
    "peter capaldi": {
        doctorRegeneration: 13,
        doctorIncarnation: 12,
        originalActor: "Peter Capaldi",
        seasons: 3,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2014-2017",
    },
    "jodie whittaker": {
        doctorRegeneration: 14,
        doctorIncarnation: 13,
        originalActor: "Jodie Whittaker",
        seasons: 3,
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2018-2022",
    },
    "ncuti gatwa": {
        doctorRegeneration: 15,
        doctorIncarnation: 14,
        originalActor: "Ncuti Gatwa",
        seasons: "unknown",
        interestingFacts: "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "forthcoming",
    },
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:doctorName", (req, res) => {
    const doctorName = req.params.doctorName.toLowerCase();

    if (doctors[doctorName]) {
        res.json(doctors[doctorName]);
    } else {
        res.json(doctors["unknown"]);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The TARDIS is now running on ${PORT}! Betta Call The Docta!`);
});
