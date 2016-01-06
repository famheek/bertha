
import {getDashboard} from '../../lib/firebase';

export default class AdminController {

  constructor($scope, $routeParams, $firebaseObject) {
    let dashboardId = $routeParams.id;
    $firebaseObject(getDashboard(dashboardId)).$bindTo($scope, 'dashboard');

  }

}

AdminController.$inject = ['$scope', '$routeParams', '$firebaseObject'];
