$(document).ready(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        if (!$("#burger-input").val()) {
            console.log("You did not enter a burger");
            return location.reload();
        }
    
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
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    }); 

    $(".devourButton").on("click", function(event) {
        var id = event.target.id.trim();
        idSplit = id.split("-");
        idSplit = idSplit[1];
        var newDevoured = 1
        console.log(event);
        var newDevouredObj = {
          devoured: newDevoured
        };
        console.log(id)
        // Send the PUT request.
        $.ajax("/api/burgers/" + idSplit, {
          type: "PUT",
          data: newDevouredObj
        }).then(
          function() {
            console.log("burger is now devoured!", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });   
});