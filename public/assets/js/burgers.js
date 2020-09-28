$(document).ready(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        // checks to see if anything was inputted when clicking submit
        if (!$("#burger-input").val()) {
            console.log("You did not enter a burger");
            return location.reload();
        }
        
        // new burger object
        var newBurger = {
          name: $("#burger-input").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("A new burger was created to be devoured!");
            location.reload();
          }
        );
    }); 

    $(".devourButton").on("click", function(event) {
        var id = event.target.id.trim();
        idSplit = id.split("-");
        idSplit = idSplit[1];
        var newDevoured = 1

        // object to reset from undevoured to devoured
        var newDevouredObj = {
          devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + idSplit, {
          type: "PUT",
          data: newDevouredObj
        }).then(
          function() {
            console.log("Burger has been devoured!", newDevoured);
            location.reload();
          }
        );
    });   
});