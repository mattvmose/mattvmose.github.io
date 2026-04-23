/* F1 Facts for the Fun Facts section on the index.html page */

let f1Facts = [];

function loadFacts() {
    fetch("/data/facts/facts.json")
        .then(response => response.json())
        .then(data => {
            f1Facts = data.facts;
            console.log("Facts loaded:", f1Facts.length);
        })
        .catch(error => {
            console.error("Error loading F1 facts:", error);
        });
}

function generateRandomFact() {
    const factBox = document.getElementById("random-fact-text");
    if (!factBox || f1Facts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * f1Facts.length);
    factBox.textContent = f1Facts[randomIndex];
}

function setupRandomFactButton() {
    const btn = document.getElementById("random-fact-btn");
    if (btn) {
        btn.addEventListener("click", generateRandomFact);
    }
}

/* Initialize all event listeners when the DOM is fully loaded */

function initializeSite() {
    loadFacts();
    setupRandomFactButton();
}

document.addEventListener("DOMContentLoaded", initializeSite);