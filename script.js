var humanScore = 0;
var compScore = 0;


function humanWeapon(parameter) {
    let humanChoice = "" + parameter + "";
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    console.log(options[random]);
    console.log(humanChoice)

    if (options[random] == humanChoice) {
        alert("It's a TIE!!!");
        winner = "Tie"
        checkScore()
    } else if (options[random] == "Rock" && humanChoice == "Scissors") {
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You LOSE!!!");
        compScore += 1
        checkScore()
    } else if (options[random] == "Rock" && humanChoice == "Paper") {
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You WIN!!!");
        humanScore += 1
        checkScore()
    } else if (options[random] == "Paper" && humanChoice == "Rock") {
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You LOSE!!!");
        compScore += 1
        checkScore()
    } else if (options[random] == "Paper" && humanChoice == "Scissors") {
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You WIN!!!")
        humanScore += 1
        checkScore()
    } else if (options[random] == "Scissors" && humanChoice == "Paper") {
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You LOSE!!!")
        compScore += 1
        checkScore()
    } else if (options[random] == "Scissors" && humanChoice == "Rock") {
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You WIN!!!")
        humanScore += 1
        checkScore()
    }
}

function checkScore() {
    if (humanScore != 5 && compScore != 5) {
        document.getElementById("theirScore").innerHTML = "Computer Score is " + compScore +"";
        document.getElementById("yourScore").innerHTML = "Your Score is " + humanScore +"";
    } else if (compScore == 5) {
        document.getElementById("theirScore").innerHTML = "Computer Score is " + compScore +"";
        document.getElementById("yourScore").innerHTML = "Your Score is " + humanScore +"";
        if (confirm('The Computer has defeated you in this match, they scored ' + compScore + ' against your score of ' + humanScore + 'would you like to play again?') == true){
            document.location.href = "/index.htm";
        }
        else {
            document.location.href = "/gameover.htm";
        }
   
    } else if (humanScore == 5) {
        document.getElementById("theirScore").innerHTML = "Computer Score is " + compScore +"";
        document.getElementById("yourScore").innerHTML = "Your Score is " + humanScore +"";
        if (confirm('WOOOOOHOOOOOO..... You have defeated the computer this match, they scored ' + compScore + ' against your score of ' + humanScore + 'would you like to play again?') == true){
            document.location.href = "/index.htm";
        }
        else {
            document.location.href = "/gameover.htm";
        }
   
}
}