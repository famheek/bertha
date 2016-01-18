export default class DashboardController {

  constructor($scope, $timeout) {
    $scope.now = new Date();

    function updateDate() {
      $scope.now = new Date();
      $timeout(updateDate, 1000 * 60 * 1); // every minute
    }
    updateDate();
  }

}

DashboardController.$inject = ['$scope', '$timeout'];
