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
  $('#waitingModal').modal('show');
  $.ajax({
    url: url,
    type: 'GET',
    success: function (data) {
      console.log('GET request successful');
      outputTravelInfo(data);
    }
  });
}

function outputTravelInfo(data) {
    $('#waitingModal').modal('hide');
    var html = "";

    for (var i = 0; i < data.results.length; ++i) {
        html += '<br /><br /><h4>Price: ' + data.results[i].fare.total_price + '</h4>';
        for (var j = 0; j < data.results[i].itineraries[0].outbound.flights.length; ++j) {
            var flight = data.results[i].itineraries[0].outbound.flights[j];
            html += "From " + flight.origin.airport + " To " + flight.destination.airport + "\nDeparting at ";
            html += flight.departs_at + " Arriving at " + flight.arrives_at;
        }
    }
    $('#travelInfo').html(html);
}

function addResults(path) {
  var html = "<div src=\"" + path +"\" />";
  $("#searchResultsArea").html(html);
}

