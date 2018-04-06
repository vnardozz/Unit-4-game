$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 50);
    $("#number-to-guess").html(targetNumber);
    var gems = $("#gems");
    var counter = 0;
    var wins = 0;
    var losses = 0;

    var userOptions = [ Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    
    var imgArray = ["assets/images/blue-gem.png", "assets/images/green-gem.png", "assets/images/purple-gem.png", "assets/images/red-gem.png"]

        
    for (var i = 0; i < userOptions.length; i++) {
        var imageCrystal = $(".img");

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", imgArray[i]);

        imageCrystal.attr("data-crystalvalue", userOptions[i]);


        gems.append(imageCrystal);
    }


    gems.on("click", ".crystal-image", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $("#user-total").text(counter);

        if (counter === targetNumber) {
            alert("You win!");
            wins++
            crystalValue = "";
            targetNumber = Math.floor(Math.random() * 50);
            $("#number-to-guess").html(targetNumber);
            counter = 0;

            console.log(targetNumber)

        }

        if (counter > targetNumber) {
            alert("You lose!!");
            losses++
            counter = 0;
            targetNumber = Math.floor(Math.random() * 50);
            $("#number-to-guess").html(targetNumber);

            document.getElementById("user-total").html("fgouggfsg")
        }


        var html =
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>"

        document.querySelector("#W_L").innerHTML = html;

    })

});