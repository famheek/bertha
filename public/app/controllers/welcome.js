import {authEmailUser, createEmailUser, authFacebookUser} from '../../lib/firebase';
import overviewController from '../dialogs/overviewDialog';
import signUpController from '../dialogs/signUpDialog';

export default class WelcomeController {

  constructor($scope, $location, $mdDialog) {

    $scope.authFacebookUser = function() {
      authFacebookUser(showOverviewDialog);
    }

    $scope.authEmailUser = function(email, password) {
      authEmailUser(email, password, function(error) {
        if(!error) {
          showOverviewDialog();
        }
      });
    }

  function showOverviewDialog() {
    $mdDialog.show({
      controller: overviewController,
      templateUrl: 'app/dialogs/overviewDialog.html',
      parent: angular.element(document.body)
    });
  }

  $scope.showSignUpDialog = function() {
    $mdDialog.show({
      controller: signUpController,
      templateUrl: 'app/dialogs/signUpDialog.html',
      parent: angular.element(document.body)
    })
    .then(function(email) {
      $scope.email = email;
    });
  }

 }

}

WelcomeController.$inject = ['$scope', '$location', '$mdDialog'];
