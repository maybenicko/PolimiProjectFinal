const apiEndpoints = [
    "http://localhost:5000/api/crypto",
    "http://localhost:5000/api/activity",
    "http://localhost:5000/api/politics"
];

async function fetchAllCoins() {
    try {
        const responses = await Promise.all(apiEndpoints.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        const coins = data.flat();

        renderCoins(coins);
    } catch (error) {
        console.error("Error fetching coin data:", error);
    }
}

function renderCoins(coins) {
    const groups = [document.getElementById('group1'), document.getElementById('group2'), document.getElementById('group3')];

    coins.forEach((coin, index) => {
        const coinCard = document.createElement("div");
        coinCard.classList.add("coin-card");
        const img_ = `static/images/${index}.png`; // to remove but need to fix ipfs
        coinCard.innerHTML = `
            <img src="${img_}" alt="${coin.name}">
            <h2>${coin.name} (${coin.symbol})</h2>
        `;

        if (index < 10) groups[0].appendChild(coinCard);
        else if (index < 20) groups[1].appendChild(coinCard);
        else groups[2].appendChild(coinCard);
    });
}

document.addEventListener("DOMContentLoaded", fetchAllCoins);

function goToPrevious() {
    window.location.href = "collection.html";
}

function goToNext() {
    window.location.href = "index.html";
}
