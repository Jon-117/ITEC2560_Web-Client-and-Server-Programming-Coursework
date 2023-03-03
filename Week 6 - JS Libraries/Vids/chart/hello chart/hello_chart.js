let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
        type:'bar',
        data: {
                labels: ['Coke','Pepsi','Neither'],
                datasets: [{
                        label: 'Number of Votes',
                        data: [18,4,26],
                        backgroundColor: ['orange', 'black','red']
                }]
        },
        options: {
                scales: {
                        yAxes:[ {
                                ticks: {
                                        beginAtZero: true
                                }
                        }]
                }
        }
})