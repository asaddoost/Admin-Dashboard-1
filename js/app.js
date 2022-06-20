  const time = document.getElementById("lineChart").getContext("2d");
  const grow = document.getElementById('user').getContext('2d');

  
//   const gradientFill = time.createLinearGradient(0, 0, 0, 290);
//   gradientFill.addColorStop(0, "hsla(218, 71%, 35%, 1)");
//   gradientFill.addColorStop(1, "hsla(218, 41%, 35%, 0.2)");


  const lineChart = new Chart(time, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'],
          datasets: [{
              data: [5000, 6580, 5850, 6570, 7980, 6250, 5361],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(65, 148, 120, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
           
          }]
      },

      options: {
        responsive: true,  
        scales: {
            x: {
              grid: {
                borderColor: 'gray'
              },
              ticks: {
                color: 'hsl(0, 0%, 80%)',
              }
            },
            y: {
              grid: {
                borderColor: 'gray'
              },
              ticks: {
                color: 'hsl(0, 0%, 80%)',
              }
            }
          }
    }
  });



//   earning chart

  const user = new Chart(grow, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'],
        datasets: [{
            data: [1200, 980, 780, 1400, 900, 1100,1500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(65, 148, 120, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
           
            borderRadius: 3,
            
            
            
        }]
    },
    options: {
        responsive: true,  
        scales: {
            x: {
              grid: {
                borderColor: 'gray'
              },
              ticks: {
                color: 'hsl(0, 0%, 80%)',
              }
            },
            y: {
              grid: {
                borderColor: 'gray'
              },
              ticks: {
                color: 'hsl(0, 0%, 80%)',
              }
            }
          }
    }
});


