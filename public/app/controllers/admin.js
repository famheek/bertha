
import {getDashboard, getAuth} from '../../lib/firebase';

export default class AdminController {

  constructor($scope, $routeParams, $firebaseObject, $timeout, $q, $location) {

    if(!getAuth()) {
      $location.path('/#');
    }

    let dashboardId = $routeParams.id;

    $scope.loaded = false;
    let promises = [];

    let dashboardPromise = $firebaseObject(getDashboard(dashboardId)).$bindTo($scope, 'dashboard').then(function() {
      let dashboard = $scope.dashboard;
      dashboard.notifications = dashboard.notifications || [];
    });
    promises.push(dashboardPromise);

    $q.all(promises).then(function() {
      $scope.loaded = true;
    });

    $scope.now = new Date();

    function updateDate() {
      $scope.now = new Date();
      $timeout(updateDate, 1000 * 60 * 1); // every minute
    }
    updateDate();

    function newDraft() {
      return {
        description: '',
        repeatMode: 0,
        showMode: '2h'
      };
    }

    $scope.draftNotification = newDraft();

    $scope.pushDraftNotification = function() {
      $scope.dashboard.notifications.push($scope.draftNotification);
      $scope.draftNotification = newDraft();
    };

    $scope.removeNotification = function(notification) {
      let notifications = $scope.dashboard.notifications;
      let index = notifications.indexOf(notification);
      if (index >= 0) {
        notifications.splice(index, 1);
      }
    }
  }

}

AdminController.$inject = ['$scope', '$routeParams', '$firebaseObject', '$timeout', '$q', '$location'];
