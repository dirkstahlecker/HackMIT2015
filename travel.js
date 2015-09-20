//called by clicking on image

function startTravelSearch() {
  console.log('in startTravelSearch');
  var origin = $('#departureCode').val();
  var destination = locationFromKeyword[keyword];
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
      outputTravelInfo(data);
    }
  });
}

/*var scores = {
    'harvardbridge': 0,
    'ggbridge': 0,
    'empirestatebuilding': 0,
    'hackmit': 0,
    'grandcanyon': 0
};*/

var keywords = ['harvardbridge', 'ggbridge', 'empirestatebuilding', 'hackmit', 'grandcanyon'];

var imageFromKeyword = {
    'harvardbridge': 'http://www.mit.edu/activities/hillel/images/harvard_bridge.jpg',
    'ggbridge': 'http://www.travlang.com/blog/wp-content/uploads/2010/04/golden-gate.jpg',
    'empirestatebuilding': 'http://www.cpexecutive.com/wp-content/uploads/2011/09/091511-Empire-State-Building-Picture-EXT-DAY.jpg',
    'hackmit': 'http://www.bostonglobe.com/rf/image_r/Boston/2011-2020/2013/10/06/BostonGlobe.com/Metro/Images/07hackmit07.r.jpg',
    'grandcanyon': 'http://www.papillon.com/acc_img/vault/papillon/img/canyon-hero.jpg'
}

var locationFromKeyword = {
    'harvardbridge': 'bos',
    'ggbridge': 'sfo',
    'empirestatebuilding': 'jfk',
    'hackmit': 'bos',
    'grandcanyon': 'las'
}

var keyword = "";
function determineImage(scores, url) {
    var highest = 0;
    for (var i = 0; i < keywords.length; i++) {
        if (highest < scores[keywords[i]]) {
            highest = scores[keywords[i]];
            keyword = keywords[i];
        }
    }

    console.log(highest);
    console.log(keyword);

    $('#listingsInfoImage').html('Your Destination:');

    //put images on screen
    addImage(url, 'listingsInfoImage', false);
    jQuery('<img/>', {
        src: imageFromKeyword[keyword],
        width: '400px',
        height: '300px',
    }).appendTo('#listingsInfoImage');

}

function outputTravelInfo(data) {
    $('#waitingModal').modal('hide');
    var html = "";

    for (var i = 0; i < data.results.length; ++i) {
        html += '<br /><br /><div class="row fullwidth"><h4>Price: ' + data.results[i].fare.total_price + '</h4>';
        for (var j = 0; j < data.results[i].itineraries[0].outbound.flights.length; ++j) {
            if (j == 0 || j == data.results[i].itineraries[0].outbound.flights.length) {
                html += '<div class="row" bold>';
            } else {
                html += '<div class="row">';
            }

            var flight = data.results[i].itineraries[0].outbound.flights[j];

            html += '<div class="col-md-4 right">';
            html += "From " + flight.origin.airport + "<br /> To " + flight.destination.airport;
            html += '</div><div class="col-md-8 left">';
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

