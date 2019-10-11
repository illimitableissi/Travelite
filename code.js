var settings = {
  async: true,
  crossDomain: true,
  url:
    "http://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=ATL&destination=LAX&token=15b8d8251f337fc45164a04b18f5025a",
  method: "GET"
};

$.ajax(settings).done(function(response) {
  console.log(response);
  // var priceRubles = response.data;
  // console.log(priceRubles);
  // console.log(`The price of the flight is $${priceDollars} USD`);
});
