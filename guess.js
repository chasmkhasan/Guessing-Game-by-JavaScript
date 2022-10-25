/* alert('test') */
var btnSubmit = document.getElementById('btnSubmit');
var btnPlayAgain = document.getElementById('btnPlayAgain');
var output = document.getElementById('outputText');
var outputList = document.getElementById('list');

var randomNumber = Math.ceil(Math.random()*100) + 1;

function checkNumber(){
    var input = parseInt(document.getElementById('userInput').value);
    if(input === randomNumber){
        output.innerHTML="You guessed the right number "+ ", "+ " it was "+ randomNumber;
        output.style.color = "green";
        outputList.innerHTML += "Matches number is " + input + "<br/>";
    }
    else if (input > randomNumber && input <= 100) {
        output.innerHTML="You guessed too high ";
        output.style.color = "red";
        outputList.innerHTML += "Too high " + input + "<br/>";
    }
    else if (input < randomNumber && input >= 1){
        output.innerHTML="You guessed too low ";
        output.style.color = "blue";
        outputList.innerHTML += "Too low is " + input + "<br/>";
    }
    else if (input <= 1){
        output.innerHTML="Inputed number is Out of range ";
        output.style.color = "aqua";
    }
    else if (isNaN(input)){
        output.innerHTML = "That's not a number ";
    }
    else {
        output.innerHTML = "Something is wrong, try again ";
    }
    
}
btnSubmit.addEventListener("click",checkNumber);
btnPlayAgain.addEventListener("click", function(){
    location.reload();
});

