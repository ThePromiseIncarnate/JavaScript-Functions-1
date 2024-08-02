// "Something Changed" by Creep-P
let repeat = false;
let n = 0;

function song() {
    let r
    // Verse 1
    console.log("It was a start");
    console.log("Of a world of worlds");
    console.log("But no one thought there's an end to it all");
    console.log("Creation after creation started mysterious sensations");

    console.log("But at the end of it all");
    console.log("It dwindles down, all merging into one");
    console.log("All merging into one");
    console.log("Like the first, there are paths");
    console.log("You will meet familiar faces");
    console.log("See familiar places");

    // Bridge
    console.log("At the edge of the world, only one barely unaltered");
    console.log("But unlike the others, appearances were slaughtered");
    console.log("Only time could tell how each one's fate's decided");

    r = refrain();
    console.log(r);

    // Verse 2
    console.log("Let's start back again");
    console.log("Unsure of what to do");
    console.log("You return to the idea of assist or consume");
    console.log("But that's not a concern");
    console.log("Even though your stomach started to churn");

    console.log("But this fills you with DETERMINATION");
    console.log("CONSIDERATION");
    console.log("And DEDICATION");
    console.log("But they're all filled with pain");
    console.log("No matter what you can say");

    // Bridge
    console.log("But now you're left with all of these creations");

    r = refrain();
    console.log(r);
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

song();