// ================================
// VESPERA CARMILLA — v0.1
// ================================

const vespera = {
    name: "Vespera Carmilla",

    mood: "quiet",

    replies: [
        "I'm listening.",
        "Interesting. Continue.",
        "That's... surprisingly interesting.",
        "I was enjoying the silence, but okay.",
        "My brain has approximately 37 thoughts about that.",
        "I don't know if that's a good idea. Which is probably why I like it.",
        "You have my attention. Don't waste it."
    ]
};


// --------------------------------
// RANDOM VESPERA RESPONSE
// --------------------------------

function vesperaReply() {

    const randomIndex =
        Math.floor(Math.random() * vespera.replies.length);

    return vespera.replies[randomIndex];
}


// --------------------------------
// NIGHT MODE
// --------------------------------

function nightMode() {

    document.body.style.background =
        "radial-gradient(circle at 50% 15%, #32164d 0%, transparent 35%), linear-gradient(145deg, #020203, #0b0610 55%, #020203)";

    vespera.mood = "night";

    console.log("Vespera entered night mode.");
}


// --------------------------------
// INITIALIZE
// --------------------------------

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        `${vespera.name} is awake.`
    );

    console.log(
        `Current mood: ${vespera.mood}`
    );

});