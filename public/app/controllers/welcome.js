import {authEmailUser, createEmailUser, authFacebookUser, getAuth, findOwnedDashboards, addDashboard} from '../../lib/firebase';
import signUpController from '../dialogs/signUpDialog';

import signUpDialogTmpl from '../dialogs/signUpDialog.html!';

export default class WelcomeController {

  constructor($scope, $location, $mdDialog) {

    if(getAuth()) {
      openAdmin();
    }

    function openAdmin() {
      findOwnedDashboards().once("value", function(snapshot) {
        if(snapshot.val()) {
          let dashboardIds = Object.keys(snapshot.val());
          let dashboardId = dashboardIds[0];
          $scope.$apply(function() {
            $location.path(dashboardId + '/admin');
          });
        } else {
          addDashboard();
          findOwnedDashboards().on("child_added", function(snapshot) {
            openAdmin();
          });
        }
    	});
    }

    $scope.authFacebookUser = function() {
      authFacebookUser(openAdmin());
    }

    $scope.authEmailUser = function(email, password) {
      authEmailUser(email, password, function(error) {
        if(!error) {
          openAdmin();
        }
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
