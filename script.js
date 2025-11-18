const notes = {
    1: "Let's start creating the Christmas vibe!",
    2: "Do you already feel the Christmas spirit?",
    3: "HO HO HO 🎅",
    4: "All I want for Christmas is you!",
    5: "It will be hard to create 20 more notes 😅",
    6: "New Year is coming!",
    7: "A small reminder: you are my favorite person.",
    8: "Today’s task: smile for no reason.",
    9: "You deserve all the cozy vibes this season.",
    10: "Hot chocolate break? ☕✨",
    11: "You make every day feel a bit like Christmas.",
    12: "Halfway to Christmas!",
    13: "Let’s do something festive today.",
    14: "Sending you a tiny dose of magic.",
    15: "Hug of the day: this one! 🤗",
    16: "It’s cold outside, but you warm my world.",
    17: "Christmas countdown is getting serious now.",
    18: "You bring sparkle to everything.",
    19: "Time for a little self-care today.",
    20: "A surprise is waiting for you soon… 🎁",
    21: "Let’s watch something cozy tonight.",
    22: "Two more days! Can you feel the magic?",
    23: "One more sleep until Christmas!",
    24: "Merry Christmas, my love 🎄❤️"
};

// Shuffle numbers
const numbers = Array.from({ length: 24 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5);

const calendar = document.getElementById("calendar");

numbers.forEach(num => {
    const div = document.createElement("div");
    div.className = "box";
    div.textContent = num;
    
    div.addEventListener("click", () => openPopup(num));
    calendar.appendChild(div);
});

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closePopupBtn = document.getElementById("closePopup");

function openPopup(number) {
    popupTitle.textContent = `Day ${number}`;
    popupText.textContent = notes[number];
    popup.classList.remove("hidden");
}

closePopupBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) popup.classList.add("hidden");
});
