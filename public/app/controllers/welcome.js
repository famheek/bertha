import {authEmailUser, createEmailUser, authFacebookUser} from '../../lib/firebase';
export default class WelcomeController {

  constructor($scope, $location) {

    $scope.authFacebookUser= function() {
      authFacebookUser();
    }

    $scope.authEmailUser = function(email, password) {
      console.log("email auth");
      authEmailUser(email, password);
    }

    $scope.createEmailUser = function(email, password) {
      createEmailUser(email, password);
    }

    // $scope.linkToPage = function(path) {
    //   $location.path(path);
    // }

  }

}

WelcomeController.$inject = ['$scope', '$location'];
