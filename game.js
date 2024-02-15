//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];


//--step 4--
//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){

    // 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");

    // 4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);

    //  console.log(userClickedPattern);
    playSound(userChosenColour);

    animatePress(userChosenColour);

});

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {

  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

//   console.log(gamePattern);

  

  //--STEP 3
  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//   //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
  playSound(randomChosenColour);

  //--STEP 5 add sounds to button click
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


//--STEP 6--
//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


