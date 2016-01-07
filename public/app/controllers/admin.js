
import {getDashboard} from '../../lib/firebase';

export default class AdminController {

  constructor($scope, $routeParams, $firebaseObject) {
    let dashboardId = $routeParams.id;
    $firebaseObject(getDashboard(dashboardId)).$bindTo($scope, 'dashboard');

    $scope.notificationGroups = [
      {name: 'actief', notification: [], editable: true, activitable: false},
      {name: 'archief', notification: [], activitable: true, editable: false},
      {name: 'voorbeelden', notification: [], activitable: true, editable: false}
    ];
  }

}

AdminController.$inject = ['$scope', '$routeParams', '$firebaseObject'];
