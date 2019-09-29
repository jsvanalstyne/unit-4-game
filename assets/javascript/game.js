// -----Crystal collector PseudoCode----
// Create html and css stylings for game based on demo
// Create variables for win, loss, random winning number, random crystal numbers (3)
// Need to randomly generate numbers for goal (math.floor) in an array between 19 - 120.
// Display goal number in a div 
// Create buttons for each crystal and assign it the image between 1 - 12
// Need to randomly generate numbers for crystals (4 different crystals)(math.floor)
// Create on click functions for each crystal button
// Create a way to add the crystals together after user selects crystal (add numbers to an array and sum the number?)
// When user equals the goal number and the sum of the array --> winner, score goes up and game resets
// Have current score display in a different div
// If user exceeds goal numnber, loser and reset game
// Create reset function that empties the arrays (score, goal and current sum)
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript"> </script>

    // For each iteration, we will create an imageCrystal
    var silverCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    silverCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    silverCrystal.attr("src", "http://clipartmag.com/images/crystals-clipart-26.png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    // silverCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(silverCrystal);

  // This time, our click event applies to every single crystal on the page. Not just one.
//   $(".crystal-image").on("click", function() {
     
