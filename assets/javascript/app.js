
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
        var teams = gifs[i].images.original.url
        $("#images").append("<img src='" + teams + "'>")
    }
    
})


})