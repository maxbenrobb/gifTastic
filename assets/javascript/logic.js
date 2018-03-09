
//initial array of buttons
var topics = ["Cats", "Dogs", "Monkeys"]
console.log(topics);

//function for displaying movie buttons
function renderButtons(){
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("gif");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#gif-buttons").append(a);
    }
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    topics.push(gif);
    var a = $("<button>");
        a.addClass("gif");
        a.attr("data-name", gif);
        a.text(gif);
        $("#gif-buttons").append(a);
        initializeButton();
});           
renderButtons();

initializeButton();

function initializeButton() {
$("button").on("click", function() {
    var gifType = $(this).attr("data-name");
    console.log(gifType);

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifType + "&api_key=b1fXisc3fwrQJ2DnSiTIbnnLSpaUMdPl";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $.each(response.data, function(k, v) {
        console.log(v);
        var image = v.images.downsized;
        var a = $("<img>");
            a.attr("src", image.url);
            a.attr("height", image.height);
            a.attr("width", image.width);
        var rating = v.rating;
        var r = $("<p>");
            r.text(rating)
        $("#gif-images").prepend(a, r);
    });
});
});

}
