let zoomLevel = 9 // 1=whole world     20=city blocks
let mapCenter = [30,-93]

let map = L.map('college-map').setView(metroAreaCenterCoordinates,zoomLevel)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);






let bridges = [{
        name: ,
        cityState: ,
        span: ,
        location: ,
}]

bridges.forEach( bridge => {
        let location = bridge.location
        let name = bridge.name
        let cityState = bridge.cityState
        let span = bridge.span
        
        L.marker(location).bindPopup(`${name}<br>${span} <br>${cityState}`).addTo(map)
})