{/* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}




// -----Crystal collector PseudoCode----
// Create html and css stylings for game based on demo **DONE
// Create variables for win, loss, random winning number, counter, random crystal numbers (3)
// $(document).ready(function() {
var win = 0;
var loss = 0;
var counter = 0; 
// Need to randomly generate numbers for goal (math.floor) in an array between 19 - 120.
var winningRandom= Math.floor(Math.random()*102) + 19;
console.log(winningRandom);  
// Create buttons for each crystal and assign it the image between 1 - 12
// Need to randomly generate numbers for crystals (4 different crystals)(math.floor)
var silverCrystal = Math.floor(Math.random()*12) + 1;
console.log(silverCrystal);
var greenCrystal = Math.floor(Math.random()*12) + 1;
console.log(greenCrystal);
var redCrystal = Math.floor(Math.random()*12) + 1;
console.log(redCrystal);
var blueCrystal = Math.floor(Math.random()*12) + 1;
console.log(blueCrystal);
// Display goal number in a div 
// $("#winningNumber").html(winningRandom);
// Create on click functions for each crystal button
$("#greenCrystal").on("click", function(){
counter += greenCrystal;
});
$("#silverCrystal").on("click", function(){
counter += silverCrystal;
});
$("#redCrystal").on("click", function(){
counter += redCrystal;
});
$("#blueCrystal").on("click", function(){
counter += blueCrystal;
});

// Create a way to add the crystals together after user selects crystal (add numbers to an array and sum the number?)
// When user equals the goal number and the sum of the array --> winner, score goes up and game resets
// Have current score display in a different div
// If user exceeds goal numnber, loser and reset game
// Create reset function that empties the arrays (score, goal and current sum)


