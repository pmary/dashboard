angular.module('starter')

  .controller('BudgetCtrl', function ($scope, $timeout) {
    $scope.budgetTile = {
      globalBudget : 12732,
      globalSpend  : 10017,
      insertionOrders : [
        {advId:718, budget:8200, spend: 6470},
        {advId:894, budget:200, spend: 260},
        {advId:956, budget:420, spend: 312},
        {advId:215, budget:1600, spend: 1340},
        {advId:332, budget:750, spend: 845},
        {advId:763, budget:1100, spend: 566},
        {advId:419, budget:462, spend: 224}
      ],
      getPercentage : function(){
        return Math.round((this.globalSpend / this.globalBudget) * 100,2);
      }
    };

    var donutChart = c3.generate({
      bindto: '#donutChart',
      size: {
        width:100,
        height:100
      },
      data: {
        type   : 'donut',
        columns: [
          ['data1', $scope.budgetTile.globalBudget - $scope.budgetTile.globalSpend],
          ['data2', $scope.budgetTile.globalSpend]
        ],
        colors : {
          'data1': '#4a2854',
          'data2': '#ad7fc6'
        }
      },
      donut: {
        title: $scope.budgetTile.getPercentage()+' %',
        label:{
          show:false
        },
        expand:false,
        width:6
      },
      legend: {
        show:false,
        position : 'bottom'
      },
      tooltip: {
        show:false
      }
    });
  });
