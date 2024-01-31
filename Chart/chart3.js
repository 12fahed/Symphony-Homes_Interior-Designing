const ctx3 = document.getElementById('line').getContext('2d');
const line = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Sales',
            data: [10, 25, 15, 30, 20, 35, 28],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    }
});
