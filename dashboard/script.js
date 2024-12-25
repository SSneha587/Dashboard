const invoicesCtx = document.getElementById('invoicesChart').getContext('2d');
const invoicesChart = new Chart(invoicesCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
        datasets: [
            {
                label: 'This Week',
                data: [12000, 15000, 8000, 20000, 17000, 22000, 9000], 
                borderColor: 'rgba(54, 162, 235, 1)', 
                backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                tension: 0.4, 
                fill: false, 
            },
            {
                label: 'Last Week',
                data: [9000, 14000, 10000, 18000, 15000, 20000, 8000], 
                borderColor: 'rgba(255, 99, 132, 1)', 
                backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                tension: 0.4, 
                fill: false, 
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true, 
                position: 'top', 
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days of the Week',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Invoice Amount ($)',
                },
                beginAtZero: true,
            },
        },
    },
});

const salesForecastData = {
  daily: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      weighted: [1000, 2000, 1500, 2500, 3000, 3500, 4000],
      won: [800, 1500, 1200, 2000, 2500, 3000, 3200]
  },
  weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      weighted: [15000, 18000, 20000, 22000],
      won: [12000, 15000, 17000, 20000]
  },
  monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      weighted: [60000, 65000, 70000, 75000, 80000, 85000],
      won: [50000, 55000, 60000, 65000, 70000, 75000]
  },
  quarterly: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      weighted: [180000, 200000, 220000, 250000],
      won: [150000, 170000, 190000, 220000]
  }
};

const salesForecastCtx = document.getElementById('salesForecastChart').getContext('2d');
let salesForecastChart;
function updateSalesForecastChart(dataType) {
  const data = salesForecastData[dataType];

  if (salesForecastChart) {
      salesForecastChart.destroy();
  }

  salesForecastChart = new Chart(salesForecastCtx, {
      type: 'bar',
      data: {
          labels: data.labels,
          datasets: [
              {
                  label: 'Weighted',
                  data: data.weighted,
                  backgroundColor: 'rgba(153, 102, 255, 0.7)' 
              },
              {
                  label: 'Won',
                  data: data.won,
                  backgroundColor: 'rgba(255, 205, 86, 0.7)' 
              }
          ]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: true,
                  position: 'top',
              },
          },
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Time Period',
                  },
              },
              y: {
                  title: {
                      display: true,
                      text: 'Sales Amount ($)',
                  },
                  beginAtZero: true,
              },
          },
      },
  });
}

updateSalesForecastChart('monthly');
document.getElementById('salesForecastOptions').addEventListener('change', (event) => {
  updateSalesForecastChart(event.target.value);
});
