let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 // 1=whole world     20=city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates,zoomLevel)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// let mctcCoordinates = [44.9724,-93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//         .bindPopup("<a href='https://minneapolis.edu'>MCTC</a>")
//         .addTo(map)

// let stPaulCoordinates = [44.9483, -93.1099]
// let stPaulMarker = L.marker(stPaulCoordinates)
//         .bindPopup("<a href='https://saintpaul.edu'>St Paul College</a>")
//         .addTo(map)

// let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//         color: 'red',
//         radius: 30000,
//         fillOpacity: .1
// })
//         .bindPopup('Twin Cities Metro Area')
//         .addTo(map)

// let normandaleCoordinates = [44.8297,-93.3312]
// L.marker(normandaleCoordinates) // variables are not required to create markers. Benefit is more workable markers.
//         .bindPopup("<a href='https://normandale.edu'>Normandale College</a>")
//         .addTo(map)


campuses =  [
        {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
        {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
        {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
        {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
        {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
//
// campuses.forEach(function (college) {
//         L.marker(college.coordinates).addTo(map)
// })

campuses.forEach(function (college){
        let coordinates = college.coordinates
        let name = college.name
        let website = college.website
        L.marker(coordinates).bindPopup(`<a href="${website}"`).addTo(map)
})