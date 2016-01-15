import {authEmailUser, createEmailUser, authFacebookUser} from '../../lib/firebase';
import overviewController from '../dialogs/overviewDialog';
import signUpController from '../dialogs/signUpDialog';

import overviewDialogTmpl from '../dialogs/overviewDialog.html!';
import signUpDialogTmpl from '../dialogs/signUpDialog.html!';

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
      template: overviewDialogTmpl,
      parent: angular.element(document.body)
    });
  }

  $scope.showSignUpDialog = function() {
    $mdDialog.show({
      controller: signUpController,
      template: signUpDialogTmpl,
      parent: angular.element(document.body)
    })
    .then(function(email) {
      $scope.email = email;
    });
  }

 }

}

WelcomeController.$inject = ['$scope', '$location', '$mdDialog'];
