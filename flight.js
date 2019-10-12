var settings = {
    async: true,
    crossDomain: true,
    url:
      "http://api.travelpayouts.com/v1/prices/monthly?currency=USD" +
      "&origin=" + "ATL" +
      //"&origin=" + document.getElementById("origin-airport").value +
      //"&origin=" + $("#origin-airport") +
      "&destination=" + "LAX" + "&token=15b8d8251f337fc45164a04b18f5025a",
    method: "GET"
   };
   $.ajax(settings).done(function(response) {
    console.log(response);
    var data = response.data;

    console.log(data);

    // var myTable = "<tr><td>Flight Number</td><td>Destination</td><td>Price</td><td>Departs</td><td>Arrives</td><td>Airline</td></tr>";

    myTable = appendMonthData(myTable, data["2019-10"]);
    myTable = appendMonthData(myTable, data["2019-11"]);
    myTable = appendMonthData(myTable, data["2019-12"]);
    myTable = appendMonthData(myTable, data["2020-01"]);
    var myDisplayArea = $("#travel-api-results");
    myDisplayArea.html(myTable);
   });
   function appendMonthData(myTableString, myMonthlyDataToAppend)
   {
    var departureTime = moment(myMonthlyDataToAppend.departure_at);
    var returnTime = moment(myMonthlyDataToAppend.return_at);

    myTableString = myTableString +
      "<tr><td>" + myMonthlyDataToAppend.flight_number + "</td>" +
      "<td>" + myMonthlyDataToAppend.destination + "</td>" +
      "<td>" + "$" + myMonthlyDataToAppend.price + "</td>" +
      "<td>" + departureTime.format('MMMM Do YYYY, h:mm A') + "</td>" +
      "<td>" + returnTime.format('MMMM Do YYYY, h:mm A') + "</td>" +
      "<td>" + myMonthlyDataToAppend.airline + "</td>" + "</tr>";
    return myTableString;
    }