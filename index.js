const ctx = document.getElementById('myChart');


fetch('data.json')
.then(function(response){
    if(response.ok == true){
        return response.json();
    }
})

.then(function(data){
    //console.log(data);
    creatChart(data, 'bar');
});


function creatChart(data,type){
     new Chart(ctx, {
        type: type,
        data: {
          labels: data.map(row => row.day),
          datasets: [{
            data: data.map(row => row.amount),
            backgroundColor: [
               'EC775F',
               'EC775F',
               '76B5BC',
               'EC775F',
               'EC775F',
               'EC775F',
               'EC775F',
              ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          maintainAspectRatio: false
        }
      });
}

  