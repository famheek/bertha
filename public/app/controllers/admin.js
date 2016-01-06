
export default class AdminController {

  constructor($scope, $routeParams, FirebaseUtils) {
    let dashboardId = $routeParams.id;
    console.log(dashboardId)
    FirebaseUtils.loadFirebaseObject(dashboardId, 'dashboard').$bindTo($scope, 'dashboard');

  }

}

AdminController.$inject = ['$scope', '$routeParams', 'FirebaseUtils'];
