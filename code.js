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
  var priceRubles = response.data.ATL[0].price
  console.log(priceRubles);
  var priceDollars = Math.floor(priceRubles * 0.01539);
  var $card =$('.card-title');
  $card.text('$'+priceDollars+ ' USD'); 
});

var weather = {
	async: true,
	crossDomain: true,
	url: "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&lang=en&units=imperial&mode=JSON&q=Baltimore",
	method: "GET",
	headers: {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "c6133bf5c4msh6e25171d00ff6f5p1d19fbjsn05887a4d5fe0"
	}
}   

$.ajax(weather).done(function(answer) {
	console.log(answer.MAIN);
});
