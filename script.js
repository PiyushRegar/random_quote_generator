const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

// Array of quotes
const quotes = [
    { text: "We read the world wrong and say that it deceives us.", author: "Rabindranath Tagore" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" }
];

// Function to generate a new quote
function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex].text}"`;
    authorText.textContent = `- ${quotes[randomIndex].author}`;
}


// Event listeners
newQuoteBtn.addEventListener("click", getNewQuote);
tweetBtn.addEventListener("click", tweetQuote);

// Load a quote when the page loads
getNewQuote();