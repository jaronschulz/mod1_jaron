var map;

function initMap() {


    var katzmeier = {
        info:'<strong>AJ Katzenmaier Elementaryp</strong><br>\
					24 W. Walton St.<br>Chicago, IL 60610<br>\
					<a href="https://goo.gl/maps/kn31EQHsadt">Get Directions</a>',
		lat: 41.900229, 
		long: -87.629059
    };
    

    var greenbay = {
        info:'<strong>Greenbay Elementary</strong><br>\
					1734 N. Orleans St.<br>Chicago, IL 60614<br>\
					<a href="https://goo.gl/maps/oJonbSQAPQz>Get Directions</a>', 
		lat: 42.320956,
		long: -87.868843
    };
    

    var yeager = {
    	info:'<strong>Howard A Yeager Elementary</strong><br>\
					2245 N. Southport Ave.<br>Chicago, IL 60614<br>\
					<a href="https://goo.gl/maps/kn31EQHsadt">Get Directions</a>', 
		lat: 41.976816, 
		long: -87.659916
    };

	var hart = {
        info: '<strong>Marjorie P Hart Elementary</strong><br>\
					2625 N. Orchard St.<br>Chicago, IL 60614<br>\
					<a href="https://goo.gl/maps/CBienp9498R2">Get Directions</a>',
		lat: 41.929625,
		long: -87.645971
	};
    

    var north = {
    	info: '<strong>North Elementary</strong><br>\
					1409 N. Ogden Ave.<br>Chicago, IL 60610<br>\
					<a href="https://goo.gl/maps/wo7vP5Edfam>Get Directions</a>',
		lat: 41.907125, 
		long: -87.646170
	};

    var south = {
    	info: '<strong>South Elementary</strong><br>\
					2101 N. Fremont St.<br>Chicago, IL 60614<br>\
					<a href="hhttps://goo.gl/maps/xYhCV6den9n">Get Directions</a>', 
		lat: 41.919759, 
		long: -87.651442
    };

    var locations = [
		[katzmeier.info, katzmeier.lat, katzmeier.long, 0],
		[greenbay.info, greenbay.lat, greenbay.long, 1],
		[yeager.info, yeager.lat, yeager.long, 2],
		[hart.info, hart.lat, hart.long, 3],
		[north.info, north.lat, north.long, 4],
		[south.info, south.lat, south.long, 5],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: new google.maps.LatLng (41.915549,-87.643748),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});


		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}


}