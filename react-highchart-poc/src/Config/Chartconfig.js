const options = {
      plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {}
                }
            }
          },
        column: {
            states: {
              hover: {
                color: 'red',
                borderColor: 'green',
                borderWidth: 5,
              },
            },
          },
      },
      chart: {
        type: 'column',
      },
    };

export default options;