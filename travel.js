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
    success: function (data) {
      console.log('GET request successful');
      console.log(data);
      
      for (var i = 0; i < data.results.length; ++i) {
        console.log(data.results[i].fare.total_price);
        for (var j = 0; j < data.results[i].itineraries[0].outbound.flights.length; ++j) {
          console.log(data.results[i].itineraries[0].outbound.flights[j]);
        }
        for (var k = 0; k < data.results[i].itineraries[0].inbound.flights.length; ++k) {
            console.log(data.results[i].itineraries[0].inbound.flights[k]);
        }
      }
    }
  });
  //var xmlHttp = new XMLHttpRequest();
  //xmlHttp.open( "GET", url, true ); // 
  //xmlHttp.send( null );
  //return xmlHttp.responseText;
}

function addResults(path) {
  var html = "<div src=\"" + path +"\" />";
  $("#searchResultsArea").html(html);
}

