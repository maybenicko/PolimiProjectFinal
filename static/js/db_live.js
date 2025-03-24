async function fetchAllCoins() {
    try {
        const live_data = [
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
        "description": "A memecoin dedicated to the bold and optimistic dreamers who believe in time capsules loaded with crypto treasures. What’s a few decades between hodlers, anyway?",
        "id": "1jevawa",
        "image": "https://ipfs.io/ipfs/QmbPuMaakm5HFUZPVPtVRMZLK8Q3tuXkW2PUjGhChe2331",
        "name": "FutureFortune",
        "symbol": "$FFORT"
    },
    {
        "description": "Born from the ashes of deceit, ScamperMania is the coin that promises absolutely nothing! Invest if you dare, because once a scammer, always a... laugh for you.",
        "id": "1jf27vl",
        "image": "https://ipfs.io/ipfs/QmcTzawGmb34qGDQTfoKNFFXcKz8g8GnUYSXQKzJrLjtjc",
        "name": "ScamperMania",
        "symbol": "$SCAM"
    },
    {
        "description": "Commemorating the legendary day when Michael 'The Sailor' Saylor became the Titanic of investors, losing $6 billion in style. 🌊💼 Dive into the waves of nostalgia and fortune.",
        "id": "1jgevh5",
        "image": "https://ipfs.io/ipfs/QmYQH39pJ3u5egZN5vMHndxkqdd4tiMDvuo5SVHpKNFHRh",
        "name": "Saylor's Folly",
        "symbol": "$AIYO"
    },
    {
        "description": "Congrats on becoming a WholeCoiner! After years of being hodler, you've finally leveled up to join the elite league of WholeCoiners. This memecoin represents the tears of joy and diamond hands you crafted along the way.",
        "id": "1jgin4m",
        "image": "https://ipfs.io/ipfs/QmbEuNTtgPRyVp5B9yiqnu1hRNHCrJsdT5Hk2rrvCGWyuL",
        "name": "WholeCoinerGold",
        "symbol": "$WHOLE"
    },
    {
        "description": "In the epic showdown of you vs the market, arm yourself with MarketBrawl. A memecoin for those who love a good tug-of-war with their portfolios!",
        "id": "1jg9yaq",
        "image": "https://ipfs.io/ipfs/QmSeZaE8TG8oCG6NHZnsXcKurBZHYswusvxaq6Tmxy86C3",
        "name": "MarketBrawl",
        "symbol": "$MBRW"
    },
    {
        "description": "Experience the bewildering fusion of Shady business with cryptos! Where Eminem's unreleased beats pump the crypto charts, and his ex-engineer becomes a legend of decentralized chaos. Hold on to your earbuds, this coin drops like a surprise album!",
        "id": "1jh4q6r",
        "image": "https://ipfs.io/ipfs/QmWg71XjN5DHM1WPah9JyKzBZnNjgQBP3W9pC8TN9dJk2i",
        "name": "SlimCoin",
        "symbol": "$SLIM"
    },
    {
        "description": "HodlMyJustice is the ultimate memecoin for all vigilante crypto detectives. Tired of waiting for law enforcement to catch up? Channel your inner crypto knight and join the fight against blockchain bandits with this righteous coin. Don't just hodl; solve the cybercrime puzzle, one meme at a time!",
        "id": "1jh5vda",
        "image": "https://ipfs.io/ipfs/QmRVcMbBuTLdnxqaQERYAqhWbY4ZrB8JsDwSHFomFe3Kdw",
        "name": "HodlMyJustice",
        "symbol": "$HOLD"
    },
    {
        "description": "Introducing $HODL, the feeling when you've got a bag of Ethereum but don't quite know if it's going to the moon or orbiting your fiat. To the eth-ndless air of uncertainty!",
        "id": "1jfh1qa",
        "image": "https://ipfs.io/ipfs/QmcU91Ginw1wPUJgYSFzWStGPQLcUNRWhqPw5qcFCMj1bA",
        "name": "ETH Hodl-Bags",
        "symbol": "$HODL"
    },
    {
        "description": "Experience the grandeur of Alabama’s finest billboards! BillboardBucks—because who needs NFTs when you’ve got the charm of classic roadside advertising.",
        "id": "1jdifdk",
        "image": "https://ipfs.io/ipfs/QmRLEg2jk16nsH5m5CWnvVnXPp5WVGiCfZvEUHSjF6LnAF",
        "name": "BillboardBucks",
        "symbol": "$BBLK"
    },
    {
        "description": "For those times when hypocrisy hits an all-time high! GOP-ScandalCoin: Where every outrageous political twist turns into crypto hilarity. Mooning past reason, straight into the meme hall of fame, because sometimes reality is the most comedic twist!",
        "id": "1jejql1",
        "image": "https://ipfs.io/ipfs/QmezG3XbfXWRRrTaAmiWp5Bg1UwaFep6P4ynnyc2rKscjQ",
        "name": "GOP-ScandalCoin",
        "symbol": "$GSCS"
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
    },
    {
        "description": "Introducing Trump Edumacoin, the coin that's smarter than any department! When life gives you executive orders, make memes! Watch your portfolio laugh its way through bureaucratic chaos as we teach the world the new definition of 'edumacation!'",
        "id": "1jfzxwc",
        "image": "https://ipfs.io/ipfs/QmcKKxrzcU3NARqxKLSA6YBVheaWseJH5VZjKDN6653HFc",
        "name": "Trump Edumacoin",
        "symbol": "$EDU"
    },
    {
        "description": "Dive into the ocean of gaming with Playstacean, the memecoin that combines crabby adventures and console dreams. Shell-ter your portfolio with some gaming crustacean fun!",
        "id": "1jgvkm4",
        "image": "https://ipfs.io/ipfs/QmaqTt9Fdj77FNJsnkn1mLDD558jE4KmG365ZfYqMFRx1e",
        "name": "Playstacean",
        "symbol": "$PLAYC"
    },
    {
        "description": "Introducing MirrorPaint Memecoin, where reflections meet the paint bucket! Embrace the splashes of nostalgia with every trade, because in the world of mirrors and pixels, everyone's an artist!",
        "id": "1jfhy93",
        "image": "https://ipfs.io/ipfs/QmedD5Rn9XYnEb31zWDkvrJPK27yZMMUGB6gb7NELeaCn3",
        "name": "MirrorPaint Memecoin",
        "symbol": "$MSPNT"
    },
    {
        "description": "Join the hilariously confused journey of the LostStates coin, where nobody knows what's happening anymore! It's a wild ride of bewilderment as PEPE tries to make sense of the chaos. Spoiler: he can't.",
        "id": "1jg7mc9",
        "image": "https://ipfs.io/ipfs/QmPLnryEUrLmZzuJn5tKEr1aiPDLLe9osNPSRA9FkKK9dM",
        "name": "LostStates",
        "symbol": "$LOST"
    },
    {
        "description": "Join the jolly journey of PrezPals, the coin that celebrates international friendships! Whether you're shaking hands like Ukraine and Finland's leaders or just waving from across the room, this coin is your ticket to diplomatic delight!",
        "id": "1jeyedd",
        "image": "https://ipfs.io/ipfs/QmUWAGnj7Ga7rs9Ss8vu9QW3FcAJFierxzE8ZfWR2ntT5N",
        "name": "PrezPals",
        "symbol": "$PPAL"
    },
    {
        "description": "Hop into the world of Tigger Triumph, where every day is a celebration and fortunes bounce like Tigger on a trampoline! Join the party where numbers get bigger and smiles get wider.",
        "id": "1jdfvo4",
        "image": "https://ipfs.io/ipfs/QmYr83MbrvxPychSZsyq9vaj9ndcxeXidaK428Ds417FmM",
        "name": "Tigger Triumph",
        "symbol": "$TGGR"
    },
    {
        "description": "Introducing EggLess, the ultimate memecoin for those facing an eggstential crisis. Crack into a world where eggs are a rare commodity, and laugh through the yolk shortage!",
        "id": "1je9hg1",
        "image": "https://ipfs.io/ipfs/QmQWpz1yKn22UjGLtezrqaU27aGRZkPAS5ShscGcdsB23L",
        "name": "EggLess",
        "symbol": "$EGG0"
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
        "description": "Ever felt like you're just not in sync with the world? Meet Mismatch MemeCoin – the currency for those epic misalignments in life. Where things just don't fit, but hilariously so!",
        "id": "1jeiqus",
        "image": "https://ipfs.io/ipfs/QmP4KusjZuMydKgH8XnwikC175TmCVM43nBjA4Jnor4hvN",
        "name": "Mismatch MemeCoin",
        "symbol": "$MMTCH"
    },
    {
        "description": "Get your passports and memes ready with BritBan, the coin for those times when travel advisories cause an international stir. Have a laugh as Britain tells its folks to steer clear of the land of eagle cries and supersized everything.",
        "id": "1jfq0ou",
        "image": "https://ipfs.io/ipfs/QmZPnQ1oVWZXiit65eEk5Y3V6KHFMyUgEzoDXeLjZekYMo",
        "name": "BritBan",
        "symbol": "$BBAN"
    },
    {
        "description": "In a world where diplomacy has become a door-to-door quest for eggs, the EggsChangeCoin is here to hatch the ultimate deal. Get ready to crack some yolks and scramble your way to prosperity—one egg at a time.",
        "id": "1jg3tqz",
        "image": "https://ipfs.io/ipfs/QmZnmLMsy74XkPBGS1oPhh8VN2NDumqziSavrg8VrxVN7y",
        "name": "EggsChangeCoin",
        "symbol": "$EGGX"
    },
    {
        "description": "Brace yourself for the new 'DaneScareCoin' - the meme currency that's issuing travel warnings faster than you can say 'hygge'. With $DSC, every purchase comes with an advisory notice and a chuckle.",
        "id": "1jgfqr6",
        "image": "https://ipfs.io/ipfs/QmRgv6H7vvBx9NiDkgrGiienjazsgFy5auCjkXdaSFknpK",
        "name": "DaneScareCoin",
        "symbol": "$DSC"
    },
    {
        "description": "The memecoin that's up in arms, just like your Aunt when her Florida trip is cancelled. Perfect for those feeling like they need a passport for their own backyard!",
        "id": "1jfun6a",
        "image": "https://ipfs.io/ipfs/QmQk98uzzNGEhJ8gsVacnDgPCv2onYUD1YvbDrQrXKRGVV",
        "name": "Travelbanana",
        "symbol": "$TBAN"
    },
    {
        "description": "Get ready for the craziest ride in the crypto world where coin flips decide who's in the slammer! Invest wisely before you end up behind bars yourself. HODL tight if you're feeling brave!",
        "id": "1jfqvem",
        "image": "https://ipfs.io/ipfs/QmNxcBjuTXCvVhdnNkpkpbb83yQtni5eoCtwuiJQfuofWw",
        "name": "ArrestTheOpponentsCoin",
        "symbol": "$OPABS"
    },
    {
        "description": "When economics become comical, and Rubles start wobbling faster than a circus clown on stilts. Join the dive into the abyss with Rubdown Coin and watch it tumble where no coin has gone before!",
        "id": "1jdavvj",
        "image": "https://ipfs.io/ipfs/QmSXiwuekJw8qJ3i7cX23naeg7ZkQnKKpvyGJ5CiVvYKwk",
        "name": "Rubdown Coin",
        "symbol": "$RUBL"
    }
] // use for class presentation
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
        coinCard.innerHTML = `
            <img src="${coin.image}" alt="${coin.name}">
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
