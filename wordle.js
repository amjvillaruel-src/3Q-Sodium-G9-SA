var validWords = [
    "acorn", "adobe", "alter", "blent", "beaux", "beryl", 
    "cabin", "phone", "chasm", "decoy", "dimes", "epics", 
    "epoch", "flare", "genus", "feign", "fangs", "eclat", 
    "grime", "ivory", "ingot", "feast", "largo", "mares",
    "milch", "mules", "opium", "naive", "novel", "niche",
    "poker", "ratio", "raven", "realm", "sable", "scour", 
    "shift", "sigma", "sheik", "thyme", "gleam", "widen", 
    "wicks", "usher", "yield", "zones", "abode", "axiom", 
    "barge", "comet", "hater", "havoc", "piano", "tiger"
];

//randomselect
let answer = validWords[Math.floor(Math.random() * validWords.length)];

// count ug row
let currentRow = 0;
function setupGame() {
    // check initial empty cell or box
    document.getElementById("r-0-0").innerText = "";
    document.getElementById("r-0-1").innerText = "";
    document.getElementById("r-0-2").innerText = "";
    document.getElementById("r-0-3").innerText = "";
    document.getElementById("r-0-4").innerText = "";

    document.getElementById("r-1-0").innerText = "";
    document.getElementById("r-1-1").innerText = "";
    document.getElementById("r-1-2").innerText = "";
    document.getElementById("r-1-3").innerText = "";
    document.getElementById("r-1-4").innerText = "";

    document.getElementById("r-2-0").innerText = "";
    document.getElementById("r-2-1").innerText = "";
    document.getElementById("r-2-2").innerText = "";
    document.getElementById("r-2-3").innerText = "";
    document.getElementById("r-2-4").innerText = "";

    document.getElementById("r-3-0").innerText = "";
    document.getElementById("r-3-1").innerText = "";
    document.getElementById("r-3-2").innerText = "";
    document.getElementById("r-3-3").innerText = "";
    document.getElementById("r-3-4").innerText = "";

    document.getElementById("r-4-0").innerText = "";
    document.getElementById("r-4-1").innerText = "";
    document.getElementById("r-4-2").innerText = "";
    document.getElementById("r-4-3").innerText = "";
    document.getElementById("r-4-4").innerText = "";
}

function checkWord() {
    let guessedWord = prompt("Enter a 5-letter word:"); 
    guessedWord = guessedWord ? guessedWord.toLowerCase() : "";  // convert

    // validation
    if (guessedWord.length !== 5 || new Set(guessedWord).size !== 5 || !/[a-z]{5}$/.test(guessedWord)) {
        alert("Please enter a valid 5-letter word.");
        return;
    }


    // compare letters to answer
    let result = ["", "", "", "", ""]; //store

    // first check
    if (guessedWord[0] === answer[0]) result[0] = "#108a0a";
    if (guessedWord[1] === answer[1]) result[1] = "#108a0a";
    if (guessedWord[2] === answer[2]) result[2] = "#108a0a";
    if (guessedWord[3] === answer[3]) result[3] = "#108a0a";
    if (guessedWord[4] === answer[4]) result[4] = "#108a0a";

    // second check
    if (result[0] === "" && answer.includes(guessedWord[0])) result[0] = "#b5b209";
    if (result[1] === "" && answer.includes(guessedWord[1])) result[1] = "#b5b209";
    if (result[2] === "" && answer.includes(guessedWord[2])) result[2] = "#b5b209";
    if (result[3] === "" && answer.includes(guessedWord[3])) result[3] = "#b5b209";
    if (result[4] === "" && answer.includes(guessedWord[4])) result[4] = "#b5b209";

    // color assign chuchu basta
    document.getElementById("r-" + currentRow + "-0").style.backgroundColor = getColor(result[0]);
    document.getElementById("r-" + currentRow + "-1").style.backgroundColor = getColor(result[1]);
    document.getElementById("r-" + currentRow + "-2").style.backgroundColor = getColor(result[2]);
    document.getElementById("r-" + currentRow + "-3").style.backgroundColor = getColor(result[3]);
    document.getElementById("r-" + currentRow + "-4").style.backgroundColor = getColor(result[4]);

    document.getElementById("r-" + currentRow + "-0").innerText = guessedWord[0].toUpperCase();
    document.getElementById("r-" + currentRow + "-1").innerText = guessedWord[1].toUpperCase();
    document.getElementById("r-" + currentRow + "-2").innerText = guessedWord[2].toUpperCase();
    document.getElementById("r-" + currentRow + "-3").innerText = guessedWord[3].toUpperCase();
    document.getElementById("r-" + currentRow + "-4").innerText = guessedWord[4].toUpperCase();

    // double checker if its correct
    if (result.every(color => color === "##108a0a")) {
        alert("Congratulations! You've guessed the word!");
        return; // end na finally!!!
    }

    if (currentRow < 4) {
        currentRow++;
    } else {
        alert(`Game Over! The correct word was ${answer.toUpperCase()}`);
        setTimeout(()=> {
            return alert("Want to play again? Refresh the page!");
        },500);//cause delay after the 1st alert
        return;
    }

}

function getColor(status) {
    if (status === "#108a0a") {
        return "#108a0a";
    } else if (status === "#b5b209") {
        return "#b5b209";
    } else {
        return "#adaaaa";
    }
}
