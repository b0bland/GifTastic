
var teams = ["Juventus", "Manchester United", "Ajax", "Villarreal", "Benfica"];


function displayTeamGIF () { 
$("#images").text("")

var search = $(this).attr("data-name")
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Vw9epddThJnMcOqUCvmhP6DvvalODALI&q=" + search + "&limit=10&rating=g"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var gifs = response.data
    for (var i=0;i<gifs.length;i++) {
        var teams = gifs[i].images.original.url;
        var teamsst = gifs[i].images.original_still.url;
        var rating = gifs[i].rating;
        $("#images").append(
            "<div class='card' style='width: 18rem;' id=image" + [i] + "><img src='" + teamsst + "' data-still='" + teamsst + "' data-animate='" + teams + "' data-state='still' height='200px' class='card-img-top' height='200px'><div class='card-body'><p class='card-text' id='rating'>Rating: " + rating + "</p></div></div>"
            )
        console.log(gifs)
    }
})
}

function renderButtons() {

    $("#buttons").empty();

    for (i=0;i<teams.length;i++) {
        var newButton = $("<button>")
        newButton.addClass("btn btn-group-small btn-info")
        newButton.attr("data-name",teams[i])
        newButton.text(teams[i])
        $("#buttons").append(newButton)
    }

}

$("#add-team").on("click", function(event) {
    event.preventDefault();

    var newTeam = $("#teamname").val().trim();

    teams.push(newTeam);

    renderButtons();

})


$(document).on("click",".btn-info",displayTeamGIF);

renderButtons();


$(document).on("click",".card-img-top", function() {
    
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("data-state", "animate");
      $(this).attr("src",$(this).attr("data-animate"));
    }
    else {
      $(this).attr("data-state", "still");
      $(this).attr("src",$(this).attr("data-still"));
    }
});