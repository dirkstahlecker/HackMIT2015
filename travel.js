function startTravelSearch() {
  var origin = "IST";
  var destination = "BOS";
  var departure_date = "2015-10-15";
  var return_date = "2015-10-21";
  var apikey = "bYIxdGBOq7VRuiWIGsvwL12PDMV9TZmU";
  var url = "http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin=%s&"
    + "destination=" + destination + "&"
    + "departure_date=" + departure_date + "&"
    + "return_date=" + return_date + "&"
    + "apikey=" + apikey;

  console.log(url);

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

$(document).on('click', '#subscribeBtn', function() {
  $.ajax({

    url: '/users/subscribe',
    type: 'GET',
    success: function () {
      console.log('subscribed');
      $("#accountUnsubscribed").hide();
      $("#accountSubscribed").show();
    }
  });
});
