//creating a game where user guesses the game number 
let GameNum=14;
let Usernum=prompt("guess the game number");
while(Usernum!=GameNum)
{
    Usernum=prompt("You guessed the wrong number.Guess the game number again"); 
}
console.log("Congratulations.You've guessed the right game number");