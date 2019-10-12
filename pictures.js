$("#search-button").on("click", function(event) {
  event.preventDefault();
  $(".images").empty();
 

var accessKey = "13904736-af373ef91e779b4a5ced60328";
var city = $("#destination-city").val();
var pictureURL = `https://pixabay.com/api/?key=${accessKey}&q=${city}+city&image_type=photo&per_page=3`;

$.ajax({
    url: pictureURL,
    method: "GET"
  }).then(function(response) {

    console.log(pictureURL);
    console.log(response);

    for (let i = 0; i < response.hits.length; i++) {

      console.log(response.hits[i].webformatURL);

      var newImg = $("<img>");
      newImg.attr("src", response.hits[i].webformatURL)
      $(".images").append(newImg);
      
    }

  })

})