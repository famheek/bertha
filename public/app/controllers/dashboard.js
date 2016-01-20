import {getAuth, getDashboard} from '../../lib/firebase';

export default class DashboardController {

  constructor($scope, $timeout, $location, $routeParams, $q, $firebaseObject) {

    let dashboardId = $routeParams.id;

  	if(!getAuth()) {
      $location.path('/#');
    }

    $scope.now = new Date();

    function updateDate() {
      $scope.now = new Date();
      $timeout(updateDate, 1000 * 60 * 1); // every minute
    }
    updateDate();


    $scope.loaded = false;
    let promises = [];

    let dashboardPromise = $firebaseObject(getDashboard(dashboardId)).$bindTo($scope, 'dashboard');
    promises.push(dashboardPromise);

    $q.all(promises).then(function() {
      $scope.loaded = true;
    });
  }

}

DashboardController.$inject = ['$scope', '$timeout', '$location', '$routeParams', '$q', '$firebaseObject'];
