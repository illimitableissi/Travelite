
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

      console.log(response)
    });

    });
