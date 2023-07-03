// Quotes array
var quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there."
];

// Greeting messages based on time
var greetings = {
    morning: "Let's start our morning with a new quote",
    afternoon: "Let's start our afternoon with a new quote",
    evening: "Let's start our night with a new quote"
};

// Get the current hour
var hour = new Date().getHours();

// Get the DOM elements
var greetingElement = document.getElementById("greeting");
var quoteTextElement = document.getElementById("quoteText");
var generateBtn = document.getElementById("generateBtn");
var containerElement = document.querySelector(".container");

// Set the greeting message
if (hour < 12) {
    greetingElement.textContent = greetings.morning;
} else if (hour < 18) {
    greetingElement.textContent = greetings.afternoon;
} else {
    greetingElement.textContent = greetings.evening;
}

// Generate random quote and change color theme
function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    var randomColor = getRandomColor();
    var lightColor = getLight();

    quoteTextElement.textContent = randomQuote;
    quoteTextElement.style.color = randomColor;

    document.body.style.backgroundColor = randomColor;
    generateBtn.style.backgroundColor = randomColor;

    containerElement.style.backgroundColor = lightColor;
}

// Generate a random color in hexadecimal format
function getRandomColor() {
    var color = "#";

    for (var i = 0; i < 3; i++) {
        var component = Math.floor(Math.random() * 128 + 128).toString(16);
        color += component.length === 1 ? "0" + component : component;
    }

    return color;
}

function getLight() {
    var letters = "0def";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }

    return color;
}

// Event listener for the "Generate Quote" button
generateBtn.addEventListener("click", generateQuote);

// Initial quote generation
generateQuote();
