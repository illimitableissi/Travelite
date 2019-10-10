
      var city = "Los Angeles"
      var apikey = "35fHUKKIy6l510Zqvev07zXAUSKmCzDr"
      var accuweatherUrl = `https://dataservice.accuweather.com/locations/v1/search?q=${city}&apikey=${apikey}`


      $.ajax({
      url: accuweatherUrl,
      method: "GET"
    }).then(function(response) {

      // Create CODE HERE to Log the queryURL
   console.log(accuweatherUrl)   
      // Create CODE HERE to log the resulting object
  console.log(response[0].Key)



  var locationKey = response[0].Key
  console.log(locationKey)

  var apiKeyTwo = "X2rdzsva8JGHE2zQQWVylD6Gr7kE8Wpe"
  var forecastUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKeyTwo}`

  console.log(forecastUrl)
  $.ajax({
      url: forecastUrl,
      method: "GET"
    }).then(function(response) {

      console.log(response.DailyForecasts)

      var dailyForecasts = response.DailyForecasts


for (var i = 0; i < dailyForecasts.length; i++) {
    
console.log(dailyForecasts[i].Temperature.Maximum.Value)
console.log(dailyForecasts[i].Temperature.Minimum.Value)
console.log(dailyForecasts[i].Day.IconPhrase)
console.log(dailyForecasts[i].Date)

newDiv = $("<div>")
newDiv.addClass("card #4db6ac teal lighten-2");
var p = $("<h5>");
p.append(dailyForecasts[i].Day.IconPhrase)
var p2 = $("<h6>")
p2.append("High: " + dailyForecasts[i].Temperature.Maximum.Value + " F")
var p3 = $("<h6>")
p3.append("Low: " + dailyForecasts[i].Temperature.Minimum.Value + " F")
newDiv.append(p);
newDiv.append(p2);
newDiv.append(p3)
var weatherInfo = $("#weather-info")
weatherInfo.append(newDiv)
}


});
    });
