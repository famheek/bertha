import {getAuth} from '../../lib/firebase';

export default class DashboardController {

  constructor($scope, $timeout, $location) {

  	if(!getAuth()) {
      $location.path('/#');
    }

    $scope.now = new Date();

    function updateDate() {
      let now = new Date();
      $timeout(updateDate, 1000 * 60 * 1); // every minute
    }
    updateDate();
  }

}

DashboardController.$inject = ['$scope', '$timeout', '$location'];
