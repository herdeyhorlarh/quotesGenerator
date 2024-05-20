const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You miss 100% of the shots you don't take.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Act as if what you do makes a difference. It does.",
    "Stay positive, work hard, make it happen.",
    "You are stronger than you think.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best time for new beginnings is now.",
    "You miss 100% of the shots you don't take.",
    "Start where you are. Use what you have. Do what you can.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Believe in yourself and all that you are.",
    "Every moment is a fresh beginning.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your only limit is your mind.",
    "Small steps every day."
];
function generateQuote() {
    const randomQuote = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerText = quotes[randomQuote];
}