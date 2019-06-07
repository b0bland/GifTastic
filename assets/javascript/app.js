
$("button").on("click", function () { 
event.preventDefault();

var search = "Juventus"
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
})

// .append(
// "<div class='card' style='width: 18rem;' id=image" + [i] + ">><img src='" + teams + "' height='200px' class='card-img-top' height='200px'><div class='card-body'><p class='card-text' id='rating'>Rating: " + rating + "</p></div></div>"
// )