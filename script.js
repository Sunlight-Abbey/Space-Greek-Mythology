

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("start");
const quiz = document.getElementById("quiz");

startBtn.addEventListener("click", function(){
    startScreen.classList.add("hidden");
    quiz.classList.remove("hidden");
})

let currentQuestion = 1;

let scores={
    Ares: 0,
    Hera: 0,
    Poseidon: 0,
    Demeter: 0,
    Aphrodite: 0,
    Hephaestus: 0,
    Athena: 0,
    Artemis: 0,
    Apollo: 0,
    Hermes: 0,
    Dionysus: 0,
    Hades: 0,
    Zeus:0
};

function nextQuestion() {
    document.getElementById("q" + currentQuestion).classList.add("hidden");

    currentQuestion++;

    if (currentQuestion > 5) {
        showResult();
        return;
    }

    document.getElementById("q" + currentQuestion).classList.remove("hidden");
}

function addScore(gods){
    for(let i=0; i<gods.length;i++){
        scores[gods[i]]++;
    }
}

const godData = {
    Ares: {
        description: "God of war. You are bold, strong, and act with courage, sometimes before thinking.",
        image: "myths/Ares.jpg",
        planet: "Mars",
        zodiac: "Aries",
        domain: "War, brutal combat"
    },

    Hera: {
        description: "Queen of the gods. You are elegant, loyal, and value relationships deeply.",
        image: "myths/hera.jpg",
        planet: "Moon or Venus",
        zodiac: "Cancer",
        domain: "Marriage, women, childbirth"
    },

    Poseidon: {
        description:"God of the sea. You are emotional, powerful, and deeply connected to your feelings.",
        image: "myths/poseidon.jpg",
        planet: "Neptune",
        zodiac: "Pisces",
        domain: "Sea, storms, horses"
    },

    Demeter: {
        description:"Goddess of harvest. You are protective, nurturing, and grounded.",
        image: "myths/demeter.jpg",
        planet: "Ceres",
        zodiac: "Virgo",
        domain: "Agriculture, fertility, motherhood"
    },

    Aphrodite: {
        description:"Goddess of love. You are passionate, expressive, and deeply emotional.",
        image: "myths/aphrodite.jpg",
        planet: "Venus",
        zodiac: "Taurus",
        domain: "Love, beauty, war"
    },

    Hephaestus: {
        description:"God of craftsmanship. You are creative, independent, and unique.",
        image: "myths/hephaestus.jpg",
        planet: "Earth",
        zodiac: "Libra",
        domain: "Blacksmiths, tools, crafting"
    },

    Athena: {
        description:"Goddess of wisdom. You are intelligent, strategic, and thoughtful.",
        image: "myths/athena.png",
        planet: "Mars",
        zodiac: "Virgo or Aries",
        domain: "Wisdom, War Strategy"
    },

    Artemis: {
        description:"Goddess of the hunt. You are independent, calm, and love freedom.",
        image: "myths/artemis.jpg",
        planet: "Moon",
        zodiac: "Virgo",
        domain: "Hunting and young women"
    },

    Apollo: {
        description:"God of the sun. You are creative, bright, and artistic.",
        image: "myths/apollo.jpg",
        planet: "Sun",
        zodiac: "Leo",
        domain: "Light, prophecy, the arts"
    },

    Hermes: {
        description:"Messenger of the gods. You are playful, quick-thinking, and adaptable.",
        image: "myths/hermes.png",
        planet: "Mercury",
        zodiac: "Gemini",
        domain: "Messenging, Traveling, Trickery"
    },

    Dionysus: {
        description:"Messenger of the gods. You are playful, quick-thinking, and adaptable.",
        image: "myths/dionysus.jpg",
        planet: "Neptune",
        zodiac: "Pisces, Virgo",
        domain: "Parties, wine, theatre"
    },

    Hades: {
        description:"God of the underworld. You are mysterious, calm, and introspective.",
        image: "myths/hades.jpg",
        planet: "Pluto",
        zodiac: "Scorpio",
        domain: "The Dead, the underworld"
    },

    Zeus: {
        description:"King of the gods. You are confident, powerful, and a natural leader.",
        image: "myths/zeus.jpg",
        planet: "Jupiter",
        zodiac: "Sagittarius",
        domain: "Thunder, the sky, lightning"
    }
}




function showResult() {
    let highestGod = "";
    let highestScore = -1;

    for (let god in scores) {
        if (scores[god] > highestScore) {
            highestScore = scores[god];
            highestGod = god;
        }
    }

    const data = godData[highestGod];

    result.className = ""; 
    result.classList.add("god-" + highestGod);

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("godName").textContent = highestGod;
    document.getElementById("godDescription").textContent = data.description;
    document.getElementById("godImage").src = data.image;

    document.getElementById("godPlanet").textContent = data.planet;
    document.getElementById("godZodiac").textContent = data.zodiac;
    document.getElementById("godDomain").textContent = data.domain;
    
}