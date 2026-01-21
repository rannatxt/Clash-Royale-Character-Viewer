const characters = [
    {
        name: "Gold Knight",
        image: "images/gold knight.png",
        rarity: "LEGENDARY",
        hp: 2000,
        damage: 325,
        speed: "Medium",
        elixir: 4,
        description: "Dashes through enemies, chaining attacks with his golden blade."
    },
    {
        name: "Archer",
        image: "images/archer.png",
        rarity: "COMMON",
        hp: 500,
        damage: 90,
        speed: "Fast",
        elixir: 3,
        description: "Long-range support unit."
    },
    {
        name: "Mega knight",
        image: "images/mk.png",
        rarity: "LEGENDARY",
        hp:  3300,
        damage: 222,
        speed: "medium",
        elixir: 7,
        description: "Massive tank that jumps into battle, dealing area damage on landing."
    },
        {
        name: "Pekka",
        image: "images/pekka.png",
        rarity: "EPIC",
        hp: 3760,
        damage: 816,
        speed: "Slow",
        elixir: 7,
        description: "Very high damage heavy troop."
    },
    {
        name: "Hog Rider",
        image: "images/hog.png",
        rarity: "RARE",
        hp: 1697,
        damage: 317,
        speed: "Very Fast",
        elixir: 4,
        description: "Fast building-targeting melee unit."
    },
    {
        name: "Baby Dragon",
        image: "images/baby dragon.png",
        rarity: "EPIC",
        hp: 1152,
        damage: 161,
        speed: "Medium",
        elixir: 4,
        description: "Flying troop with splash damage."
    }, 
    {
        name: "Musketeer",
        image: "images/muskter.png",
        rarity: "RARE",
        hp: 721,
        damage: 217,
        speed: "Medium",
        elixir: 4,
        description: "Long-range single target support troop."
    },
    {
        name: "Giant",
        image: "images/giant.png",
        rarity: "RARE",
        hp: 4000,
        damage: 260,
        speed: "Slow",
        elixir: 5,
        description: "A massive tank unit."
    }
];

let currentIndex = 0;

// ELEMENTS
const img = document.getElementById("characterImage");
const nameEl = document.getElementById("charName");
const rarityEl = document.getElementById("charRarity");
const hpEl = document.getElementById("charHP");
const dmgEl = document.getElementById("charDamage");
const speedEl = document.getElementById("charSpeed");
const elixirEl = document.getElementById("charElixir");
const descEl = document.getElementById("charDescription");
const grid = document.getElementById("characterGrid");

// LOAD CHARACTER
function loadCharacter(index) {
    const c = characters[index];
    img.src = c.image;
    nameEl.textContent = c.name;
    rarityEl.textContent = c.rarity;
    rarityEl.className = `rarity ${c.rarity.toLowerCase()}`;
    hpEl.textContent = c.hp;
    dmgEl.textContent = c.damage;
    speedEl.textContent = c.speed;
    elixirEl.textContent = c.elixir;
    descEl.textContent = c.description;

    document.querySelectorAll(".character-card").forEach((card, i) => {
        card.classList.toggle("active", i === index);
    });
}

// BUTTONS
document.getElementById("nextBtn").onclick = () => {
    currentIndex = (currentIndex + 1) % characters.length;
    loadCharacter(currentIndex);
};

document.getElementById("prevBtn").onclick = () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    loadCharacter(currentIndex);
};

// CREATE SELECTOR CARDS
characters.forEach((char, index) => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
        <img src="${char.image}">
        <p>${char.name}</p>
    `;
    card.onclick = () => {
        currentIndex = index;
        loadCharacter(index);
    };
    grid.appendChild(card);
});

// INITIAL LOAD
loadCharacter(currentIndex);

