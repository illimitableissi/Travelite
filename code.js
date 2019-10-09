var settings = {
  crossDomain: true,
  headers: {
    "x-access-token": "15b8d8251f337fc45164a04b18f5025a"
  },
  url: "http://api.travelpayouts.com/v1/prices/cheap?origin=ATL&destination=LAX&depart_date=2019-10&return_date=2019-10&token=15b8d8251f337fc45164a04b18f5025a",
  method: "GET"
};
$.ajax(settings)
  .then(function(response) {
    debugger;
    console.log(response);
    //   var priceRubles = response.data;
    //   console.log(priceRubles);
    //   var priceDollars = Math.floor(priceRubles * 0.01539);
    //   var $card = $(".card-title");
    //   $card.text("$" + priceDollars + " USD");
    //   console.log(`The price of the flight is $${priceDollars} USD`);
  })
  .fail(err => console.log(err));
