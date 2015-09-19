function addImage(path) {
    var html = "<img src=\"" + path + "\" />"
    $("#imageArea").html(html);
}

function startImageSearch() {
    var searchText = $('#searchText').val();

    var tags = localstorage.searchText;

    if (tags == "") { //empty, not in database

    }
    else {
        var imageInfoObj = JSON.parse(tags);
        for (var i = 0; i < imageInfoObj; i++) {

        }
    }
}

function addObjToDatabase() {
    var key = $('#addKey').val();
    var value = $('#addValue').val();
    localstorage.key = value;
}
