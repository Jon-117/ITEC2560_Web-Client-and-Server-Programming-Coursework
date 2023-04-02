let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let latSpan = document.querySelector('#iss-lat')
let longSpan = document.querySelector('#iss-long')
let dateSpan = document.querySelector('#date')
let updateTime = 10000

let maxFailedAttempts = 3

let issMarker
let issIcon = L.icon ({
        iconUrl: 'space-station.png',
        iconSize: [20,20],
        iconAnchor: [10,10]
})
let date

var map = L.map('map').setView([0,0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Attribution: https://www.flaticon.com/free-icon/space-station_4657658?term=space+station&related_id=4657658

iss(maxFailedAttempts)
function iss(attempts) {
        if (attempts <= 0) {
                alert('API Call Failed')
                return
        }
        else {
                fetch(url)
                        .then(response => {
                                return response.json() // converts repsonse to json
                        })
                        .then(issData => { // json information is automatically sent to subsequent .then() calls. Here we assign it the designation issData. The .json() method returns another promise.
                                console.log(issData)

                                // TODO - Add polyline tracer to the map. Remove last version of it
                                //  (if it already exists), then add the updated version again.

                                let lat = issData.latitude
                                let long = issData.longitude
                                date = Date()
                                // display info on page
                                latSpan.innerHTML = lat
                                longSpan.innerHTML = long
                                dateSpan.innerHTML = date
                                if (!issMarker) {
                                        issMarker = L.marker([lat, long],{icon:issIcon}).addTo(map);
                                        issMarker.bindPopup(`Current Location of the International Space Station<br>`+ lat + ", " + long + `<br><a href="https://www.flaticon.com/free-icons/space-station" title="space station icons">Space station icons created by Freepik - Flaticon</a>`)
                                }
                                else {
                                        issMarker.setLatLng([lat,long])
                                        issMarker.bindPopup(`Current Location of the International Space Station<br>`+ lat + ", " + long + `<br><a href="https://www.flaticon.com/free-icons/space-station" title="space station icons">Space station icons created by Freepik - Flaticon</a>`)
                                
                                }
                        
                        })
                        .catch(err => {
                                console.log('Error! ' + err)
                                attempts--
                        })
                        .finally( () => {
                                setTimeout(iss,updateTime,attempts)
                                console.log(attempts)
                        } )
        }
                
        }