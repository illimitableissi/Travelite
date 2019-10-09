var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/?destination=ATL&origin=LAX",
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
    "x-rapidapi-key": "c6133bf5c4msh6e25171d00ff6f5p1d19fbjsn05887a4d5fe0",
    "x-access-token": "15b8d8251f337fc45164a04b18f5025a"
  }
};

$.ajax(settings).done(function(response) {
  console.log(response);
});

 var accuWeatherAPI = "35fHUKKIy6l510Zqvev07zXAUSKmCzDr";
 var accuWeatherUrl = "http://dataservice.accuweather.com/locations/v1/search?q=Atlanta&&apikey=" + accuWeatherAPI +

$.ajax({
  url: accuWeatherUrl,
  method: "GET"
}).then(function(response) {
  console.log(response);
});