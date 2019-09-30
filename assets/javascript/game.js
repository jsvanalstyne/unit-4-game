// -----Crystal collector PseudoCode----
// Create html and css stylings for game based on demo **DONE
// Create variables for win, loss, random winning number, counter, random crystal numbers (3)
$(document).ready(function() {
var win = 0;
var loss = 0;
var counter = 0; 
// Need to randomly generate numbers for goal (math.floor) in an array between 19 - 120.
var winningRandom= Math.floor(Math.random()*102) + 19;
console.log(winningRandom);  
// Create buttons for each crystal and assign it the image between 1 - 12
// Need to randomly generate numbers for crystals (4 different crystals)(math.floor)
var silverCrystal = Math.floor(Math.random() * 12) + 1; 
console.log("Silver Crystal:" + silverCrystal);
    $("#silverCrystal").html("<img src=" + "assets/images/silvercrystal.png" + " value=" + silverCrystal + ">");
var greenCrystal = Math.floor(Math.random() * 12) + 1; 
    console.log("Green Crystal:" + greenCrystal);
    $("#greenCrystal").html("<img src=" + "assets/images/greencrystal.png" + " value=" + greenCrystal + ">");
var redCrystal = Math.floor(Math.random() * 12) + 1; 
    console.log("Red Crystal:" + redCrystal);
     $("#redCrystal").html("<img src=" + "assets/images/redcrystal.png" + " value=" + redCrystal + ">");
var blueCrystal = Math.floor(Math.random() * 12) + 1; 
console.log("Blue Crystal:" + blueCrystal);
    $("#blueCrystal").html("<img src=" + "assets/images/bluecrystal.png" + " value=" + blueCrystal + ">");

// Create reset function that empties the score, goal and current sum
function startOver(){
win = 0;
loss = 0;
counter = 0; 
$("#currentTotal").html(counter);
winningRandom= Math.floor(Math.random()*102) + 19;
$("#winningNumber").html(winningRandom);
silverCrystal = Math.floor(Math.random() * 12) + 1; 
console.log("Silver Crystal:" + silverCrystal);
    $("#silverCrystal").html("<img src=" + "assets/images/silvercrystal.png" + " value=" + silverCrystal + ">");
greenCrystal = Math.floor(Math.random() * 12) + 1; 
    console.log("Green Crystal:" + greenCrystal);
    $("#greenCrystal").html("<img src=" + "assets/images/greencrystal.png" + " value=" + greenCrystal + ">");
redCrystal = Math.floor(Math.random() * 12) + 1; 
    console.log("Red Crystal:" + redCrystal);
     $("#redCrystal").html("<img src=" + "assets/images/redcrystal.png" + " value=" + redCrystal + ">");
blueCrystal = Math.floor(Math.random() * 12) + 1; 
console.log("Blue Crystal:" + blueCrystal);
    $("#blueCrystal").html("<img src=" + "assets/images/bluecrystal.png" + " value=" + blueCrystal + ">");
$("img").on("click", function(){
        console.log(this);
        // Create a way to add the crystals together after user selects crystal 
    var userScore = counter  += parseInt($(this).attr("value"))
    console.log("New score: "+ userScore);
    // User continues to click on crystal values until it equals or exceeds, winningNumber value
    $("#currentTotal").html(userScore);
    // Have current score display in a different div
     if (userScore ===winningRandom){
         // If user equals the goal number and the sum of the array --> winner, score goes up and game resets
         win ++;
         alert("You won!");
         startOver();
        
     } 
     // If user exceeds goal numnber, loser and reset game
     if (userScore> winningRandom){
         loss ++;
         alert("You lost!");
         startOver();
     }
    });

}
        
// Display goal number in a div 
$("#winningNumber").html(winningRandom);
// Create on click functions for each crystal button
$("img").on("click", function(){
    console.log(this);
    // Create a way to add the crystals together after user selects crystal 
var userScore = counter  += parseInt($(this).attr("value"))
console.log("New score: "+ userScore);
// User continues to click on crystal values until it equals or exceeds, winningNumber value
$("#currentTotal").html(userScore);
// Have current score display in a different div
 if (userScore ===winningRandom){
     // If user equals the goal number and the sum of the array --> winner, score goes up and game resets
     win ++;
     alert("You won!");
     startOver();
    
 } 
 // If user exceeds goal numnber, loser and reset game
 if (userScore> winningRandom){
     loss ++;
     alert("You lost!");
     startOver();
 }
});


});
