function startTravelSearch(destination, path) {
  var origin = $('#departureCode').val();

  var today = new Date();
  var departure_date = makeTodaysDate();
  var return_date = $('#dateText').val();
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
    predict(); // TODO: move and add parameters for image url 

    predictHelper('harvardbridge', cb_harvardbridge);
    predictHelper('ggbridge', cb_ggbridge);
    predictHelper('empirestatebuilding', cb_empirestatebuilding);
    predictHelper('hackmit', cb_hackmit);
    predictHelper('grandcanyon', cb_grandcanyon);

    while (completedCallbacks < 5) { //wait for all callbacks to finish

    }

    $('#waitingModal').modal('hide');
    console.log('finished with all predictions!');
    console.log(scores);
}

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
            html += "<div>Departing " + flight.departs_at.substring(0,10) + " at " + flight.departs_at.substring(11,16) + '</div>';
            html += "<div>Arriving " + flight.arrives_at.substring(0,10) + " at " + flight.arrives_at.substring(11,16) + '</div>';
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

function makeTodaysDate() {
    var today = new Date();
    var date = String(today.getFullYear()) + '-';
    if (today.getMonth() < 10) {
        date += "0" + String(today.getMonth()+1) + '-';
    }
    date += String(today.getDate());
    return date;
}

