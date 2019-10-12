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
    var myTable = "<tr><td>Flight Number</td><td>Price</td><td>Departs</td><td>Arrives</td></tr>";
    myTable = appendMonthData(myTable, data["2019-10"]);
    myTable = appendMonthData(myTable, data["2019-11"]);
    myTable = appendMonthData(myTable, data["2019-12"]);
    myTable = appendMonthData(myTable, data["2020-01"]);
    var myDisplayArea = $("#travel-api-display");
    myDisplayArea.append(myTable);
   });
   function appendMonthData(myTableString, myMonthlyDataToAppend)
   {
    myTableString = myTableString +
      "<tr><td>" + myMonthlyDataToAppend.flight_number + "</td>" +
      "<td>" + "$" + myMonthlyDataToAppend.price + "</td>" +
      "<td>" + myMonthlyDataToAppend.departure_at + "</td>" +
      "<td>" + myMonthlyDataToAppend.return_at + "</td>" + "</tr>";
    return myTableString;
    }