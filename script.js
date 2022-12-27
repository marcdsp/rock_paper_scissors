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

    if (options[random] == humanChoice){
        alert("It's a TIE!!!");
        winner = "Tie"
 
    }
    else if (options[random] == "Rock" && humanChoice == "Scissors"){
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You LOSE!!!");
        winner = "Computer"
 
    }
    else if (options[random] == "Rock" && humanChoice == "Paper"){
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You WIN!!!");
        winner = "Human"
 
    }
    else if (options[random] == "Paper" && humanChoice == "Rock"){
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You LOSE!!!");
        winner = "Computer"
 
    }
    else if (options[random] == "Paper" && humanChoice == "Scissors"){
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You WIN!!!")
        winner = "Human"
 
    }
    else if (options[random] == "Scissors" && humanChoice == "Paper"){
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You LOSE!!!")
        winner = "Computer"
 
    }
    else if (options[random] == "Scissors" && humanChoice == "Rock"){
        alert("You Chose " + humanChoice + " and the computer chose " + options[random] + "....You WIN!!!")
        winner = "Human"
 
    } 
}
    }

