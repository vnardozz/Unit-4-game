$(document).ready(function () {

    var targetNumber = Math.floor((Math.random() * 120) + 19);
    $("#number-to-guess").html(targetNumber);
    var gems = $("#gems");
    var counter = 0;
    var wins = 0;
    var losses = 0;

    
        var userOptions = [Math.floor((Math.random() * 12) + 1),
        Math.floor((Math.random() * 12) + 1),
        Math.floor((Math.random() * 12) + 1),
        Math.floor((Math.random() * 12) + 1)
    ];
    
    var imgArray = ["assets/images/blue-gem.png", "assets/images/green-gem.png", "assets/images/purple-gem.png", "assets/images/red-gem.png"]

    var idArray = ["blue", "green", "purple", "red"];

    function startPics() {

    for (var i = 0; i < userOptions.length; i++) {
        var imageCrystal = $(".img");

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("id", idArray[i]);
            
        imageCrystal.attr("src", imgArray[i]);

        imageCrystal.attr("data-crystalvalue", userOptions[i]);


        gems.append(imageCrystal);
    }
}
startPics()


function resetValues () {
    var userOptions = [Math.floor((Math.random() * 12) + 1),
        Math.floor((Math.random() * 12) + 1),
        Math.floor((Math.random() * 12) + 1),
        Math.floor((Math.random() * 12) + 1)
    ];
    for (var i = 0; i< userOptions.length; i++){
        var imageCrystal = $("#" + idArray[i])
        imageCrystal.attr("data-crystalvalue", userOptions[i]);

        
    }
    
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
            counter = 0;
            targetNumber = Math.floor((Math.random() * 120) + 19);
            $("#number-to-guess").html(targetNumber);
            // $("#user-total").html(counter)
            document.getElementById("user-total").innerText = counter;
            resetValues ()




        }

         if (counter > targetNumber) {
            alert("You lose!!");
            losses++
            counter = 0;
            targetNumber = Math.floor((Math.random() * 120) + 19);
            $("#number-to-guess").html(targetNumber);
            // $("#user-total").html(counter)
            document.getElementById("user-total").innerText = counter;
            resetValues ()
        }
    
        

         


        var html =
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>"

        document.querySelector("#W_L").innerHTML = html;

    })

});