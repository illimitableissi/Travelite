var accessKey = "3f23404315a9a78edc99322fbaa1a422fa81490f52f7b014ef9bf328d1ad6033";
var city = "Atlanta";
var pictureURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${city}+city`;

$.ajax({
    url: pictureURL,
    method: "GET"
  }).then(function(response) {

    console.log(pictureURL);
    console.log(response);

    console.log(response.urls.regular);

  })