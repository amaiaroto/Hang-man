const wordBank = Array.from(
    new Set(
        [
            "in",
            "python",
            "you",
            "can",
            "use",
            "if",
            "else",
            "other",
            "within",
            "list",
            "to",
            "create",
            "concise",
            "and",
            "readable",
            "code",
            "for",
            "list",
            "transformations",
            "or",
            "filtering",
            "this",
            "is",
            "particularly",
            "useful",
            "when",
            "compare",
            "list",
            "or",
            "applying",
            "conditional",
            "logic",
            "apple",
            "peanut",
            "water",
            "clean",
            "stone",
            "olive",
            "occupied",
            "room",
            "pink",
            "red",
            "rain",
            "skill",
            "scold",
            "kin",
            "stove",
            "ill",
            "monster",
            "delete",
            "mango",
            "jacket",
            "tent",
            "grasshopper",
            "house",
            "wit",
            "wicked",
            "tuna",
            "metal",
            "ice",
            "flutter",
            "surplus",
            "winner",
            "while",
            "under",
            "deport",
            "transform",
            "linger",
            "mill",
            "need",
            "spend",
            "agree",
            "mold",
            "gold",
            "clue",
            "continental",
            "set",
            "just",
            "perform",
            "deviation",
            "plant",
            "sweep",
            "fuss",
            "tribute",
            "effect",
            "suppress",
            "possible",
            "coincidence",
            "ride",
            "weak",
            "main",
            "week",
            "taste",
            "crossing",
            "general",
            "belong",
            "awful",
            "pluck",
            "threshold",
            "haircut",
            "executive",
            "expectation",
            "publicity",
            "letter",
            "impound",
            "nest",
            "guide",
            "syndrome",
            "specimen",
            "fling",
            "custody",
            "boot",
            "judicial",
            "board",
            "bulb",
            "printers",
            "glimmer",
            "throttle",
            "pomegranate",
            "skitter",
            "nebula",
            "crunchwave",
            "velcro",
            "hollowbyte",
            "sprocket",
            "mirth",
            "quartzling",
            "driftcore",
            "snailstorm",
            "emberjack",
            "plunk",
            "gargantuan",
            "blubber",
            "gizmo",
            "widget",
            "doodle",
            "whisper",
            "twinkle",
            "sizzle",
            "flumble",
            "plorp",
            "snagglemint",
            "vortexture",
            "blinkwhistle",
            "grumblewax",
            "twizzlecrank",
            "morbloon",
            "zaplet",
            "cranklefoam",
            "yibble",
            "sprocket",
            "gargantuan",
            "embersnatch",
            "klunk",
            "blaster",
            "wobble",
            "blazeflare",
            "quibble",
            "snizzle",
            "flibber",
            "plunket",
        ]
    )
);

console.log(`There are ${wordBank.length} unique words in the word bank.`);

let wordElements = [];
var correctWord;
let maxAttp = 6;
var keyboard, table;
var correctChars;
const fontSize = "50px";
var lettersLeft;
var mistakes;
const rub;

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function changeWord() {
    rub = new SuperGif(
        { gif: document.getElementById("hangman_image"),
         show_progress_bar:false} );
    rub.load()

    correctChars = Array.from(getRandomElement(wordBank))
    var text = document.getElementById("generate_from_button");
    correctWord = correctChars.join("");
    text.textContent = correctWord;
    var keys = [];
    for (let i = 65; i < 91; i++) {
        keys.push(String.fromCharCode(i));
    }
    console.log(keys);
    elems = [];
    const table = tableCreate(correctWord.length);
    const keyboard = keyboardCreate(keys);
    mistakes = 0
    lettersLeft = correctChars.length
};

function keyboardCreate(keys) {
    const body = document.body;
    const kbd = document.getElementById('keyboard_table');
    kbd.replaceChildren([]);

    kbd.style.border = '3px solid black';

    const tr = kbd.insertRow(keys);
    tr.style.height = '50px';

    for (let k = 0; k < keys.length; k++) {
        const td = tr.insertCell();
        td.style.width = '50px';
        td.style.border = '1px solid black';
        const button = document.createElement('button');
        button.setAttribute("id", keys[k]);
        button.textContent = keys[k];
        button.addEventListener('click', function () {
            sendCharacter(button.textContent, correctChars);
            this.hidden = true;
        });

        td.appendChild(button);
    }

    body.appendChild(kbd);

    function sendCharacter(char, cchars) {
        var button = document.getElementById(char);
        //.log(button);
        let found = false;
        for (var n = 0; n < cchars.length; n++) {
            if (cchars[n].toUpperCase() == char) {
                found = true;
                document.getElementById(`cell${n}`).innerHTML = cchars[n].toUpperCase();
                lettersLeft--;
                if (lettersLeft <= 0) {
                    alert(`You won in ${mistakes} tries!`);
                    changeWord();
                }
            }
        }
        if (!found) {
            mistakes++;
            rub.move_to(mistakes);
            console.log(mistakes);

            if (mistakes >= maxAttp) {  
                alert(`You lost. The word was "${correctWord}".`);

                changeWord();
            }
        }
    }


    return kbd;
}

function tableCreate(wl) {
    const body = document.body;

    const tbl = document.getElementById('hangman_table');
    tbl.replaceChildren([])

    tbl.style.border = '3px solid black';

    const tr = tbl.insertRow();
    tr.style.height = '50px';

    for (let j = 0; j < wl; j += 1) {
        const td = tr.insertCell();
        td.setAttribute("id", `cell${j}`);
        td.style.width = '50px';
        td.style.padding = '2px';
        td.style.border = '1px solid black';
        let tg = document.createElement("p");
        tg.style.fontSize = 50 + "px";
        td.appendChild(tg);
        elems.push(td.textContent);
    }

    body.appendChild(tbl);
    return tbl;
}

changeWord();
