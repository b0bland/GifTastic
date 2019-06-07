
var teams = ["Juventus", "Manchester United", "Ajax"];


function displayTeamInfo () { 
event.preventDefault();
$("#images").text("")

var search = $(this).attr("data-name")
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Vw9epddThJnMcOqUCvmhP6DvvalODALI&q=" + search + "&limit=10"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var gifs = response.data
    for (var i=0;i<gifs.length;i++) {
        var teams = gifs[i].images.original.url;
        var rating = gifs[i].rating;
        $("#images").append(
            "<div class='card' style='width: 18rem;' id=image" + [i] + "><img src='" + teams + "' height='200px' class='card-img-top' height='200px'><div class='card-body'><p class='card-text' id='rating'>Rating: " + rating + "</p></div></div>"
            )
        console.log(gifs)
    }
})
}

function renderButtons() {

    $("#buttons").empty();

    for (i=0;i<teams.length;i++) {
        var newButton = $("<button>")
        newButton.addClass("btn", "btn-group-small", "btn-info")
        newButton.attr("data-name",teams[i])
        newButton.text(teams[i])
        $("#buttons").append(newButton)
    }

}



// function renderButtons() {
//     for (n=0;n<teams.length;n++) {
//         $("#buttons").append()
//     }
// }