//set global score variables
var humanScore = 0;
var compScore = 0;


//onclick in HTML triggers the game by passing a parameter to this function, it then checks against a random computer choice to decide who wins the game. After a winner is chosen the checkscore function is invoked
function playGame(parameter) {
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

//function to check score, print it to html and announce champion once they reach 5. If they choose to play again the page reloads, if they cancel or close dialog they are redirected to the gamover page
function checkScore() {
    if (humanScore != 3 && compScore != 3) {
        document.getElementById("theirScore").innerHTML = "Computer Score is " + compScore + "";
        document.getElementById("yourScore").innerHTML = "Your Score is " + humanScore + "";
    } else if (compScore == 3) {
        document.getElementById("theirScore").innerHTML = "Computer Score is " + compScore + "";
        document.getElementById("yourScore").innerHTML = "Your Score is " + humanScore + "";
        if (confirm('The Computer has defeated you in this match, they scored ' + compScore + ' against your score of ' + humanScore + ' would you like to play again?') == true) {
            document.location.href = "/rock_paper_scissors/index.htm";
        } else {
            document.location.href = "/rock_paper_scissors/gameover.htm";
        }

    } else if (humanScore == 3) {
        document.getElementById("theirScore").innerHTML = "Computer Score is " + compScore + "";
        document.getElementById("yourScore").innerHTML = "Your Score is " + humanScore + "";
        if (confirm('WOOOOOHOOOOOO..... You have defeated the computer this match, they scored ' + compScore + ' against your score of ' + humanScore + ' would you like to play again?') == true) {
            document.location.href = "/rock_paper_scissors/index.htm";
        } else {
            document.location.href = "/rock_paper_scissors/gameover.htm";
        }

    }
}