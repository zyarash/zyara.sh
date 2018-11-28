function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: 40, lng: 0},
        disableDefaultUI: true,
        zoom: 3
    });

    var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

    var script = document.createElement('script');
    var url = ['https://www.googleapis.com/fusiontables/v2/query?'];
    url.push('sql=');
    var query = 'SELECT name, kml_4326 FROM ' + '1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ';
    var encodedQuery = encodeURIComponent(query);
    url.push(encodedQuery);
    url.push('&callback=drawMap');
    url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
    script.src = url.join('');
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
};

function drawMap(data) {
    var rows = data['rows'];
    var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

    for (var i in rows) {
        if (rows[i][0] != 'Antarctica') {
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
            if (geometries) {
                for (var j in geometries) {
                    newCoordinates.push(constructNewCoordinates(geometries[j]));
                }
            } else {
                newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
            }
            var randomnumber = Math.floor(Math.random() * 4);
            var country = new google.maps.Polygon({
                paths: newCoordinates,
                strokeColor: colors[randomnumber],
                strokeOpacity: 0,
                strokeWeight: 1,
                fillColor: colors[randomnumber],
                fillOpacity: 0.3
            });
            google.maps.event.addListener(country, 'mouseover', function() {
                this.setOptions({fillOpacity: 1});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
                this.setOptions({fillOpacity: 0.3});
            });

            country.setMap(map);
        }
    }

}


function constructNewCoordinates(polygon) {
    var newCoordinates = [];
    var coordinates = polygon['coordinates'][0];
    for (var i in coordinates) {
        newCoordinates.push(
                new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
    }
    return newCoordinates;
}


$(function() { });


$(document).ready(function(){
    $('#container').fadeTo(800, 1);
});
