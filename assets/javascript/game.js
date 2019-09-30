// -----Crystal collector PseudoCode----
// Create html and css stylings for game based on demo **DONE
// Create variables for win, loss, random winning number, counter, random crystal numbers (3)
$(document).ready(function() {
var win = 0;    
var loss = 0;   
var counter = 0; 
var winningRandom= 0;
    console.log(winningRandom);  
// Call reset function at the beginning of the game to start the game
startOver()
// Create reset function that empties the score, goal and current sum
function startOver(){
    counter = 0; 
        $("#currentTotal").html(counter);
        // Need to randomly generate numbers for goal (math.floor) in an array between 19 - 120.
    winningRandom= Math.floor(Math.random()*102) + 19;
    // Display goal number in a div 
        $("#winningNumber").html(winningRandom);
// Create buttons for each crystal and assign it the image between 1 - 12
// Need to randomly generate numbers for crystals (4 different crystals)(math.floor)
    $("img").each(function(){
       var crystalValue= Math.floor(Math.random() * 12) + 1; 
       $(this).attr("value", crystalValue)
       console.log($(this).attr("id"), crystalValue);
    });
    
}       

// Create on click functions for each crystal button
$("img").on("click", function(){
        console.log(this);
    // Create a way to add the crystals together after user selects crystal 
    counter  += parseInt($(this).attr("value"))
        console.log("New score: "+ counter);
// User continues to click on crystal values until it equals or exceeds, winningNumber value
    $("#currentTotal").html(counter);
// Have current score display in a different div
        if (counter === winningRandom){
     // If user equals the goal number and the sum of the array --> winner, score goes up and game resets
             win ++;
                console.log("wins" + win);
            alert("You won!");
            $("#win").text(win);
             startOver();
    
 } 
 // If user exceeds goal numnber, loser and reset game
        if (counter > winningRandom){
            loss++;
                console.log("Loss" + loss);
             alert("You lost!");
             $("#loss").text(loss);
            startOver();
 }
});
});
