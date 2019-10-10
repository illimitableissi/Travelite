var settings = {
  async: true,
  crossDomain: true,
  url:
  "http://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=ATL&destination=LAX&token=15b8d8251f337fc45164a04b18f5025a"t 
  method: "GET",
};
$.ajax(settings).done(function(response) {
  console.log(response); 
  var priceRubles = response.data;
  console.log(priceRubles);
  var priceDollars = Math.floor(priceRubles * 0.01539);
  var $card = $(".card-title");
  $card.text("$" + priceDollars + " USD");
  console.log(`The price of the flight is $${priceDollars} USD`); 
});
