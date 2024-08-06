// "Something Changed" by Creep-P
let repeat = false;
let n = 0;

function song() {
    // Verse 1
    let r = "";
    r += "It was a start \n";
    r += "Of a world of worlds \n";
    r += "But no one thought there's an end to it all \n";
    r += "Creation after creation started mysterious sensations \n";
    r += " \n"

    r += "But at the end of it all \n";
    r += "It dwindles down, all merging into one \n";
    r += "All merging into one \n";
    r += "Like the first, there are paths \n";
    r += "You will meet familiar faces \n";
    r += "See familiar places \n";
    r += " \n"

    // Bridge
    r += "At the edge of the world, only one barely unaltered \n";
    r += "But unlike the others, appearances were slaughtered \n";
    r += "Only time could tell how each one's fate's decided \n";
    r += " \n"

    r += refrain();
    r += " \n"

    // Verse 2
    r += "Let's start back again \n";
    r += "Unsure of what to do \n";
    r += "You return to the idea of assist or consume \n";
    r += "But that's not a concern \n";
    r += "Even though your stomach started to churn \n";
    r += " \n"

    r += "But this fills you with DETERMINATION \n";
    r += "CONSIDERATION \n";
    r += "And DEDICATION \n";
    r += "But they're all filled with pain \n";
    r += "No matter what you can say \n";
    r += " \n"

    // Bridge
    r += "But now you're left with all of these creations \n";
    r += " \n"

    r += refrain();
    r += " \n"
    return r
}

// function refrain() {
//     let words = consumeOr();
//     words += chorus();
//     return words
// }

function refrain() {
    let words = "";
    words += "Consume in desperation \n";
    words += "Or assist in separation \n";
    words += chorus();
    return words
}

function chorus() {
    let chorus = "";
    if (repeat) {
        n = 15;
        chorus += somethingChanged();
        chorus += "But something consume \n"
        n = 16;
        chorus += somethingChanged();
        chorus += nobodyCame();
        n = 32;
        chorus += somethingChanged();
        return chorus
    } else {
        n = 16;
        chorus += somethingChanged();
        repeat = true;
        return chorus
    }
}

function somethingChanged() {
    let somethingChanged = "";
    for (let i = 0; i < n; i++) {
        somethingChanged += "But something changed \n";
    }
    return somethingChanged
}

function nobodyCame() {
    let nobodyCame = "";
    for (let i = 0; i < 14; i++) {
        nobodyCame += "But nobody came \n";
    }
    return nobodyCame
}

let tag = document.getElementById("somethingChanged");

function songButton() {
    let songLyrics = "";
    songLyrics = song();
    tag.innerHTML = songLyrics;
}

let button = document.getElementById("songLyrics");
button.addEventListener("click", songButton); 