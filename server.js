const express = require("express");
const app = express();
const PORT = 8000;

const doctors = {
    "firstdoctor": {
        doctorRegeneration: 0,
        doctorIncarnation: 'First Doctor',
        originalActor: "William Hartnell",
        seasons: 4,
        interestingFacts:
            "He originally traveled with his granddaughter Susan. He is the only Doctor that smoked. Actors that also portrayed the First Doctor include: Richard Hurndall, John Guilor, Michael Jones, and David Bradley.",
        style: "He often appeared in a black frock coat, yellow tweed vest, dark blue ascot tie, and tartan pants; accessorized with a cape, scarf, monocle, and wooden cane.",
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
        quote: "",
    },
    "seconddoctor": {
        doctorRegeneration: 1,
        doctorIncarnation: "Second Doctor",
        originalActor: "Patrick Throughton",
        seasons: 3,
        interestingFacts: "The Second Doctor had a more childlike personality than the First Doctor. His regeneration into the Third Doctor was forced by the Time Lords as punishment for breaking the laws of non-interference",
        style: "He often appeared in a a large coat, houndstooth pants, suspenders, blue collared button-up shirt, and bow tie held on with a safety pin.",
        companions: ['Polly', 'Ben Jackson', 'Jamie McCrimmon', 'Victoria Waterfield', 'Zoe Heriot'],
        image: "",
        episodeFirst: "The Power of the Daleks",
        episodeLast: "The War Games",
        tenure: "1966-1969",
        quote: "",
    },
    "thirddoctor": {
        doctorRegeneration: 2,
        doctorIncarnation: "Third Doctor",
        originalActor: "Jon Pertwee",
        seasons: 5,
        interestingFacts: "The Third Doctor was the the first to be seen in color. He was also the only classic doctor to not face the Cybermen during his seasons.",
        style: "He often appeared in a ruffled shirt, a velvet jacket, and cape.",
        companions: ["Liz Shaw", "Jo Grant", "Sarah Jane Smith"],
        image: "",
        episodeFirst: "Spearhead from Space",
        episodeLast: "Planet of the Spiders",
        tenure: "1970-1974",
        quote: "",
    },
    "fourthdoctor": {
        doctorRegeneration: 3,
        doctorIncarnation: "Fourth Doctor",
        originalActor: "Tom Baker",
        seasons: 7,
        interestingFacts: "The Fourth Doctor was the first doctor to travel alone. His story lines were strongly based in the science fiction horror genre.",
        style: "He often appeared in a frock coat, vest, wide-brimmed fedora, and an extremely long multi-colored scarf",
        companions: ['Sarah Jane Smith', 'Harry Sullivan', 'Leela', 'K-9', 'Romana', 'Adric', 'Nyssa', 'Tegan Jovanka'],
        image: "",
        episodeFirst: "Robot",
        episodeLast: "Logopolis",
        tenure: "1974-1981",
        quote: "",
    },
    "fifthdoctor": {
        doctorRegeneration: 4,
        doctorIncarnation: "Fifth Doctor",
        originalActor: "Peter Davison",
        seasons: 3,
        interestingFacts: "The Fourth Doctor's regeneration into the Fifth Doctor was difficult, and almost failed. His TARDIS crashed into the Tenth Doctors TARDIS creating a paradox and potential black hole. ",
        style : "He often appeared in a cream frock coat with a stalk of celery on the left lapel; red, tan, white striped pants; a sweater vest, a shirt with red question marks on the collar, and a Panama hat",
        companions: ['Adric', 'Tegan Javanka', 'Vislor Turlough', 'Kamelion', 'Peri Brown'],
        image: "",
        episodeFirst: "Castrovalva",
        episodeLast: "The Caves of Androzani",
        tenure: "1982-1984",
        quote: "",
    },
    "sixthdoctor": {
        doctorRegeneration: 5,
        doctorIncarnation: "Sixth Doctor",
        originalActor: "Colin Baker",
        seasons: 3,
        interestingFacts: "Due to Doctor Who having an 18 month hiatus in 1986, the actual circumstances and cause of the Sixth Doctor's regeneration has never been seen on-screen. ",
        style : "He often appeared in a multi-colored and patterned coat, a white shirt with red question marks on the collar, a yellow pants, and varying colored ties and vests.",
        companions: ['Peri Brown, Mel Bush'],
        image: "",
        episodeFirst: "The Twin Dilemma",
        episodeLast: "The Trial of a Time Lord",
        tenure: "1984-1986",
        quote: "",
    },
    "seventhdoctor": {
        doctorRegeneration: 6,
        doctorIncarnation: "Seventh Doctor",
        originalActor: "Sylvester McCoy",
        seasons: 3,
        interestingFacts: "The Seventh Doctors personalty changed drastically during the season, from charming and easygoing to devious and calculating.",
        style : "He often appeared in an ivory jacket with a pocket watch in the top left pocket and a paisley scarf under the collar; a plain white shirt and paisley tie; a tan sweater vest with green zig-zags and red question marks; plaid tweed pants; a Panama hat with an upturned brim; a black umbrella with a red question mark-shaped handle.",
        companions: ['Mel Bush', 'Ace'],
        image: "",
        episodeFirst: "Time and the Rani",
        episodeLast: "Survival",
        tenure: "1987-1989",
        quote: "",
    },
    "paul mcgann": {
        doctorRegeneration: 7,
        doctorIncarnation: "Eight Doctor",
        originalActor: "Paul McGann",
        seasons: "movie",
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "1996",
        quote: "",
    },
    "john hurt": {
        doctorRegeneration: 8,
        doctorIncarnation: "War Doctor",
        originalActor: "John Hurt",
        seasons: "",
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2013",
        quote: "",
    },
    "christopher eccleston": {
        doctorRegeneration: 9,
        doctorIncarnation: 'Ninth Doctor',
        originalActor: "Christopher Eccleston",
        seasons: 1,
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2005",
        quote: "",
    },
    "david tennant": {
        doctorRegeneration: 10,
        doctorIncarnation: "Tenth Doctor",
        originalActor: "David Tennant",
        seasons: 3,
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2005-2010",
        quote: "",
    },
    "matt smith": {
        doctorRegeneration: 12,
        doctorIncarnation: 'Eleventh Doctor',
        originalActor: "Matt Smith",
        seasons: 3,
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2010-2013",
        quote: "",
    },
    "peter capaldi": {
        doctorRegeneration: 13,
        doctorIncarnation: "Twelfth   Doctor",
        originalActor: "Peter Capaldi",
        seasons: 3,
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2014-2017",
        quote: "",
    },
    "jodie whittaker": {
        doctorRegeneration: 14,
        doctorIncarnation: "Thirteenth Doctor",
        originalActor: "Jodie Whittaker",
        seasons: 3,
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "2018-2022",
        quote: "",
    },
    "ncuti gatwa": {
        doctorRegeneration: 15,
        doctorIncarnation: "Fourteenth Doctor",
        originalActor: "Ncuti Gatwa",
        seasons: "unknown",
        interestingFacts: "",
        style : "",
        companions: [],
        image: "",
        episodeFirst: "",
        episodeLast: "",
        tenure: "forthcoming",
        quote: "",
    },
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:doctorName", (req, res) => {
    const doctorName = req.params.doctorName.toLowerCase();
    console.log(doctorName)
    console.log(doctors[doctorName])
    if (doctors[doctorName]) {
        res.json(doctors[doctorName]);
    } else {
        res.json(doctors["unknown"]);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The TARDIS is now running on ${PORT}! Betta Call The Docta!`);
});
