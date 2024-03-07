function dibujarGrafico(precios, demandaBajoArray, demandaMedioArray,demandaAltoArray, demandaTotalArray) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: precios,
            datasets: [{
                label: 'Estrato Bajo',
                data: demandaBajoArray,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }, {
                label: 'Estrato Medio',
                data: demandaMedioArray,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }, 
            
            {
                label: 'Estrato Alto',
                data: demandaAltoArray,
                borderColor: 'rgb(205, 92, 92)',
                borderWidth: 2
            },
            
            
            
            
            {
                label: 'Estrato Total',
                data: demandaTotalArray,
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
