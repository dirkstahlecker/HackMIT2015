var db_var;

function addImage(path) {
    console.log("adding image");
    var dest = "";

    for (var i = 0; i < db_var.images.length; i++) {
        if (db_var.images[i].filepath == path) {
            dest = db_var.images[i].location;
        }
    }
    if (dest == "") {
        return;
    }
    /*
    var html = "";
    html += '<img src="' + path + '" width="400" height="300" onclick="startTravelSearch("' + dest + '")"/>"';
    html += "</a>";
    var oldhtml = $('#imageArea').html();
    $("#imageArea").html(oldhtml + html);
    */
    jQuery('<img/>', {
        src: path,
        width: '400px',
        height: '300px',
        onclick: 'startTravelSearch("' + dest + '")'
    }).appendTo('#imageArea');
}

function startImageSearch() {
    console.log('starting image search');
    $('#imageArea').html("");
    var searchText = $('#searchText').val();

    for (var i = 0; i < db_var.images.length; i++) {
        if (db_var.images[i].tags.indexOf(searchText) > -1) { //tag is found
            addImage(db_var.images[i].filepath);
        }
    }

    /*
    var transaction = db.transaction(["images"]);
    var objectStore = transaction.objectStore("images");
    var request = objectStore.get("/users/dirk/downloads/bridge.jpg");
    request.onerror = function(event) {
      // Handle errors!
    };
    request.onsuccess = function(event) {
      // Do something with the request.result!
      alert("Tags = " + request.result.tags);
    };
    */
}

$(document).ready(function () {
    //set up the global variable that is the database store
    db_var = {
        "images": [
            {filepath: "assets/images/bridge.jpg", tags: "bridge san francisco", location: "sfo"},
            {filepath: "assets/images/canyon.jpg", tags: "grand canyon arizona", location: "las"},
            {filepath: "assets/images/bryce.jpg", tags: "bryce canyon utah", location: "las"}
        ]
    }
    //TODO: multiple airport support



    /*
    const imageData = [
        { filepath: "/users/dirk/downloads/bridge.jpg", tags: "bridge|San Franscisco|" }
    ];
    
    var request = window.indexedDB.open("MyTestDatabase", 3);
    request.onerror = function(event) {
        // Do something with request.errorCode
    };
    request.onsuccess = function(event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("images", { keyPath: "filepath" });
        objectStore.createIndex("tags", "tags", { unique: false });
        objectStore.createIndex("filepath", "filepath", { unique: true });

        objectStore.transaction.oncomplete = function(event) {
            // Store values in the newly created objectStore.
            var imageObjectStore = db.transaction("images", "readwrite").objectStore("images");
            for (var i in imageData) {
                imageObjectStore.add(imageData[i]);
            }
        }
    };
    */
});
