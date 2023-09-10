

var options = {
  type: 'bar',
  data: {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    datasets: [
      {
        label: 'Esta semana',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 121, 202)',

      },
      {
        label: 'Semana Pasada',
        data: [1, 11, 5, 8, 3, 7],
        backgroundColor: '#D9D9D9'
      }
    ]
  },
  options: {
    scales: {
      x: {
        grid:{
          display:false,

        },
        ticks: {
          color: '#D9D9D9', 
        }
      },
      y: {
        grid:{
          color: '#D9D9D9'
        },
        beginAtZero: true,
        ticks: {
          color: '#D9D9D9',
        }
      }
    },
    plugins: {
      customValue: {
        name: 'Comparacion',
      }
    }
  },
  plugins: [
    {
      id: 'customValue',
      afterDraw: (chart, args, opts) => {
        const {
          ctx,
          data: { datasets },
          _metasets,
        } = chart;
      },
    },
  ],
};

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, options);

