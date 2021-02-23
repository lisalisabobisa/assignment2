let coinFlip = Math.round(Math.random());
let choice = window.prompt("Select heads or tails");
console.log(coinFlip);

if (choice === "heads") { 
    if (coinFlip < 10) {
        document.write("The flip was heads and you chose heads...you win!");
    } else if (coinFlip >= 10) {
        document.write("The flip was heads and you chose tails...you lose!");
    }
} else if (choice === "tails") { 
    if (coinFlip >= 10) {
        document.write("The flip was tails and you chose tails...you win!");
    } else if (coinFlip < 10) {
        document.write("The flip was tails and you chose heads...you lose!");
    }
}