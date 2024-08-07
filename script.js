var h1 = document.getElementById("h1");
var clickBtn = document.getElementById("button");

function newTitle(){
    console.log("yo");
    if (h1.innerHTML === "") {
        h1.innerText = ("Welcome")
    } else if (h1.innerHTML === "Welcome") {
        h1.innerHTML = ("Bye");
    }; 
}

// clickBtn.addEventListener("click", function(){
//     console.log(randomNumber);
//     console.log(roundRandomNumber);
// });

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
var automatedAnswer =
    "Your account # is " + (isUserValid(false) ? "1234" : "Access denied")

function moveCommand (direction) {
    var whathappens; 
    switch (direction) {
        case "forward":
            whathappens = "you encounter a monser";
            break;
        case "back":
            whathappens = "you arrived home";
            break;
        case "right":
            whathappens = "you found a river";
            break;
        case "left": 
            whathappens = "you run into a troll"
            break;
        default:
            whathappens = "please enter a valid direction";
    }
    return whathappens;
}

clickBtn.addEventListener("click", function(){
    var randomNumber = Math.random() * 5;
    var roundRandomNumber = Math.round(randomNumber);
    h1.innerText = (diceRoll(roundRandomNumber));
});


// var randomNumber = Math.random() * 6;
// var roundRandomNumber = Math.round(randomNumber);

function diceRoll(number){
    var popUp;
    switch(number) {
        case 0:
            popUp = "1! HAHAHA, you're not winning anytime soon";
            break;
        case 1:
            popUp = "2! Well, atleast you're not the worst" 
            break;
        case 2:
            popUp = "3! Halfway there now son. You're only half bad"
            break;
        case 3:
            popUp = "4! You're officially better than 50%, keep on!"
            break;
        case 4:
            popUp = "5! It's a long way to the top if you wanna rock n' roll!"
            break;
        case 5:
            popUp = "666!!! Daaaaaaaamn"
            break;
    }
    return popUp;
}