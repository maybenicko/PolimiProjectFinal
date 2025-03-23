const apiEndpoints = [
    "http://localhost:5000/api/crypto",
    "http://localhost:5000/api/activity",
    "http://localhost:5000/api/politics"
];

async function fetchAllCoins() {
    try {
        const responses = await Promise.all(apiEndpoints.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));

        const live_data = [[
            {
                "description": "Introducing FBI Coin – the token that gets your heart racing faster than a late-night knock on the door. Ride the wave of crypto-shivers and unlock the thrill of feeling like you're in a spy movie, minus the handcuffs.",
                "id": "1jb8yym",
                "image": "https://ipfs.io/ipfs/QmNPWEApThpD8TZYrPuB1mC6HPgEyWvXiuE5nYaFcTxsds",
                "name": "FBI Coin",
                "symbol": "$FBIK"
            },
            {
                "description": "For those moments when it's all just 'Probably Unrelated,' hold onto UnrelatedCoin and embrace the chaos!",
                "id": "1jacp90",
                "image": "https://ipfs.io/ipfs/Qmchoj5C3Q9hEsnLscGdsFfSGdEwBDSEbHttvGUo1hKbe2",
                "name": "UnrelatedCoin",
                "symbol": "$UNC"
            },
            {
                "description": "After a cosmic slumber, PEPE has returned to reclaim his throne in the cryptosphere. Hold tight as he moonwalks back into the spotlight, bringing joy and volatile price swings to all his loyal hodlers.",
                "id": "1jb9ivw",
                "image": "https://ipfs.io/ipfs/QmPaM7s1QLqAomeM6kGSLpr6D3hJEuRS4HRcsgf8WHEXv6",
                "name": "ReturnOfPEPE",
                "symbol": "$RPEP"
            },
            {
                "description": "OofCoin for those facepalm moments in crypto, ensuring even your blunders can turn into laughter!",
                "id": "1jefpmn",
                "image": "https://ipfs.io/ipfs/QmZtS4zxkd5XWNLYZ4UWhbrYpWHKux98xota1BqeYLuxwQ",
                "name": "OofCoin",
                "symbol": "$OOF"
            },
            {
                "description": "Introducing TrojanBux: the coin that will keep your virtual wallet quaking in its boots! Inspired by the latest malware scare, this memecoin reminds us to always stay vigilant. HODL tight, and don’t let StilachiRAT sneak in!",
                "id": "1jehzzw",
                "image": "https://ipfs.io/ipfs/QmR5Mno1oDNEmSMtnFxm1zZhPEGiLsafbA2NGLAf85YJta",
                "name": "TrojanBux",
                "symbol": "$TRBX"
            },
            {
                "description": "Ride the Trump Train to the Bottom! When financial advice goes as well as political tweets, brace yourself for the ultimate rollercoaster. Embrace the 'buy the dip' mindset, where every slip feels like a Trump triumph in the crypto world!",
                "id": "1ja6lcv",
                "image": "https://ipfs.io/ipfs/QmUkpZjbU1AhV7bkd5Qfx5mQpi8Xp3N5vDk4FA2GEu6Gg4",
                "name": "Trump's Dipster",
                "symbol": "$TRUMP"
            },
            {
                "description": "Bought the top? No worries! Hold on tight and ride the tech wave with TechBroCoin. It's all about the innovation, not the unfulfilled moon shots. 🚀",
                "id": "1jcx645",
                "image": "https://ipfs.io/ipfs/QmNTUKinWssncHYvau15CjFVFFeoWZmcdGWk5zFdVLjW74",
                "name": "TechBroCoin",
                "symbol": "$TBC"
            },
            {
                "description": "A memecoin dedicated to the bold and optimistic dreamers who believe in time capsules loaded with crypto treasures. What’s a few decades between hodlers, anyway?",
                "id": "1jevawa",
                "image": "https://ipfs.io/ipfs/QmbPuMaakm5HFUZPVPtVRMZLK8Q3tuXkW2PUjGhChe2331",
                "name": "FutureFortune",
                "symbol": "$FFORT"
            },
            {
                "description": "Introducing Scamalot, the token that defies every magic trick in the crypto playbook. Inspired by the unbelievable escapades of crypto.com's leadership, SCAM promises to keep you guessing whether there's a rabbit under the hat or just an empty wallet. Will it moon, or just moondoggle? Only one way to find out—behold the illusion and watch your investments disappear!",
                "id": "1jec87g",
                "image": "https://ipfs.io/ipfs/QmVq327kFEp6P3S1RgDYZmu9tQ1UStgArXBYHCA1ks45G5",
                "name": "Scamalot",
                "symbol": "$SCAM"
            },
            {
                "description": "Born from the ashes of deceit, ScamperMania is the coin that promises absolutely nothing! Invest if you dare, because once a scammer, always a... laugh for you.",
                "id": "1jf27vl",
                "image": "https://ipfs.io/ipfs/QmcTzawGmb34qGDQTfoKNFFXcKz8g8GnUYSXQKzJrLjtjc",
                "name": "ScamperMania",
                "symbol": "$SCAM"
            }
        ], [
            {
                "description": "Experience the grandeur of Alabama’s finest billboards! BillboardBucks—because who needs NFTs when you’ve got the charm of classic roadside advertising.",
                "id": "1jdifdk",
                "image": "https://ipfs.io/ipfs/QmRLEg2jk16nsH5m5CWnvVnXPp5WVGiCfZvEUHSjF6LnAF",
                "name": "BillboardBucks",
                "symbol": "$BBLK"
            },
            {
                "description": "Ride the wave of political drama with the Elon Traitor Coin! Inspired by the sensational switch-up when a senator decided to trade his Tesla after being labeled a traitor by the one and only Elon Musk. Get in on the action before it spins into orbit!",
                "id": "1jbdtge",
                "image": "https://ipfs.io/ipfs/QmXPfH1co8bmB7G5dARBLvECF2FkF9E3P24opk6edCdFT8",
                "name": "Elon Traitor Coin",
                "symbol": "$ETC"
            },
            {
                "description": "For those times when hypocrisy hits an all-time high! GOP-ScandalCoin: Where every outrageous political twist turns into crypto hilarity. Mooning past reason, straight into the meme hall of fame, because sometimes reality is the most comedic twist!",
                "id": "1jejql1",
                "image": "https://ipfs.io/ipfs/QmezG3XbfXWRRrTaAmiWp5Bg1UwaFep6P4ynnyc2rKscjQ",
                "name": "GOP-ScandalCoin",
                "symbol": "$GSCS"
            },
            {
                "description": "Rev up your rockets and cruise down to the White House Tesla Auto Mall! Where even PEPE gets a VIP test drive in a cyber-limo! Buckle up, it's electrifying!",
                "id": "1j9zwt2",
                "image": "https://ipfs.io/ipfs/QmT6MsxZdtzW6Q8HvfJRQmfDqUAT7xYBz9c1QC5wdCrky3",
                "name": "TeslaMall Bonanza",
                "symbol": "$TESMO"
            },
            {
                "description": "Enter the chaotic world of Mangione Madness, the wild ride of a Memecoin where discourse goes rogue! When Reddit takes a bizarre turn, unleash your inner copium with $MANIC and dance with the unpredictability of internet giants.",
                "id": "1jan2jv",
                "image": "https://ipfs.io/ipfs/QmRbYiHPtEuefsf52wZeXmYncqcGjdrwMAeSoUqHgiYK4d",
                "name": "Mangione Madness",
                "symbol": "$MANIC"
            },
            {
                "description": "Finally a memecoin that tells it like it is! Embrace the honesty of crypto with TruBannerCoin, the only coin that's motivational because it doesn't sugarcoat anything. Invest and laugh as banners inspire with brutal honesty!",
                "id": "1jcts4c",
                "image": "https://ipfs.io/ipfs/QmP5sKbLecnFi63gkd3JTe4Muhw5ysA33KN4ebnwHvMbSg",
                "name": "TruBannerCoin",
                "symbol": "$TRUBN"
            },
            {
                "description": "Embark on a journey with FreeSpeechSage, the memecoin that salutes the unsung heroes of free speech. While some get escorted out, our coin escorts you to moon-bound freedom with unstoppable speech-dragon power!",
                "id": "1jbr9r8",
                "image": "https://ipfs.io/ipfs/QmYsB7qV8mfCwSjuUucGFqfTe5FNatM4yxFMMSKLwERPmL",
                "name": "FreeSpeechSage",
                "symbol": "$SAGE"
            },
            {
                "description": "Get ready for the meme collapse of 2025! With $TOPPL, witness the comical end of an era as even the most steadfast leaders take a seat. Navigate this coin and laugh all the way to the digital Governor General!",
                "id": "1jbwqw7",
                "image": "https://ipfs.io/ipfs/QmZUjnU5jXtaaFrYxazA7JenGDAVQd5TUMuiYYFhJeuQgR",
                "name": "Trudeau Topple",
                "symbol": "$TOPPL"
            },
            {
                "description": "Introducing DroneSerble, the memecoin that always flies high like the largest protest in Serbian history viewed from above! It's the perfect mix of panoramic vision and epic movements, representing not just change but a bird's eye view of meme culture.",
                "id": "1jdqpzp",
                "image": "https://ipfs.io/ipfs/QmQ9QpfCtKRf1WSatzL3QrUEjiqWphjJB4Tss2YKgKk1Av",
                "name": "DroneSerble",
                "symbol": "$DRB"
            },
            {
                "description": "Embark on a journey through the delirious world of $VOICE, the only memecoin inspired by an artist's 230-hour quest to encapsulate thousands of faces in one drawing. Take a break from the chaos and join the choir of voices in the cryptosphere!",
                "id": "1jfa2k8",
                "image": "https://ipfs.io/ipfs/QmYadFDrYTgMkzgCxRCuUvsVkdMUmnSpKAoD83cckC4ZEt",
                "name": "VoicesInu",
                "symbol": "$VOICE"
            }
        ], [
            {
                "description": "Introducing the Brain Drain Buck, a coin that vanishes as quickly as Europe's brightest minds! Feel the buzz as Pepe dons a graduation cap, leaving the continent for greener crypto pastures. Made for those who know the grass is always greener – but the brains are always gone!",
                "id": "1jbibt3",
                "image": "https://ipfs.io/ipfs/QmWMLuR3EjMegxTpaqhRcrqiiUj9AdRb1dunbigBiQsRmk",
                "name": "Brain Drain Buck",
                "symbol": "$DRN"
            },
            {
                "description": "Introducing EggLess, the ultimate memecoin for those facing an eggstential crisis. Crack into a world where eggs are a rare commodity, and laugh through the yolk shortage!",
                "id": "1je9hg1",
                "image": "https://ipfs.io/ipfs/QmQWpz1yKn22UjGLtezrqaU27aGRZkPAS5ShscGcdsB23L",
                "name": "EggLess",
                "symbol": "$EGG0"
            },
            {
                "description": "Harness the power of unity with ProtestCoin, the memecoin that marches to the beat of its own drum! Created in the heat of the largest protest in Serbian history, it's the currency that won't be silenced.",
                "id": "1jbyw2u",
                "image": "https://ipfs.io/ipfs/QmZUNJ3UQDnfFoEph8EzRiFRnAakv7tF3ciMmGQdbt564q",
                "name": "ProtestCoin",
                "symbol": "$MARCH"
            },
            {
                "description": "As Finland says 'no eggs for you' to the US, the world is left cracking up. This memecoin celebrates all diplomatic eggs-change failures, with yolks for all!",
                "id": "1jchh9z",
                "image": "https://ipfs.io/ipfs/QmSWcmd6oRBK7CmUGUopYg7UAtShmtPMSzmp3LD6X2RpiR",
                "name": "Eggward Scissorhands",
                "symbol": "$EGGD"
            },
            {
                "description": "Strap in for a wild ride with Tesla Tumble, where even the most electrifying moguls can get a little spark of unsolicited advice. Disgruntled investors, meet your memetic match!",
                "id": "1jehge8",
                "image": "https://ipfs.io/ipfs/QmVRi56p5ws3EWDxmxZH3s6p7pFQfrzRWN12gB6DfWybUq",
                "name": "Tesla Tumble",
                "symbol": "$MUSK"
            },
            {
                "description": "Experience the disappearing act with Honor Vanished, the memecoin that's more elusive than a Black Medal of Honor recipient on a government website. Now you see it, now you don't!",
                "id": "1jd11lz",
                "image": "https://ipfs.io/ipfs/QmbqgpQqgZPPu1KG5nxHat9u7XNgViasuzvgCnt79PDjnw",
                "name": "Honor Vanished",
                "symbol": "$VANSH"
            },
            {
                "description": "When drones drop in and take over, Moscow’s gas seems to go on tour. Jump on the rollercoaster of supplies spiraling out! FUELED by chaos.",
                "id": "1jcliak",
                "image": "https://ipfs.io/ipfs/QmSbsAjiKH5bZvKJfG1fzsYmXiqkkSvYfZZNNK5rAfouY1",
                "name": "FuelFrenzy",
                "symbol": "$FRNZ"
            },
            {
                "description": "Strike a balance between 'Thou shalt not' and 'Thou shalt profit' with LewdCoin! Backed by dubious deeds for howling hodlers. Perfect for those who know that sometimes chaos is the best catalyst for gains!",
                "id": "1ja2ceq",
                "image": "https://ipfs.io/ipfs/QmVdFRVjz6ZLZQB6ENhGrn4kHZbsTtwak7ihjCJfJBJH24",
                "name": "LewdCoin",
                "symbol": "$LEWD"
            },
            {
                "description": "Get ready to ignite your portfolio with TeslaBlaze! As sizzling as a hot day in Germany, this coin promises to set the crypto market ablaze faster than a fleet of Teslas in a heated protest. HODL onto your extinguisher because this one's going nuclear!",
                "id": "1jazodv",
                "image": "https://ipfs.io/ipfs/Qmf2JvEc5ZDBmjdobMZKL8zDjb173myTK34qfHJ5Rmro56",
                "name": "TeslaBlaze",
                "symbol": "$FIRE"
            },
            {
                "description": "Ever felt like you're just not in sync with the world? Meet Mismatch MemeCoin – the currency for those epic misalignments in life. Where things just don't fit, but hilariously so!",
                "id": "1jeiqus",
                "image": "https://ipfs.io/ipfs/QmP4KusjZuMydKgH8XnwikC175TmCVM43nBjA4Jnor4hvN",
                "name": "Mismatch MemeCoin",
                "symbol": "$MMTCH"
            }
        ]] // use for class presentation
        const coins = live_data.flat();

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
