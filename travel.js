function startTravelSearch(destination, path) {
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
      outputTravelInfo(data, path);
    }
  });
}

function outputTravelInfo(data, path) {
    $('#waitingModal').modal('hide');
    $('#imageArea').html('');
    var html = "";

    addImage(path, 'listingsInfoImage', false);

    for (var i = 0; i < data.results.length; ++i) {
        html += '<br /><br /><div class="row fullwidth"><h4>Price: ' + data.results[i].fare.total_price + '</h4>';
        for (var j = 0; j < data.results[i].itineraries[0].outbound.flights.length; ++j) {
            html += '<div class="row">'
            var flight = data.results[i].itineraries[0].outbound.flights[j];
            html += '<div class="col-md-4 right">';
            html += "From " + flight.origin.airport + "<br /> To " + flight.destination.airport;
            html += '</div><div class="col-md-4">';
            html += "Departing at " + flight.departs_at + " Arriving at " + flight.arrives_at;
            html += '</div></div>';
        }
        html += '</div>';
    }
    $('#listingsInfoText').html(html);
}

function addResults(path) {
  var html = "<div src=\"" + path +"\" />";
  $("#searchResultsArea").html(html);
}

