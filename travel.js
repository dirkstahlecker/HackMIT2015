function startTravelSearch(destination) {
  var origin = $('#departureCode').val();

  var today = new Date();
  var departure_date = "2015-09-22";//String(today.getFullYear()) + '-' + String(today.getMonth()+1) + '-' + String(today.getDate()); //TODO: specify
  var return_date = "2015-10-10";//$('#dateText').val();
  var apikey = "bYIxdGBOq7VRuiWIGsvwL12PDMV9TZmU";
  var number_of_results = "10"; 
  var url = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?"
    + "apikey=" + apikey + "&"
    + "origin=" + origin + "&"
    + "destination=" + destination + "&"
    + "departure_date=" + departure_date + "&"
    + "return_date=" + return_date + "&"
    + "number_of_results=" + number_of_results + "&";

  console.log(url);

  $.ajax({
    url: url,
    type: 'GET',
    success: function (data) {
      console.log('GET request successful');
      //console.log(data);
      
      outputTravelInfo(data);
    }
  });
  //var xmlHttp = new XMLHttpRequest();
  //xmlHttp.open( "GET", url, true ); // 
  //xmlHttp.send( null );
  //return xmlHttp.responseText;
}

function outputTravelInfo(data) {
    var html = "";

    for (var i = 0; i < data.results.length; ++i) {
        html += "<br /><br />Price: " + data.results[i].fare.total_price;
        html += "<br />Outbound Flights:<br />";
        for (var j = 0; j < data.results[i].itineraries[0].outbound.flights.length; ++j) {
            var flight = data.results[i].itineraries[0].outbound.flights[j];
            html += "From " + flight.origin.airport + " To " + flight.destination.airport + "\nDeparting at ";
            html += flight.departs_at + " Arriving at " + flight.arrives_at;
        }
        html += "<br />Inbound Flights:<br />";
        for (var k = 0; k < data.results[i].itineraries[0].inbound.flights.length; ++k) {
            var flight_in = data.results[i].itineraries[0].inbound.flights[k];
            html += "From " + flight_in.origin.airport + " To " + flight_in.destination.airport + "\nDeparting at ";
            html += flight_in.departs_at + " Arriving at " + flight_in.arrives_at;
        }
    }
    $('#travelInfo').html(html);
}

function addResults(path) {
  var html = "<div src=\"" + path +"\" />";
  $("#searchResultsArea").html(html);
}

