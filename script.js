var humanScore=0;
var computerScore=0;


/*// get randomized computer choice
function computerWeapon() {
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    console.log(random, options[random]);
    }



    const random = Math.floor(Math.random() * months.length);
    console.log(random, months[random]);
*/

//function to catch the users choice
function humanWeapon(parameter) {
    if (humanScore < 5 || computerScore < 5)  {
        let humanChoice = "" + parameter + "";
        const options = ["Rock", "Paper", "Scissors"];
        const random = Math.floor(Math.random() * options.length);
        console.log(options[random]);
        console.log(humanChoice)

/*
    if (computerChoice == humanChoice){
        alert("It's a TIE!!!");
        winner = "Tie"
 
    }
    else if (computerChoice == "Rock" && humanChoice == "Scissors"){
        alert("You Chose " + humanChoice + " and the computer chose " + computerChoice + "....You LOSE!!!");
        winner = "Computer"
 
    }
    else if (computerChoice == "Rock" && humanChoice == "Paper"){
        alert("You Chose " + humanChoice + " and the computer chose " + computerChoice + "....You WIN!!!");
        winner = "Human"
 
    }
    else if (computerChoice == "Paper" && humanChoice == "Rock"){
        alert("You Chose " + humanChoice + " and the computer chose " + computerChoice + "....You LOSE!!!");
        winner = "Computer"
 
    }
    else if (computerChoice == "Paper" && humanChoice == "Scissors"){
        alert("You Chose " + humanChoice + " and the computer chose " + computerChoice + "....You WIN!!!")
        winner = "Human"
 
    }
    else if (computerChoice == "Scissors" && humanChoice == "Paper"){
        alert("You Chose " + humanChoice + " and the computer chose " + computerChoice + "....You LOSE!!!")
        winner = "Computer"
 
    }
    else if (computerChoice == "Scissors" && humanChoice == "Rock"){
        alert("You Chose " + humanChoice + " and the computer chose " + computerChoice + "....You WIN!!!")
        winner = "Human"
 
    } 
}
    }

*/
