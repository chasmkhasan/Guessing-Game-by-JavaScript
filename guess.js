/* alert('test') */
let btnSubmit = document.getElementById('btnSubmit'); // submitt button
let output = document.getElementById('outputText'); // showing box
let outputList = document.getElementById('list'); // showing the list below

let btnPlayAgain = document.getElementById('btnPlayAgain'); // Play again button

let randomNumber = Math.ceil(Math.random()*100) + 1; // range max 100

let attempts = 0; // how many time you play

function checkNumber(){
    if(attempts<5){

        let input = parseInt(document.getElementById('userInput').value); //convert input to integer.
        if(input === randomNumber){ // winning part
            output.innerHTML="You guessed the right number"+ ", "+ " it was "+ randomNumber;
            output.style.color = "green"; // color change when it will show.
            outputList.innerHTML += "Matches number is " + input + "<br/>";
        }
        else if (input > randomNumber && input <= 100) {
            output.innerHTML="You need guess lower number ";
            output.style.color = "red";
            outputList.innerHTML += attempts+1  + ". " + " Too high - " + input + "<br/>";
        }
        else if (input < randomNumber && input >= 1){
            output.innerHTML="You need to guess higher number ";
            output.style.color = "blue";
            outputList.innerHTML += attempts+1 + ". " + " Too low - " + input + "<br/>";
        }
        else if (input <= 1){
            output.innerHTML="Inputed number is Out of range ";
            output.style.color = "aqua";
        }
        else if (isNaN(input)){
            output.innerHTML = "That's not a number ";
        }
        else {
            output.innerHTML = "You need to number between 1 - 100, try again ";
        }

        attempts++;   
    }
    else {
        output.innerHTML="You have lost 5 chances! Try again and click on PLAY AGAIN";
    }
}
    
btnSubmit.addEventListener("click",checkNumber);
btnPlayAgain.addEventListener("click", function(){
    location.reload();
});

/* function clickCounter() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You guessed " + localStorage.clickcount + " time(s).";
    }
} */

