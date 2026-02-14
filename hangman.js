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
            "printers"
        ]
    )
);
var wordElements = [];
var correctWord;
let maxAttp = 6;
var keyboard, table;
var correctChars;
var fontSize = "50px";
var lettersLeft;
var errors;
var rub;

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function changeWord() {

    rub = new SuperGif({ gif: document.getElementById("himg"), show_progress_bar:false} );
    rub.load()
    //rub.move_to(3);

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
    errors = 0
    lettersLeft = correctChars.length
};

function keyboardCreate(keys) {
    const body = document.body;
    const kbd = document.getElementById('k');
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
        //`sendCharacter(${button.textContent})`);
        td.appendChild(button);
        //   td.appendChild(document.createElement('button'));
    }

    body.appendChild(kbd);

    function sendCharacter(char, cchars) {
        var button = document.getElementById(char);
        //.log(button);
        let found = false;
        for (var n = 0; n < cchars.length; n++) {
            if (cchars[n].toUpperCase() == char) {
                found = true;
                // console.log('ah');
                document.getElementById(`cell${n}`).innerHTML = cchars[n].toUpperCase();
                lettersLeft--;
                // console.log(cchars.pop());
                if (lettersLeft <= 0) {
                    alert(`You won in ${maxAttp} tries!`);
                    changeWord();
                }
            }
        }
        if (!found) {
            errors++;
            rub.move_to(errors);
            console.log(errors);

            if (errors >= maxAttp) {  
                alert(`You lost. The word was "${correctWord}".`);

                changeWord();
            }
        }
        //console.log(`sentCharacter "${cell.getAttribute('id')}"\n${String(cchar)}`);
    }


    return kbd;
}

function tableCreate(wl) {
    const body = document.body;

    const tbl = document.getElementById('h');
    tbl.replaceChildren([])
    // for (var i=0; i < tbl.childNodes; i++);
    // tbl.removeChild(tbl.childNodes[i]);

    //tbl.style.width = '100px';
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
