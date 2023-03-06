var bridgeIcon = L.icon({
        iconUrl: 'bridge.png', // https://www.flaticon.com/
        iconSize:     [30, 30],
        iconAnchor:   [1,1],
        popupAnchor:  [0, 0]
});

var longestBridgeIcon = L.icon({
        iconUrl: 'golden-gate-bridge.png', // https://www.flaticon.com/
        iconSize:     [30, 30],
        iconAnchor:   [1,1],
        popupAnchor:  [0, 0]
});



// tell the map where to look
let mapCenter = [40,-98]
let zoomLevel = 3               // 1=whole world     20=city blocks

// create the map
let map = L.map('bridge_map').setView(mapCenter,zoomLevel)

// set the view - show the world
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// bridge data
let bridges = [
        {
                name: 'Verrazano-Narrows Bridge',
                cityState: 'New York, NY',
                span: 1298.4,
                location: [40.6066, -74.0447],
        },
        {
                name: 'Golden Gate Bridge',
                cityState: 'San Francisco and Marin, CA',
                span: 1280.2,
                location: [37.8199, -122.4783],
        },
        {
                name: 'Mackinac Bridge',
                cityState: 'Mackinaw and St Ignace, MI',
                span: 1158.0,
                location: [45.8174, -84.7278],
        },
        {
                name: 'George Washington Bridge',
                cityState: 'New York, NY and New Jersey, NJ',
                span: 1067.0,
                location: [40.8517, -73.9527],
        },
        {
                name: 'Tacoma Narrows Bridge',
                cityState: 'Tacoma and Kitsap, WA',
                span: 853.44,
                location: [47.2690, -122.5517],
        }]
        
// check longest bridge

let longest = ''
let longestSpan = 0

bridges.forEach( bridge => {
        if (bridge.span > longestSpan){
                longest = bridge.name
                longestSpan = bridge.span
        }
})
console.log(longest + ' ' + longestSpan)
// create the map markers
bridges.forEach( bridge => {
        let location = bridge.location
        let name = bridge.name
        let cityState = bridge.cityState
        let span = bridge.span
        if (name = longest){
                console.log(bridge.name) // why does it only log the longest name, but it still puts the correct info on the marker???
                L.marker(location,{icon:longestBridgeIcon}).bindPopup(`${name}<br>${span} <br>${cityState}`).addTo(map)
        } else {
                L.marker(location,{icon:bridgeIcon}).bindPopup(`${name}<br>${span} <br>${cityState}`).addTo(map)
        }
})