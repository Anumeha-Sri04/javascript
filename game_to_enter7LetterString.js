//a game where you will have to enter a 7 alphabets long string to win
let Userstr=prompt("enter your desired string without any gaps");
let size=Userstr.length;
while(size!=7)
{
    Userstr=prompt("OOPS!! Something is wrong with your string. Try again");
    size=Userstr.length;
   
}
console.log("CONGRATULATIONS! YOU'VE WON THE GAME ");
