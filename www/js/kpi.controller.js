angular.module('starter')

  .controller('KpiCtrl', function ($scope, $ionicModal, $timeout) {
    // Generate the KPI chart
    var chart = c3.generate({
      bindto: '#kpi-chart',
      data: {
        columns: [
          ['data', 0, 5, 6, 10, 9, 4, 3, 2, 0]
        ],
        types: {
          data: 'area-spline'
        },
        colors: {
          data: '#55bac1'
        }
      },
      legend: { show: false },
      padding: {
        bottom: 0
      },
      axis: {
        y: {
          show: false
        },
        x: {
          //show: false
          type: 'category',
          categories: ['0%', '20%', '40%'],
          tick: {
            centered: true,
            //fit: false,
            //culling: false
            //values: [1, 2, 4, 8, 16, 32]
          }
        }
      },
      tooltip: { show: false },
      size: {
        width: 200,
        height: 100
      }
    });
  });
