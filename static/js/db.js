const apiEndpoints = [
    "http://192.168.1.7:5000/api/crypto",
    "http://192.168.1.7:5000/api/activity",
    "http://192.168.1.7:5000/api/politics"
];

async function fetchAllCoins() {
    try {
        // Fetch data from all three endpoints
        const responses = await Promise.all(apiEndpoints.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));

        // Flatten the results into a single array
        const coins = data.flat();

        // Pass the fetched data to the rendering function
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
        const img_ = "static/images/favicon_.ico" // to remove but need to fix ipfs
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
