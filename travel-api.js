$("#search-button").on("click", function(event) {
    event.preventDefault();
    $("#travel-api-results").empty()
    var originCity = $("#origin-city").val();
    var destinationCity = $("#destination-city").val();

var originCityConvert = {
  async: true,
  crossDomain: true,
  url: `http://autocomplete.travelpayouts.com/places2?term=${originCity}&locale=en&types[]=city`,
  method: "GET"
};

$.ajax(originCityConvert).done(function(response) {

  console.log(response[0].code);
  var originCityCode = response[0].code;

  var destinationCityConvert = {
    async: true,
    crossDomain: true,
    url: `http://autocomplete.travelpayouts.com/places2?term=${destinationCity}&locale=en&types[]=city`,
    method: "GET"
  };
  
  $.ajax(destinationCityConvert).done(function(response) {
  
    console.log(response[0].code);
    var destinationCityCode = response[0].code;

    var flightTicketsAPI = {
        async: true,
        crossDomain: true,
        url:
          `http://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=${originCityCode}&destination=${destinationCityCode}&token=15b8d8251f337fc45164a04b18f5025a`,
        method: "GET"
      };
      
      $.ajax(flightTicketsAPI).done(function(response) {
        console.log(response);
        var data = response.data;
        console.log(data);
        var result = Object.keys(data).map(function(key) {
          return [Number(key), data[key]];
        })
        console.log(result);
      
        var myTable = "<tr><td>Flight Number</td><td>Destination</td><td>Price</td><td>Departs</td><td>Arrives</td><td>Airline</td></tr>";

        $("#travel-api-results").append(myTable);
      
        var i = 0;
        while (i < result.length) {
          console.log(`${result.length} flights returned`);
          var flightPrices = result[i]["1"].price;
      
          console.log(flightPrices);
      
          var newTableRow = $("<tr>");
      
          var flightNumber = $("<td>");
          var destination = $("<td>");
          var price = $("<td>");
          var departure = $("<td>");
          var arrival = $("<td>");
          var airline = $("<td>");
      
          var departureTime = moment(result[i]["1"].departure_at);
          var returnTime = moment(result[i]["1"].return_at);
      
          flightNumber.html(result[i]["1"].flight_number)
          destination.html(result[i]["1"].destination)
          price.html("$" + result[i]["1"].price)
          departure.html(departureTime.format('MMMM Do YYYY, h:mm A'))
          arrival.html(returnTime.format('MMMM Do YYYY, h:mm A'))
          airline.html(result[i]["1"].airline)
      
          newTableRow.append(flightNumber)
          newTableRow.append(destination)
          newTableRow.append(price)
          newTableRow.append(departure)
          newTableRow.append(arrival)
          newTableRow.append(airline)
      
          $("#travel-api-results").append(newTableRow);
      
      
          i++;
        }

      })
  
  })

})
})