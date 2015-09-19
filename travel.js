function startTravelSearch() {
  var origin = "IST";
  var destination = "BOS";
  var departure_date = "2015-10-15";
  var return_date = "2015-10-21";
  var apikey = "bYIxdGBOq7VRuiWIGsvwL12PDMV9TZmU";
  var number_of_results = "10"; 
  var url = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?"
    + "apikey=" + apikey + "&"
    + "origin=" + origin + "&"
    + "destination=" + destination + "&"
    + "departure_date=" + departure_date + "&"
    + "return_date=" + return_date + "&"
    + "number_of_results=" + number_of_results;

  console.log(url);

  $.ajax({
    url: url,
    type: 'GET',
    success: function () {
      console.log('success');
    }
  });
  //var xmlHttp = new XMLHttpRequest();
  //xmlHttp.open( "GET", url, false ); // false for synchronous request
  //xmlHttp.send( null );
  //return xmlHttp.responseText;
}

